import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <div className='footer-faq'>
           <h1>1. How React Works? </h1> 
           <hr />
           <p>React is a javascript library. Firstly, for any website, our browser renders the html DOM, which gives us the look and feel of a website. React allows us to do the same but in an effiecient way. Whenever, a user interacts with a website, react firstly makes a virtual copy of the DOM on the memory, then it analyses the difference between the original DOM and its virtual DOM. When an object's state is changed, Virtual DOM updates only that object in the real DOM rather than all of them. It uses the diffing algorithm to analyse these changes.</p>
           <hr />
        </div>
    );
};

export default Footer;