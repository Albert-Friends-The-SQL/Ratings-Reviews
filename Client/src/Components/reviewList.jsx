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

    onModalClose();
    setUser('');
    setUserEmail('');
    setReviewTitle('');
    setDescription('');
    document.querySelector('#overallRating').selectedIndex = 0;
    document.querySelector('#sizeRating').selectedIndex = 0;
    document.querySelector('#comfortRating').selectedIndex = 0;
    document.querySelector('#recommendedRating').selectedIndex = 0;
    document.querySelector('#widthRating').selectedIndex = 0;
    document.querySelector('#qualityRating').selectedIndex = 0;
    document.querySelector('#user').value = "";
    document.querySelector('#user_email').value = "";
    document.querySelector('#review_title').value = "";
    document.querySelector('#description').value = "";
  }

  return (
    <div>
      <div id='filterBtns' style={{display:"flex"}}>
        <NewestBtn
          id='filterBtn'
          onClick={props.onNewestClick}
          state={props.reviewState}
          >NEWEST
        </NewestBtn>
        <HelpfulBtn
          id='filterBtn'
          onClick={props.onHelpfulClick}
          state={props.reviewState}
          >HELPFUL
        </HelpfulBtn>
        <RelevantBtn id='filterBtn'
         onClick={props.onRelevantClick}
         state={props.reviewState}
         >RELEVANT
        </RelevantBtn>
      </div>
      {currentReviews.map((review) => (
        <ReviewListItem
          review={review}
          onHelpfulClickNumber={props.onHelpfulClickNumber}
        />
      ))}
      <br></br>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <button
          id='bottomReviewBtn'
          onClick={props.onLoadMoreClick}
          style={{width:"49%", display:"flex", justifyContent:"space-between", letterSpacing:"2px", fontSize: "11px"}}
          >
            <div>LOAD MORE</div>
            <div style={{color:"black", fontSize:"13px"}}>→</div>
        </button>
        <button
          id='bottomReviewBtnWrite'
          style={{backgroundColor:"black", color:"white", width:"49%", display:"flex", justifyContent:"space-between", letterSpacing:"2px", fontSize: "11px"}}
          onClick={onModalClick}>
            <div>WRITE A REVIEW</div>
            <div style={{color:"white", fontSize:"13px"}}>→</div>
        </button>
      </div>

      <ModalBg id='ModalBg'>
        <Modal>
          <TitleH2>Write Your Review</TitleH2>
          <LeftModal>
            <strong style={{fontFamily:"adineue PRO KZ Bold"}}>Your Overall Rating</strong>
            <LeftModalRating style={{fontSize: "13px"}}>Please select</LeftModalRating>
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
            <LeftModalRating style={{fontFamily:"adineue PRO KZ Bold"}}>Size</LeftModalRating>
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
            <LeftModalRating style={{fontFamily:"adineue PRO KZ Bold"}}>Comfort</LeftModalRating>
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
            <strong style={{fontFamily:"adineue PRO KZ Bold"}}>Would You Recommend This Product?</strong>
            <RightModalRating style={{fontSize: "13px"}}>Please select</RightModalRating>
            <RightModalRating>
            <SelectRating id='recommendedRating'>
                <option value="0">Select:</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </SelectRating>
            </RightModalRating>
            <br></br>
            <RightModalRating style={{fontFamily:"adineue PRO KZ Bold"}}>Width</RightModalRating>
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
            <RightModalRating style={{fontFamily:"adineue PRO KZ Bold"}}>Quality</RightModalRating>
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
            <strong style={{fontFamily:"adineue PRO KZ Bold"}}>Your Review</strong>
            <BottomModalItems>
              <input
                id='review_title'
                onChange={(e) => setReviewTitle(e.target.value)}
                style={{width:"90%"}}
                type='text'
                placeholder='Summary'>
              </input>
            </BottomModalItems>
            <BottomModalItems style={{fontSize:"13px"}}>
              What’s your opinion in one sentence? Example: Best purchase ever.
            </BottomModalItems>
            <br></br>
            <BottomModalItems>
              <textarea
                id='description'
                onChange={(e) => setDescription(e.target.value)}
                style={{width:"90%", height: "50px"}}
                placeholder='Your Review'>
              </textarea>
            </BottomModalItems>
            <BottomModalItems style={{fontSize:"13px"}}>
              Tell other people more about the product. What about the quality? Or the comfort?
            </BottomModalItems>
            <br></br>
            <BottomModalItems>Personal Information</BottomModalItems>
            <br></br>
            <BottomModalItems>
              <input id='user'
                onChange={(e) => setUser(e.target.value)}
                style={{width:"45%"}}
                type='text'
                placeholder='Nickname'>
              </input>
              <input id='user_email'
                onChange={(e) => setUserEmail(e.target.value)}
                style={{width:"45%"}}
                type='text'
                placeholder='Email'>
               </input>
            </BottomModalItems>
            <BottomModalItems style={{fontSize:"13px"}}>
              Example: Jack27. Be mindful of your own privacy, don’t use your full name or email address.
            </BottomModalItems>
            </BottomModal>

          <WriteReview
            onClick={onModalSubmit}
          >
            <strong style={{textAlign:"center"}}>
              Write Your Review
            </strong>
          </WriteReview>
          <SpanX id='ModalClose' onClick={onModalClose}>X</SpanX>
        </Modal>
      </ModalBg>
    </div>
  )

}

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
height: 60%;
width: 75%;
display: flex;
flex-wrap: wrap;
padding: 10px;
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
font-family: AdihausDIN;
width: 100%;
`;

const LeftModalRating = styled.div`
font-family: AdihausDIN;
`;

const RightModalRating = styled.div`
font-family: AdihausDIN;
`;


const TitleH2 = styled.div`
font-family: adineue PRO KZ Bold;
width: 100%;
height: 1%;
font-size: 50px;
margin-bottom: 20px;
/* color: #767677; */
/* color: #2ada71; */
color: black;
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
font-family: AdihausDIN;
width: 200px;
/* background-color: #2ada71; */
background-color: black;
height 20px;
color: white;
border: 2px solid black;
/* border: 2px solid #2ada71; */
/* border-radius: 14px; */
text-align: center;
vertical-align: center;
margin-top: 21px;
cursor: pointer;
`;

const SelectRating = styled.select`

`;

const NewestBtn = styled.div`
  background-color: rgb(255, 255, 255);
  color: #767677;
  width: 33%;
  border: .5px solid black;
  border-bottom: ${(props) => props.state.newest ? "3px solid black" : ".5px solid black"};
  padding: 10px;
  font-family: AdihausDIN;
  cursor: pointer;
`;

const HelpfulBtn = styled.div`
background-color: rgb(255, 255, 255);
color: #767677;
width: 33%;
border: .5px solid black;
border-bottom: ${(props) => props.state.helpful ? "3px solid black" : ".5px solid black"};
padding: 10px;
font-family: AdihausDIN;
cursor: pointer;
`;

const RelevantBtn = styled.div`
background-color: rgb(255, 255, 255);
color: #767677;
width: 33%;
border: .5px solid black;
border-bottom: ${(props) => props.state.relevant ? "3px solid black" : ".5px solid black"};
padding: 10px;
font-family: AdihausDIN;
cursor: pointer;
`;

export default ReviewList;