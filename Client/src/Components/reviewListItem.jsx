import React from 'react';
import Star from './star.jsx';
import styled from 'styled-components'



const ReviewListItem = (props) => {
  return (
    <div id='reviewItem'>
      <table>
        <tbody>
          <br></br>
          <tr>
            <Star starReview={props.review}/>
            <td id='reviewItemDate' style={{fontFamily:"AdihausDIN", color:"#767677", fontSize:"11px"}}>{props.review.review_date}</td>
            <br></br>
            <br></br>
            <br></br>

          </tr>

          <tr>
            <th style={{fontFamily:"adineue PRO KZ Bold", fontSize:"18px", width:"500px"}}>{props.review.review_title}</th>
          </tr>

          <tr>
            <td style={{fontFamily:"AdihausDIN", fontSize: "13px"}}>{props.review.description}</td>
            <br></br>
            <br></br>
          </tr>

          <tr>
            <td style={{fontSize: "11px", fontFamily:"AdihausDIN"}}>
              <span id="checkmark">
                <div id="checkmark_stem"></div>
                <div id="checkmark_kick"></div>
            </span>
            I recommend this product</td>
          </tr>
          <tr>
            <td style={{fontFamily:"AdihausDIN", fontSize:"12px"}}><strong style={{fontFamily:"adineue PRO KZ Bold"}}>{props.review.user}</strong><strong style={{color:"#767677", fontSize: "11px"}}> - Verified Purchaser</strong></td>

          </tr>
          <br></br>

          <tr style={{lineHeight:"10px", position:"relative"}}>
            <td style={{fontFamily:"AdihausDIN", fontSize:"12px", marginBottom:"50px", width:"130px"}}>Was this review helpful?</td>
            <TableDataYLabel
              id = 'tableDataYLabel'
              onClick={(e, id) => props.onHelpfulClickNumber(e, props.review.id)}
              >Yes
            </TableDataYLabel>
            <TableDataY>[{props.review.helpfulY}]</TableDataY>
            <TableDataNLabel
              id = 'tableDataYLabel'
              onClick={(e, id) => props.onHelpfulClickNumber(e, props.review.id)}
            >No
            </TableDataNLabel>
            <TableDataN>[{props.review.helpfulN}]</TableDataN>
            <br></br>
            <br></br>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const TableDataYLabel = styled.td`
  font-family: AdihausDIN;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  position: absolute;
  left: 420px;
  margin-top: 2px;
  width: 20px;
`;

const TableDataY = styled.td`
  font-family: AdihausDIN;
  font-size: 12px;
  position: absolute;
  left: 445px;
  margin-top: 2px;
  `;

const TableDataNLabel = styled.td`
  font-family: AdihausDIN;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  position: absolute;
  left: 475px;
  margin-top: 2px;
  width: 20px;
  text-align: center;
`;

const TableDataN = styled.td`
  font-family: AdihausDIN;
  font-size: 12px;
  position: absolute;
  left: 500px;
  margin-top: 2px;
`;

export default ReviewListItem;