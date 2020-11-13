import React from 'react';
import ReviewListItem from './ReviewListItem.jsx'

const ReviewList = (props) => {
  const currentReviews = props.reviewState.reviewData.slice(0, props.reviewState.reviewCount);

  return (
    <div>
      {currentReviews.map((review) => (
        <ReviewListItem review={review} />
      ))}
      <button id='load-more' onClick={props.onLoadMoreClick}>Load More</button>
    </div>
  )
}

export default ReviewList;