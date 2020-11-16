import React, { component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewList from './reviewList.jsx';
import styled from 'styled-components';
import RatingsBreakdown from './ratingsBreakdown.jsx';
import Recommended from './recommended.jsx'
import { shuffle } from 'underscore';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewData: [],
      reviewCount: 2
    };

    this.onLoadMoreClick = this.onLoadMoreClick.bind(this);
    this.onHelpfulClick = this.onHelpfulClick.bind(this);
    this.onRelevantClick = this.onRelevantClick.bind(this);
    this.onNewestClick = this.onNewestClick.bind(this);
  }

  onHelpfulClick() {
    let allData = this.state.reviewData.slice();
    allData.sort((a, b) => {
      return b.helpfulY - a.helpfulY;
    })

    this.setState({
      reviewData: allData
    })
  }

  onRelevantClick() {
    let allData = this.state.reviewData.slice();
    allData = shuffle(allData);

    this.setState({
      reviewData: allData
    })
  }

  onNewestClick() {
    let allData = this.state.reviewData.slice();
    allData.sort((a, b) => {
      return new Date(b.review_date) - new Date(a.review_date);
    })

    this.setState({
      reviewData: allData
    })
  }

  onLoadMoreClick() {
    this.setState({
      reviewCount: this.state.reviewCount + 3
    })
  }

  componentDidMount() {
    axios.get('/api/products/1337/reviews')
      .then((success) => {
        console.log('SUCCESS', success.data)
        this.setState({
          reviewData: success.data
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
