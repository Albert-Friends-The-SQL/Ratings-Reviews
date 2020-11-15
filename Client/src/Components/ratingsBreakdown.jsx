import React from 'react';
import styled from 'styled-components';

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
        <div>5 STARS with bar for number of ratings</div>
        <br></br>
        <div>4 STARS with bar for number of ratings</div>
        <br></br>
        <div>3 STARS with bar for number of ratings</div>
        <br></br>
        <div>2 STARS with bar for number of ratings</div>
        <br></br>
        <div>1 STARS with bar for number of ratings</div>
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


export default RatingsBreakdown;