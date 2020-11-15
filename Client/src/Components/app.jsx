import React, { component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewList from './reviewList.jsx';
import styled from 'styled-components';
import RatingsBreakdown from './ratingsBreakdown.jsx';
import Recommended from './recommended.jsx'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewData: [],
      reviewCount: 2
    };

    this.onLoadMoreClick = this.onLoadMoreClick.bind(this);
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
            <Col>
              <Row>
                <RatingsBreakdown size={1} />
              </Row>
              <br></br>
              <Row>
                <Recommended />
              </Row>
            </Col>
            <Col size={2}>
              <ReviewList reviewState={this.state} onLoadMoreClick={this.onLoadMoreClick}/>
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
