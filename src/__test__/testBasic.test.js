import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'; 
import Home from '../page/Home/Home';

it('renders correctly', () => {
  const wrapper = shallow(
    <Home/>
  );
 
  expect(toJson(wrapper)).toMatchSnapshot();
});