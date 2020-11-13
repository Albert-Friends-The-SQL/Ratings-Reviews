import React, { component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewList from './reviewList.jsx';
import styled from 'styled-components';

const Title = styled.h2`
  color: Blue;
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
        <Title>Review List</Title>
        <Grid>
          <Row>
            <Col size={1}>
                  <Row>
                    Top left column
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    Top left column
                  </Row>
                  <Row>
                    Bottom left column
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    Bottom left column
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

export default App;
