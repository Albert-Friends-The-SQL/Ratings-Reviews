import React from 'react';
import styled from 'styled-components';

const RecommendedItem = (props) => {
  const categories = {
    Size: ['TOO SMALL', 'PERFECT', 'TOO LARGE'],
    Width: ['TOO NARROW', 'PERFECT', 'TOO WIDE'],
    Comfort: ['UNCOMFORTABLE', 'COMFORTABLE'],
    Quality: ['POOR', 'PERFECT']
  }
  console.log(props.quality)
  console.log(categories[props.quality])
  return (
    <div>
      <Quality>{props.quality}</Quality>
      <ComparisonBar>

          <ComparisonBarFirstBreak></ComparisonBarFirstBreak>

          <ComparisonBarSecondBreak></ComparisonBarSecondBreak>

          <ComparisonBarThirdBreak></ComparisonBarThirdBreak>

        </ComparisonBar>
        <SpanAll><span>Left</span><span style={{marginLeft:"9px"}}>Middle</span><span style={{marginRight: '7px'}}>Right</span></SpanAll>
        <br></br>
    </div>
  )
}

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
  font-size: 12px;
  justify-content: space-between;
  letter-spacing: 1px;
  box-sizing: border-box;
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