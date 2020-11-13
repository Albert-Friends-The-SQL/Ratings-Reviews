import React from 'react';
import ReviewListItem from './ReviewListItem.jsx'

const ReviewList = (props) => {
  console.log(props.reviewState.reviewData)
  const currentReviews = props.reviewState.reviewData.slice(0, props.reviewState.reviewCount);
  console.log(currentReviews)
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