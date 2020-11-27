import React from 'react';

const Star = (props) => {
  if (props.starReview.value === 1) {
    return (
      <div id='star'>&#9733;&#9734;&#9734;&#9734;&#9734;</div>
    )
  } else if (props.starReview.value === 2) {
    return (
      <div id='star'>&#9733;&#9733;&#9734;&#9734;&#9734;</div>
    )
  } else if (props.starReview.value === 3) {
    return (
      <div id='star'>&#9733;&#9733;&#9733;&#9734;&#9734;</div>
    )
  } else if (props.starReview.value === 4) {
    return (
      <div id='star'>&#9733;&#9733;&#9733;&#9733;&#9734;</div>
    )
  } else {
    return (
      <div id='star'>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
    )
  }
}

export default Star;