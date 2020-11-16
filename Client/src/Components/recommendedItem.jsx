import React from 'react';
import styled from 'styled-components';
import SpanQuality from './recommendedItemSpan.jsx';
import RecommendedTriangle from './recommendedTriangle.jsx';

const RecommendedItem = (props) => {
  const categories = {
    Size: ['TOO SMALL', 'PERFECT', 'TOO LARGE'],
    Width: ['TOO NARROW', 'PERFECT', 'TOO WIDE'],
    Comfort: ['UNCOMFORTABLE', 'COMFORTABLE'],
    Quality: ['POOR', 'PERFECT']
  }

  return (
    <div>
      <Quality>{props.quality}</Quality>
      <ComparisonBar>
          <ComparisonBarFirstBreak></ComparisonBarFirstBreak>
          <ComparisonBarSecondBreak></ComparisonBarSecondBreak>
          <ComparisonBarThirdBreak></ComparisonBarThirdBreak>
          {/* <TriangleIndicator></TriangleIndicator> */}
          <RecommendedTriangle reviewState={props.reviewState} quality={props.quality}/>
        </ComparisonBar>
        <SpanAll>
          {categories[props.quality].map((quality) => (
            <SpanQuality quality={quality}/>
          ))}
        </SpanAll>
        <br></br>
    </div>
  )
}

// const TriangleIndicator = styled.div`
//   position: absolute;
//   left: 64%;
//   background-color: transparent;
//   height: auto;
//   top: -12px;
//   width: 0;
//   border-color: #000 transparent transparent;
//   border-top-color: #2ada71;
//   border-style: solid;
//   border-width: 20px 10px;
//   margin: 0;
// `;

const ComparisonBar = styled.div`
  position: relative;
  margin-top: 4px;
  width: 250px;
  height: 4px;
  background-color: #e3e3e3;
  border-radius: 5px;
`;

const SpanAll = styled.div`
  display: flex;
  font-size: 10px;
  justify-content: space-between;
  letter-spacing: 1px;
  box-sizing: border-box;
  margin-right: 6px;
  margin-top: 7px;
`;

const ComparisonBarFirstBreak = styled.div`
  background-color: #fff;
  position: absolute;
  left: 25%;
  width: 4px;
  height: 4px
  /* box-sizing: border-box; */
`;

const ComparisonBarSecondBreak = styled.div`
  background-color: #fff;
  position: absolute;
  left: 50%;
  width: 4px;
  height: 4px
  /* box-sizing: border-box; */
`;

const ComparisonBarThirdBreak = styled.div`
  background-color: #fff;
  position: absolute;
  left: 75%;
  width: 4px;
  height: 4px
  /* box-sizing: border-box; */
`;

const Quality = styled.div`
  font-size: 13px;
`;

export default RecommendedItem;