import React from 'react';
import styled from 'styled-components';
import { forEach } from 'underscore';

const RecommendedTriangle = (props) => {
  let count = 0;
  let allReviews = 0;
  forEach(props.reviewState.reviewData, review => {
    count += review[props.quality.toLowerCase()];
    allReviews++;
  })
  let overallPercentage = Math.floor((((count / allReviews) / 5) * 100));

  return (
    <TriangleIndicator style={{left: `${overallPercentage}%`}}></TriangleIndicator>
  )
}

export default RecommendedTriangle;

const TriangleIndicator = styled.div`
  position: absolute;
  background-color: transparent;
  height: auto;
  top: -12px;
  width: 0;
  border-color: #000 transparent transparent;
  border-top-color: #2ada71;
  border-style: solid;
  border-width: 20px 10px;
  margin: 0;
`;