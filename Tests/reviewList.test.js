import React from 'react';
import { shallow, mount, render } from 'enzyme'
import './enzymeConfigure.js';
import App from '../Client/src/Components/app.jsx';
import ReviewList from '../Client/src/Components/reviewList.jsx';

describe('ReviewList', () => {
  it('Should have a load more button', () => {
    // const wrapper = shallow(<ReviewList />);
    const wrapper = shallow(<App />);
    const review = wrapper.find(ReviewList).dive();
    const loadmore = review.find('#loadmore').text
    // expect(wrapper.find('div.loadmore').text()).to.equal('LOAD MORE')

    expect(loadMore).toBe('LOAD MORE');
    // expect(loadMore).toBe('LOAD MORE');
  })
})