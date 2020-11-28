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
      <StarNumber
      id = 'starNumber'
      onClick={() => props.onStarRatingClick(props.star)}>{props.star} STARS</StarNumber>
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
  font-size: 14px;
  text-decoration: underline;
  font-family: AdihausDIN;
  cursor: pointer;
  width: 58px;
  font-weight: 700;
  margin-left: 5px;
`;

const BarBorder = styled.div`
  background-color: #767677;
  height: 5px
  border-radius: 15px;
  width:155px;
  float:right;
  margin-top: -10px;
`;

const BarProgress = styled.div`
  height: 5px;
  border-radius: 15px;
  background-color:#2ada71;
`;

const TotalReviews = styled.div`
  float: right;
  margin: -14px 15px 5px 6px;
  line-height: 10px;
  font-family: AdihausDIN;
  font-size: 13px
`;

export default RatingBar;

