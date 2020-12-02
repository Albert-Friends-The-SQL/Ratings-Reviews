import React from 'react';
import Star from './star.jsx';
import styled from 'styled-components'



const ReviewListItem = (props) => {
  return (
    <div id='reviewItem'>
          <div
            style={{display:"flex", justifyContent: "space-between", alignItems:"center"}}
          >
            <Star starReview={props.review}/>
            <div
              id='reviewItemDate'
              style={{fontFamily:"AdihausDIN", color:"#767677", fontSize:"13px"}}
            > {props.review.review_date}
            </div>
            <br></br>
            <br></br>
            <br></br>
          </div>

          <table>
            <tbody>
            <tr>
            <th
              style={{fontFamily:"adineue PRO KZ Bold", fontSize:"21px", width:"100%"}}
            > {props.review.review_title}
            </th>
          </tr>
          <tr>
            <td
              style={{fontFamily:"AdihausDIN", fontSize: "15px"}}
            > {props.review.description}
            </td>
            <br></br>
            <br></br>
          </tr>
          <tr>
            <td style={{fontSize: "14px", fontFamily:"AdihausDIN"}}>
              <span id="checkmark">
                <div id="checkmark_stem"></div>
                <div id="checkmark_kick"></div>
            </span>
            I recommend this product</td>
          </tr>
          <tr>
            <td
              style={{fontFamily:"AdihausDIN", fontSize:"14px"}}
            >
              <strong
                style={{fontFamily:"adineue PRO KZ Bold"}}
              > {props.review.user_name}
              </strong>
              <strong style={{color:"#767677", fontSize: "14px"}}> - Verified Purchaser
              </strong>
            </td>

          </tr>
          <br></br>

        </tbody>
      </table>
            <div
              id='bottomSection'
              style={{display:"flex", width:"100%", fontFamily:"AdihausDIN", fontSize:"14px"}}
            >
              <div
                style={{width:"33%", overflow:'hidden'}}
              >
                Was this review helpful?
              </div>
              <div
                style={{display:"flex", width:"35%"}}
              >
                <TableDataYLabel
                  id = 'tableDataYLabel'
                  onClick={(e, id) => props.onHelpfulClickNumber(e, props.review.id)}
                  >Yes
                </TableDataYLabel>
                <TableDataY>[{props.review.helpfuly}]</TableDataY>
                <TableDataNLabel
                  id = 'tableDataYLabel'
                  onClick={(e, id) => props.onHelpfulClickNumber(e, props.review.id)}
                >No
                </TableDataNLabel>
                <TableDataN>[{props.review.helpfuln}]</TableDataN>
              </div>
            </div>
    </div>
  )
}

const TableDataYLabel = styled.div`
  font-family: AdihausDIN;
  font-size: 13px;
  text-decoration: underline;
  cursor: pointer;
  margin-right: 5px;
  margin-bottom: 3px;
`;

const TableDataY = styled.div`
  font-family: AdihausDIN;
  color: #767677;
  font-size: 13px;
  margin-right: 5px;
  margin-bottom: 3px;
  `;

const TableDataNLabel = styled.div`
  font-family: AdihausDIN;
  font-size: 13px;
  text-decoration: underline;
  cursor: pointer;
  margin-right: 5px;
  margin-bottom: 3px;
`;

const TableDataN = styled.div`
  font-family: AdihausDIN;
  color: #767677;
  font-size: 13px;
  margin-right: 5px;
  margin-bottom: 3px;
`;

export default ReviewListItem;