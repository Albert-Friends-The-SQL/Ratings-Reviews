import React from 'react';
import styled from 'styled-components';
import RatingBar from './ratingBar.jsx';
import { forEach } from 'underscore';

const RatingsBreakdown = (props) => {
  let allReviews = 0;
  forEach(props.allReviews, review => {
    allReviews++
  })

  return (
    <div id='ratingsBreakdown'>
      {/* ★★★★ */}
      <Grid>
        <div id='breakdownBox'>
          <Row>
            <Col size={1}>
              <div id='totalrating'><strong>4.6</strong></div>
            </Col>
            <Col id='totalReview' size={1}>
              <Row>★★★★☆</Row>
              <Row>{allReviews} reviews</Row>
            </Col>
          </Row>
        </div>
      </Grid>
        <div>
          <br></br>
          <div ><strong>RATING BREAKDOWN</strong></div>
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