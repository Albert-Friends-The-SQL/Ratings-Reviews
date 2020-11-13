import React, { component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewList from './reviewList.jsx';

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
        <h3>Review List</h3>
        <ReviewList reviewState={this.state} onLoadMoreClick={this.onLoadMoreClick}/>
      </div>
    )
  }
}

export default App;
