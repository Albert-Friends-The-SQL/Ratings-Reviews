import React from 'react';
import styled from 'styled-components';

const RatingBar = (props) => {
  return (
    <BarBorder>
      <BarProgress></BarProgress>
    </BarBorder>
  )
        // return (
        //   <div id='barBorder' style={{
        //     backgroundColor: "#e3e3e3",
        //     borderRadius: "10px",
        //     width:"70%",
        //     float:"right",
        //     marginTop: "4px"
        //   }}>
        //     <div id='barProgress' style={{
        //       height: "8px",
        //       width: "80%",
        //       borderRadius: "8px",
        //       backgroundColor: "#2ada71"
        //     }}>
        //     </div>
        //   </div>
        // )
}

const BarBorder = styled.div`
  background-color: #e3e3e3;
  border-radius: 10px;
  width:70%;
  float:right;
  margin-top: 4px;
`;

const BarProgress = styled.div`
  height: 8px;
  border-radius: 8px;
  width:80%;
  background-color:#2ada71;
`;

export default RatingBar;

