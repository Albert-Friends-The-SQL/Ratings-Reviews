import React from 'react';
import ReviewListItem from './ReviewListItem.jsx'

const ReviewList = (props) => {
  const currentReviews = props.reviewState.reviewData.slice(0, props.reviewState.reviewCount);

  return (
    <div>
      <div id='filterBtns'>
        <button id='filterBtn' onClick={props.onNewestClick}>NEWEST</button>
        <button id='filterBtn' onClick={props.onHelpfulClick}>HELPFUL</button>
        <button id='filterBtn' onClick={props.onRelevantClick}>RELEVANT</button>
      </div>
      {currentReviews.map((review, idx) => (
        <ReviewListItem
          review={review}
          onHelpfulClickNumber={props.onHelpfulClickNumber}
          idx={idx}
        />
      ))}
      <br></br>
      <button
        id='bottomReviewBtn' onClick={props.onLoadMoreClick}>LOAD MORE</button>
      <button id='bottomReviewBtn'>WRITE A REVIEW</button>
    </div>
  )
}

export default ReviewList;