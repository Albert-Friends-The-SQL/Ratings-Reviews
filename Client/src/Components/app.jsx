import React, { component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewList from './reviewList.jsx';
import styled from 'styled-components';
import RatingsBreakdown from './ratingsBreakdown.jsx';
import Recommended from './recommended.jsx'
import { shuffle, forEach } from 'underscore';
import '../../Dist/styles.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewData: [],
      displayData: [],
      reviewCount: 2,
      starRating: [],
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
      axios.put('/api/reviews', {id: reviewId, helpful: e.target.innerText})
        .then((success) => {
          return axios.get('/api/reviews')
        })
        .then((success) => {
        let allData = success.data.slice();
        allData.sort((a, b) => {
          return b.id - a.id;
        })
          this.setState({
            reviewData: allData,
            displayData: allData,
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
    let currentStarRating = this.state.starRating.slice();
    if (currentStarRating.indexOf(number) === -1) {
      currentStarRating.push(number);
    } else {
      currentStarRating.splice(currentStarRating.indexOf(number), 1);
    }

    this.setState({
      starRating: currentStarRating
    })

    forEach(this.state.reviewData, review => {
      // if (review.value === number) {
        if (currentStarRating.includes(review.value)) {
        filterData.push(review);
        filterData.sort((a, b) => {
          return b.value - a.value;
        })
        if (this.state.helpful) {
          filterData.sort((a, b) => {
            return b.helpfulY - a.helpfulY;
          })
        } else if (this.state.newest) {
          filterData.sort((a, b) => {
            return new Date(b.review_date) - new Date(a.review_date);
          })
        }
      } else if (currentStarRating.length === 0) {
        filterData = this.state.reviewData.slice();
          if (this.state.helpful) {
            filterData.sort((a, b) => {
              return b.helpfulY - a.helpfulY;
            })
          } else if (this.state.newest) {
              filterData.sort((a, b) => {
                return new Date(b.review_date) - new Date(a.review_date);
              })
            } else {
            filterData = this.state.reviewData;
          }
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
      return b.helpfuly - a.helpfuly;
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

  onModalReviewSubmit(obj) {
    axios.post('/api/reviews', obj)
      .then((success) => {
        return axios.get('/api/reviews')
      })
      .then((allReviews) => {
        let allData = allReviews.data.slice();
        allData.sort((a, b) => {
          return b.id - a.id;
        })

        this.setState({
          reviewData: allData,
          displayData: allData
        })
      })
      .catch((err) => {
        console.log(err)
      })

  }

  componentDidMount() {
    axios.get('/api/reviews')
      .then((success) => {
        let allData = success.data.slice();
        allData.sort((a, b) => {
          return b.id - a.id;
        })
        this.setState({
          reviewData: allData,
          displayData: allData
        })
      })
      .catch((err) => (
        console.log(err)
      ))
  }

  render() {
    return (
      <div>
        <Title>RATINGS & REVIEWS</Title>
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
                  starRating={this.state.starRating}
                />
              </Row>
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
  font-size: 26px;
  font-family: adineue PRO KZ Bold;
  margin-bottom: 7px;
  letter-spacing: 1px;
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
