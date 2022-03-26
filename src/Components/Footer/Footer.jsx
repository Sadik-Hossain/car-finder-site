import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-faq">
      <h1>1. How React Works? </h1>
      <hr />
      <p>
        React is a javascript library. Firstly, for any website, our browser
        renders the html DOM, which gives us the look and feel of a website.
        React allows us to do the same but in an effiecient way. Whenever, a
        user interacts with a website, react firstly makes a virtual copy of the
        DOM on the memory, then it analyses the difference between the original
        DOM and its virtual DOM. When an object's state is changed, Virtual DOM
        updates only that object in the real DOM rather than all of them. It
        uses the diffing algorithm to analyse these changes.
      </p>
      <hr />
      <h1>2. Difference between props and state.</h1>
      <hr />
      <div className="propsvsstate">
        <div className="props">
          <h2>Props</h2>
          <ul>
            <li>
              props are read-only components, <br />
              which means it is immutable
            </li>
            <li>props are used to pass data between components</li>
            <li>props can be accessed by child components</li>
          </ul>
        </div>
        <div className="state">
          <h2>State</h2>
          <ul>
            <li>
              state represents the information about the component, <br /> state
              can be updated over the time, state is mutable.
            </li>
            <li>State is used for rendering dynamic changes with the components</li>
            <li>state cannot be accessed by child components</li>
          </ul>
        </div>
      </div>

      <hr />
      <h1>3. How useState works?</h1>
      <hr />
      <p>
        useState is a react Hook which allows us to have state variables in
        functional components. UseState returns two things in an array. The
        first element is the initial state and the second one is a function. the
        first value is the simple variable which can be accessed throughout the
        component and second value is a function which is used to set the state
        of the component.
      </p>
      <hr />
    </div>
  );
};

export default Footer;
