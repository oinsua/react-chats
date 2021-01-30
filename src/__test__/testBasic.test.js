import React from 'react';
import { shallow} from 'enzyme';
import toJson from 'enzyme-to-json'; 


import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import Home from '../page/Home/Home';

it('render Home correctly', () => {
  const wrapper = shallow(
    <Home/>
  );
 
  expect(toJson(wrapper)).toMatchSnapshot();
}); 

import Chats from '../page/Chats/Chats';
import {HashRouter}  from 'react-router-dom';

it('render Chats correctly', () => {
    const wrapper = shallow(
        <HashRouter><Chats/></HashRouter> 
    );
   
    expect(toJson(wrapper)).toMatchSnapshot();
  });

import Message from '../components/Message_Chat/Message';

it('render Message correctly', () => {
    const wrapper = shallow(
        <Message />
    );
   
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  import Box from '../components/Box_Chat/Box';

  it('render Box correctly', () => {
      const wrapper = shallow(
          <Box />
      );
     
      expect(toJson(wrapper)).toMatchSnapshot();
    });


