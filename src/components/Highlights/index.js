import React from 'react';
import Fade from 'react-reveal/Fade';

const Description = () => {
    return (
        <Fade>
Expand
Description.js
1 KB
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';

Expand
Discount.js
2 KB
import React from 'react';
import Description from './Description';
import Discount from './Discount';

const Highlights = () => {
    return (
        <div className="highlight_wrapper">
            <Description/>
            <Discount/>
        </div>
    );
};

export default Highlights;
