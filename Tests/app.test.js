import React from 'react';
import { shallow, mount, render } from 'enzyme'
import './enzymeConfigure.js';
import App from '../Client/src/Components/app.jsx';
import ratingsBreakdown from '../Client/src/Components/ratingsBreakdown.jsx';
import recommended from '../Client/src/Components/recommended.jsx';
import reviewList from '../Client/src/Components/reviewList.jsx';

describe('App', () => {
  // it('Should be true', () => {
  //   const foo = true;
  //   expect(foo).toBe(true);
  // })

  // it('Should be true', () => {
  //   const foo = false;
  //   expect(foo).toBe(false);
  // })

  it('Should render all components in App', () => {
    const wrapper = shallow(<App />);
    const ratingbreakdownComponent = wrapper.find(ratingsBreakdown);
    const recommendedComponent = wrapper.find(recommended);
    const reviewListComponent = wrapper.find(reviewList);

    expect(ratingbreakdownComponent.exists()).toBe(true);
    expect(recommendedComponent.exists()).toBe(true);
    expect(reviewListComponent.exists()).toBe(true);
  })
})
