import React from 'react';

const ReviewListItem = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>{props.review.review_title}</th>
            <th>{props.review.review_date}</th>
          </tr>

          <tr>
            <td>{props.review.description}</td>
          </tr>

          <tr>
            <td>{props.review.user}</td>
          </tr>

          <tr>
            <td>Was this review helpful?</td>
            <td>Yes ({props.review.helpfulY})</td>
            <td>No ({props.review.helpfulN})</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ReviewListItem;