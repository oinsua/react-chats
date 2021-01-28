import React from 'react';
import {Div_Header, Span_left, Span_right} from './styled';

const Header = ({username}) => {
    return (
        <Div_Header>
           <Span_left>Welcome, {username}</Span_left>
           <Span_right>X</Span_right> 
        </Div_Header>
    )
}

export default Header
