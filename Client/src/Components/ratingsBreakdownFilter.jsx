import React from 'react';
import RatingsBreakdownFilterItem from './ratingsBreakdownFilterItem.jsx';
import styled from 'styled-components';

const RatingsBreakdownFilter = (props) => {
  if (props.starRating.length !== 0) {
    return (
      <ReviewFilter>Showing reviews:
        {props.starRating.map((rating) => (
          <RatingsBreakdownFilterItem
            rating={rating}
            onStarRatingClick={props.onStarRatingClick}
          />
        ))}
      </ReviewFilter>
    )
  } else {
    return null;
  }
};

const ReviewFilter = styled.div`
  font-family: AdihausDIN;
  width: 257px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  margin-bottom: 12px;
`;


export default RatingsBreakdownFilter;

