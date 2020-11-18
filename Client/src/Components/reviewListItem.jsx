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
            <td id='reviewItemDate'>{props.review.review_date}</td>
            <br></br>
            <br></br>
            <br></br>

          </tr>

          <tr>
            <th>{props.review.review_title}</th>
          </tr>

          <tr>
            <td>{props.review.description}</td>
            <br></br>
            <br></br>
          </tr>

          <tr>
            <td style={{fontSize: "11px"}}>I recommend this product</td>
          </tr>
          <tr>
            <td><strong>{props.review.user}</strong> - Verified Purchaser</td>

          </tr>
          <br></br>

          <tr>
            <td>Was this review helpful?</td>
            <TableDataYLabel onClick={(e, id) => props.onHelpfulClickNumber(e, props.review.id)}>Yes</TableDataYLabel>
            <TableDataY >[{props.review.helpfulY}]</TableDataY>
            <TableDataNLabel onClick={(e, id) => props.onHelpfulClickNumber(e, props.review.id)}>No</TableDataNLabel>
            <TableDataN >[{props.review.helpfulN}]</TableDataN>
            <br></br>
            <br></br>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const TableDataYLabel = styled.td`
  text-decoration: underline;
`;

const TableDataY = styled.td`

`;

const TableDataNLabel = styled.td`
  text-decoration: underline;
`;

const TableDataN = styled.td`

`;

export default ReviewListItem;