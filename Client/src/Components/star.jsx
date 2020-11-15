import React from 'react';
import styled from 'styled-components';


//To come back to and figure out how to escape special characters in order to build start out more dynamically
const Star = (props) => {
  if (props.starReview.value === 1) {
    return (
      <td>&#9733;&#9734;&#9734;&#9734;&#9734;</td>
    )
  } else if (props.starReview.value === 2) {
    return (
      <td>&#9733;&#9733;&#9734;&#9734;&#9734;</td>
    )
  } else if (props.starReview.value === 3) {
    return (
      <td>&#9733;&#9733;&#9733;&#9734;&#9734;</td>
    )
  } else if (props.starReview.value === 4) {
    return (
      <td>&#9733;&#9733;&#9733;&#9733;&#9734;</td>
    )
  } else {
    return (
      <td>&#9733;&#9733;&#9733;&#9733;&#9733;</td>
    )
  }
}

export default Star;
