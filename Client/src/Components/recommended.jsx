import React from 'react';
import RecommendedItem from './recommendedItem.jsx'

const Recommended = (props) => {
  const qualities = ['Size', 'Width', 'Comfort', 'Quality'];
  return (
  <div>
    <div id='recommendedPercent'><strong>96%</strong></div>
    <div>of customers recommended this product</div>
    <br></br>
    {qualities.map((quality) => (
      <RecommendedItem quality={quality} reviewState={props.reviewState}/>
    ))}
  </div>
  )
}

export default Recommended;