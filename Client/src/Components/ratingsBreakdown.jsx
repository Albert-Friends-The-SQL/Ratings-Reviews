import React from 'react';
import styled from 'styled-components';
import RatingBar from './ratingBar.jsx';

const RatingsBreakdown = (props) => (
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
            <Row>100 reviews</Row>
          </Col>
        </Row>
      </div>
    </Grid>
      <div>
        <br></br>
        <div ><strong>RATING BREAKDOWN</strong></div>
          <div style={{width: "257px"}}>5 STARS <RatingBar /></div>
        <br></br>
          <div>4 STARS <RatingBar /></div>
        <br></br>
          <div>3 STARS <RatingBar /></div>
        <br></br>
          <div>2 STARS <RatingBar /></div>
        <br></br>
          <div>1 STARS <RatingBar /></div>
        <br></br>
        <br></br>
      </div>
    </div>

)

const Grid = styled.div`

`;

const Row = styled.div`
  display:flex;
`;

const Col = styled.div`
  flex: ${(props) => props.size};
`;

const BarBorder = styled.div`
  background-color: #e3e3e3;
  border-radius: 10px;
`;

const BarProgress = styled.div`
  height: 8px;
  width: 80%;
  border-radius: 8px;
  background-color: green;
`;


export default RatingsBreakdown;