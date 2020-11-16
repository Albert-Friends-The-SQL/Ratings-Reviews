import React from 'react';
import ReviewListItem from './ReviewListItem.jsx'

const ReviewList = (props) => {
  const currentReviews = props.reviewState.reviewData.slice(0, props.reviewState.reviewCount);

  return (
    <div>
      <div id='filterBtns'>
        <button id='filterBtn'>NEWEST</button>
        <button id='filterBtn'>HELPFUL</button>
        <button id='filterBtn'>RELEVANT</button>
      </div>
      {currentReviews.map((review) => (
        <ReviewListItem review={review} />
      ))}
      <br></br>
      <button id='bottomReviewBtn' onClick={props.onLoadMoreClick}>LOAD MORE</button>
      <button id='bottomReviewBtn'>WRITE A REVIEW</button>
    </div>
  )
}

export default ReviewList;