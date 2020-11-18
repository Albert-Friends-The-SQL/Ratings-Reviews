import React from 'react';
import ReviewListItem from './ReviewListItem.jsx'
import styled from 'styled-components';

const ReviewList = (props) => {
  const currentReviews = props.reviewState.displayData.slice(0, props.reviewState.reviewCount);

  const onModalClick = () => {
    const modalBg = document.querySelector('#ModalBg');
    modalBg.classList.add('ModalBgActive');
  }

  const onModalClose = () => {
    const modalBg = document.querySelector('#ModalBg');
    modalBg.classList.remove('ModalBgActive');
  }

  return (
    <div>
      <div id='filterBtns'>
        <button id='filterBtn' onClick={props.onNewestClick}>NEWEST</button>
        <button id='filterBtn' onClick={props.onHelpfulClick}>HELPFUL</button>
        <button id='filterBtn' onClick={props.onRelevantClick}>RELEVANT</button>
      </div>
      {currentReviews.map((review) => (
        <ReviewListItem
          review={review}
          onHelpfulClickNumber={props.onHelpfulClickNumber}
        />
      ))}
      <br></br>
      <button
        id='bottomReviewBtn'
        onClick={props.onLoadMoreClick}>
          LOAD MORE
      </button>
      <button id='bottomReviewBtn' onClick={onModalClick}>WRITE A REVIEW</button>
      <ModalBg id='ModalBg'>
        <Modal>
          <h2>Testing</h2>
          <button>Write Review</button>
          <SpanX id='ModalClose' onClick={onModalClose}>X</SpanX>
        </Modal>
      </ModalBg>
    </div>
  )
}

export default ReviewList;

const ModalBg = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,.5);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s;
`;

const ModalBgActice = styled.div`
  visiblity; visible;
  opacity: 1;
`;

const Modal = styled.div`
  position: relative;
  background-color: #fff;
  height: 40%;
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  /* opacity: 90%; */
`;

const ModalBtn = styled.div`
  padding: 10px 30px;
  background-color: #2ada71
  color: black;
  border:none;
`;

const SpanX = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-weight: bold;
  cursor: pointer;
`;