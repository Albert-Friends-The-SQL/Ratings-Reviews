import React, { useState } from 'react';
import ReviewListItem from './ReviewListItem.jsx'
import styled from 'styled-components';
const faker = require('faker/locale/en.js');

const ReviewList = (props) => {
  //React Hooks - UseState
  const [user, setUser] = useState('');
  const [user_email, setUserEmail] = useState('');
  const [review_title, setReviewTitle] = useState('');
  const [description, setDescription] = useState('');

  const currentReviews = props.reviewState.displayData.slice(0, props.reviewState.reviewCount);

  const onModalClick = () => {
    const modalBg = document.querySelector('#ModalBg');
    modalBg.classList.add('ModalBgActive');
  }

  const onModalClose = () => {
    const modalBg = document.querySelector('#ModalBg');
    modalBg.classList.remove('ModalBgActive');
  }

  const onModalSubmit = () => {
    const overallRating = document.querySelector('#overallRating').selectedIndex;
    const sizeRating = document.querySelector('#sizeRating').selectedIndex;
    const comfortRating = document.querySelector('#comfortRating').selectedIndex;
    const recommendedRatingIndex = document.querySelector('#recommendedRating').selectedIndex;
    const recommendedRating = document.querySelector('#recommendedRating').options[recommendedRatingIndex].innerText;
    const widthRating = document.querySelector('#widthRating').selectedIndex;
    const qualityRating = document.querySelector('#qualityRating').selectedIndex;

    props.onModalReviewSubmit({
      user: user,
      user_email: user_email,
      product_id: 1337,
      review_title: review_title,
      description: description,
      review_date: faker.date.recent().toString().split('').slice(0, 15).join(''),
      verified: 'yes',
      size: sizeRating,
      width: widthRating,
      comfort: comfortRating,
      quality: qualityRating,
      value: overallRating,
      recommended: recommendedRating,
      helpfulY: 0,
      helpfulN: 0
    });

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
          <TitleH2>Write Your Review</TitleH2>
          <LeftModal>
            Your Overall Rating
            <LeftModalRating>Please select</LeftModalRating>
            <LeftModalRating>
              <SelectRating id='overallRating'>
                <option value="0">Select rating:</option>
                <option value="1">1 - Dissapointing</option>
                <option value="2">2 - Could Be Better</option>
                <option value="3">3 - It's Ok</option>
                <option value="4">4 - Pretty Great</option>
                <option value="5">5 - Love It</option>
              </SelectRating>
            </LeftModalRating>
            <br></br>
            <LeftModalRating>Size</LeftModalRating>
            <LeftModalRating>
            <SelectRating id='sizeRating'>
                <option value="0">Select rating:</option>
                <option value="1">1 - Too Small</option>
                <option value="2">2</option>
                <option value="3">3 - Perfect</option>
                <option value="4">4</option>
                <option value="5">5 - Too Big</option>
              </SelectRating>
            </LeftModalRating>
            <br></br>
            <LeftModalRating>Comfort</LeftModalRating>
            <LeftModalRating>
              <SelectRating id='comfortRating'>
                  <option value="0">Select rating:</option>
                  <option value="1">1 - Uncomfortable</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5 - Comfortable</option>
                </SelectRating>
            </LeftModalRating>
            <br></br>
            <br></br>
          </LeftModal>

          <RightModal>
            Would You Recommend This Product?
            <RightModalRating>Please select</RightModalRating>
            <RightModalRating>
            <SelectRating id='recommendedRating'>
                <option value="0">Select:</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </SelectRating>
            </RightModalRating>
            <br></br>
            <RightModalRating>Width</RightModalRating>
            <RightModalRating>
            <SelectRating id='widthRating'>
                  <option value="0">Select rating:</option>
                  <option value="1">1 - Too Small</option>
                  <option value="2">2</option>
                  <option value="3">3 - Perfect</option>
                  <option value="4">4</option>
                  <option value="5">5 - Too Big</option>
                </SelectRating>
            </RightModalRating>
            <br></br>
            <RightModalRating>Quality</RightModalRating>
            <RightModalRating>
            <SelectRating id='qualityRating'>
                  <option value="0">Select rating:</option>
                  <option value="1">1 - Poor</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5 - Perfect</option>
                </SelectRating>
            </RightModalRating>
          </RightModal>
          <PageBorder></PageBorder>

          <BottomModal>
            Your Review
            <BottomModalItems>
              <input id='review_title' onChange={(e) => setReviewTitle(e.target.value)} style={{width:"90%"}} type='text' placeholder='Summary'></input>
            </BottomModalItems>
            <BottomModalItems style={{fontSize:"13px"}}>
              What’s your opinion in one sentence? Example: Best purchase ever.
            </BottomModalItems>
            <br></br>
            <BottomModalItems>
              <textarea id='description' onChange={(e) => setDescription(e.target.value)} style={{width:"90%", height: "50px"}} placeholder='Your Review'></textarea>
            </BottomModalItems>
            <BottomModalItems style={{fontSize:"13px"}}>
              Tell other people more about the product. What about the quality? Or the comfort?
            </BottomModalItems>
            <br></br>
            <BottomModalItems>Personal Information</BottomModalItems>
            <br></br>
            <BottomModalItems>
              <input id='user' onChange={(e) => setUser(e.target.value)} style={{width:"45%"}} type='text' placeholder='Nickname'></input>
              <input id='user_email' onChange={(e) => setUserEmail(e.target.value)} style={{width:"45%"}} type='text' placeholder='Email'></input>
            </BottomModalItems>
            <BottomModalItems style={{fontSize:"13px"}}>
              Example: Jack27. Be mindful of your own privacy, don’t use your full name or email address.
            </BottomModalItems>
            </BottomModal>

          <WriteReview onClick={onModalSubmit}>Write Your Review</WriteReview>
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
  height: 70%;
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  /* justify-content: space-around;
  align-items: center;
  flex-direction: column; */
`;

const ModalBtn = styled.div`
  padding: 10px 30px;
  background-color: #2ada71
  color: black;
  border:none;
`;

const SpanX = styled.span`
  position: absolute;
  color: #2ada71;
  top: 10px;
  right: 10px;
  font-weight: bold;
  cursor: pointer;
`;

const LeftModal = styled.div`
  height: 20%;
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const RightModal = styled.div`
  height: 20%;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const BottomModal = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const BottomModalItems = styled.div`
  width: 100%;
`;

const LeftModalRating = styled.div`
  /* flex-direction: column; */
`;

const RightModalRating = styled.div`
  /* flex-direction: column; */
`;


const TitleH2 = styled.div`
  width: 100%;
  height: 1%;
  font-size: 50px;
  margin-bottom: 20px;
  /* color: #84dfa9; */
  color: #2ada71;
`;

const PageBorder = styled.div`
  position: absolute;
  top: 44%;
  left: 3%;
  background-color: #d8d8d8;
  height: 2px;
  width: 90%;
`;

const WriteReview = styled.div`
  width: 200px;
  background-color: #2ada71;
  height 19px;
  color: white;
  border: 2px solid #2ada71;
  border-radius: 14px;
  text-align: center;
  vertical-align: center;
  margin-top: 20px;
  cursor: pointer;
`;

const SelectRating = styled.select`

`;