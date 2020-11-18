import React, { component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewList from './reviewList.jsx';
import styled from 'styled-components';
import RatingsBreakdown from './ratingsBreakdown.jsx';
import Recommended from './recommended.jsx'
import { shuffle, forEach } from 'underscore';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewData: [],
      displayData: [],
      reviewCount: 2,
      clickedHelpful: false,
      newest: false,
      helpful: false,
      relevant: false
    };

    this.onLoadMoreClick = this.onLoadMoreClick.bind(this);
    this.onHelpfulClick = this.onHelpfulClick.bind(this);
    this.onRelevantClick = this.onRelevantClick.bind(this);
    this.onNewestClick = this.onNewestClick.bind(this);
    this.onHelpfulClickNumber = this.onHelpfulClickNumber.bind(this);
    this.onStarRatingClick = this.onStarRatingClick.bind(this);
    this.onModalReviewSubmit = this.onModalReviewSubmit.bind(this);
  }

  onHelpfulClickNumber(e, id) {
    const reviewId = id
      if (!this.state.clickedHelpful) {
      axios.put('/api/products/1337/reviews', {id: reviewId, helpful: e.target.innerText})
        .then((success) => {
          return axios.get('/api/products/1337/reviews')
        })
        .then((success) => {
          this.setState({
            reviewData: success.data,
            displayData: success.data,
            clickedHelpful: true
          })

          if (this.state.newest) {
            this.onNewestClick();
          } else if (this.state.helpful) {
            this.onHelpfulClick();
          } else if (this.state.relevant) {
            this.onRelevantClick();
          }
        })
      }
  }

  onStarRatingClick(number) {
    let filterData = [];
    forEach(this.state.reviewData, review => {
      if (review.value === number) {
        filterData.push(review);
      }
    })

    this.setState({
      displayData: filterData
    })
  }

  onNewestClick() {
    let allData = this.state.reviewData.slice();
    allData.sort((a, b) => {
      return new Date(b.review_date) - new Date(a.review_date);
    })

    this.setState({
      displayData: allData,
      newest: true,
      helpful: false,
      relevant: false
    })
  }

  onHelpfulClick() {
    let allData = this.state.reviewData.slice();
    allData.sort((a, b) => {
      return b.helpfulY - a.helpfulY;
    })

    this.setState({
      displayData: allData,
      newest: false,
      helpful: true,
      relevant: false
    })
  }

  onRelevantClick() {
    let allData = this.state.reviewData.slice();
    allData = shuffle(allData);

    this.setState({
      displayData: allData,
      newest: false,
      helpful: false,
      relevant: true
    })
  }

  onLoadMoreClick() {
    this.setState({
      reviewCount: this.state.reviewCount + 3
    })
  }

  // onModalReviewSubmit(obj) {
  //   axios.post('/api/products/1337/reviews', obj)
  //     .then((success) => {
  //       console.log('Posted to the DB from client')
  //     })
  // }

  componentDidMount() {
    axios.get('/api/products/1337/reviews')
      .then((success) => {
        console.log('SUCCESS', success.data)
        this.setState({
          reviewData: success.data,
          displayData: success.data
        })
      })
      .catch((err) => (
        console.log(err)
      ))
  }

  render() {
    return (
      <div>
        <Title>Ratings & Reviews</Title>
        <Grid>
          <Row>
            <Col
              style={{marginRight: '13px'}}
            >
              <Row>
                <RatingsBreakdown
                  size={1}
                  allReviews={this.state.reviewData}
                  onStarRatingClick={this.onStarRatingClick}
                />
              </Row>
              <br></br>
              <Row>
                <Recommended
                  reviewState={this.state}
                />
              </Row>
            </Col>
            <Col size={2}>
              <ReviewList
                reviewState={this.state}
                onLoadMoreClick={this.onLoadMoreClick}
                onHelpfulClick={this.onHelpfulClick}
                onRelevantClick={this.onRelevantClick}
                onNewestClick={this.onNewestClick}
                onHelpfulClickNumber={this.onHelpfulClickNumber}
                onModalReviewSubmit={this.onModalReviewSubmit}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

//Styled Components
const Title = styled.h2`
  color: Black;
  font-size: 30px;
`;

const Grid = styled.div`

`;

const Row = styled.div`
  display:flex;
`;

const Col = styled.div`
  flex: ${(props) => props.size};
`;

export default App;
