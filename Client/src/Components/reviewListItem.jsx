import React from 'react';
import Star from './star.jsx';



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
          </tr>

          <tr>
            <td><strong>{props.review.user}</strong> - Verified Purchaser</td>

          </tr>
          <br></br>

          <tr>
            <td>Was this review helpful?</td>
            <td id='reviewItemHelpfulY'>Yes ({props.review.helpfulY})</td>
            <td id='reviewItemHelpfulN'>No ({props.review.helpfulN})</td>
            <br></br>
            <br></br>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ReviewListItem;
{/* <td>★★★★★</td> */}