import React from 'react';
import styled from 'styled-components';

const RatingsBreakdownFilterItem = (props) => {
  return (
    <StarRatingFilter onClick={() => props.onStarRatingClick(props.rating)}> {props.rating} STARS </StarRatingFilter>
  )
};

const StarRatingFilter = styled.div`
  font-family: AdihausDIN;
  font-size: 14px;
  padding-left: 3px;
  padding-right: 5px;
  margin-top: 3px;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export default RatingsBreakdownFilterItem;