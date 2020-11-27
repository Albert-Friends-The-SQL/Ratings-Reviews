import React from 'react';
import RecommendedItem from './recommendedItem.jsx';
import { forEach } from 'underscore';

const Recommended = (props) => {
  let recommendedCount = 0;
  let allReviews = 0;
  forEach(props.reviewState.reviewData, review => {
    if (review.recommended === 'Yes') {
      recommendedCount+= 1;
    }
    allReviews++;
  })

  let overallPercentage = Math.round((recommendedCount / allReviews) * 100);

  const qualities = ['Size', 'Width', 'Comfort', 'Quality'];
  return (
  <div>
    <div
      id='recommendedPercent'
      style={{fontFamily: "adineue PRO KZ Bold", fontSize:"50px", height:"40px", marginBottom:"7px", marginTop:"10px"}}
    >
      <strong>
        {overallPercentage}%
      </strong>
    </div>
    <div style={{fontFamily:"AdihausDIN", fontSize:"14px"}}>of customers recommended this product</div>
    <br></br>
    {qualities.map((quality) => (
      <RecommendedItem quality={quality} reviewState={props.reviewState}/>
    ))}
  </div>
  )
}

export default Recommended;