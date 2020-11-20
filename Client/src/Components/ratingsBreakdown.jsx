import React from 'react';
import styled from 'styled-components';
import RatingBar from './ratingBar.jsx';
import { forEach } from 'underscore';

const RatingsBreakdown = (props) => {
  let allReviews = 0;
  let totalRating = 0;
  forEach(props.allReviews, review => {
    allReviews++
    totalRating+= review.value;
  })
  let avgRating = (totalRating / allReviews).toFixed(1);
  let overallPercentage = Math.round(((avgRating / 5) * 100));

  return (
    <div id='ratingsBreakdown'>
      {/* ★★★★ */}
      <Grid>
        <div id='breakdownBox'>
          <Row>
            <Col size={1}>
              <div id='totalrating' style={{fontFamily:"adineue PRO KZ Bold", marginTop:"10px", letterSpacing:"4px"}}><strong>{avgRating}</strong></div>
            </Col>
            <Col id='totalReview' size={1}>
              <Row>
                <div id="rating">
                <div id="rating-upper" style={{width: `${overallPercentage}%`}}>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                </div>
                <div id="rating-lower">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                </div>
            </div>
              </Row>
              <Row style={{fontFamily:"AdihausDIN"}}>
                <div style={{marginRight: "2px", fontFamily:"adineue PRO KZ Bold", fontSize:"14px", marginTop:"2px"}}>{allReviews}</div>
                <div>Reviews</div>
              </Row>
            </Col>
          </Row>
        </div>
      </Grid>
        <div>
          <br></br>
          <div style={{fontFamily: "adineue PRO KZ Bold"}}><strong>RATING BREAKDOWN</strong></div>
          <br></br>
            {stars.map((star) => (
              <RatingBar
                star={star}
                allReviews={props.allReviews}
                onStarRatingClick={props.onStarRatingClick}
              />
            ))}
        </div>
      </div>
  )
}

const Grid = styled.div`

`;

const Row = styled.div`
  display:flex;
`;

const Col = styled.div`
  flex: ${(props) => props.size};
`;



const stars = [5, 4, 3, 2, 1];

export default RatingsBreakdown;