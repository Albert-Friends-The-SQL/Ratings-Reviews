import React from 'react';
import styled from 'styled-components';
import { forEach } from 'underscore';

const RatingBar = (props) => {
  let count = 0;
  let totalReview = 0;
  forEach(props.allReviews, ((review) => {
    if (review.value === props.star) {
      count++;
    }
    totalReview++;
  }))
  let overallPercentage = (count/totalReview * 100)

  return (
    <div>
    <RatingBox>
      <StarNumber onClick={() => props.onStarRatingClick(props.star)}>{props.star} STARS</StarNumber>
      <TotalReviews>{count}</TotalReviews>
      <BarBorder>
        <BarProgress style={{width: `${overallPercentage}%`}}></BarProgress>
      </BarBorder>
    </RatingBox>
    <br></br>
    </div>
  )
}

const RatingBox = styled.div`
  width: 257px;
`;

const StarNumber = styled.div`
  font-size: 15px;
  text-decoration: underline;
`;

const BarBorder = styled.div`
  background-color: #b8b8b8;
  height: 4px
  border-radius: 15px;
  width:155px;
  float:right;
  margin-top: -10px;
`;

const BarProgress = styled.div`
  height: 4px;
  border-radius: 15px;
  /* width: ${(props) => props.percent}; */
  /* width: 50%; */
  background-color:#2ada71;
`;

const TotalReviews = styled.div`
  float: right;
  margin: -14px 15px 5px 6px;
  line-height: 10px;
  font-size: 13px
`;

export default RatingBar;

