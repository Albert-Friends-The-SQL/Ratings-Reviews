import React from 'react';
import RatingsBreakdownFilterItem from './ratingsBreakdownFilterItem.jsx';

const RatingsBreakdownFilter = (props) => {
  console.log(props.starRating);
  console.log('length', props.starRating.length);
  if (props.starRating.length !== 0) {
    console.log('tessssst', props.starRating)
    return (
      <div>Showing reviews:
        {props.starRating.map((rating) => (
          <RatingsBreakdownFilterItem rating={rating} />
        ))}
      </div>
    )
  } else {
    return null;
  }
};

export default RatingsBreakdownFilter;