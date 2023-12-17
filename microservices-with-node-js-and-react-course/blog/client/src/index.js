// this code is a typical entry point for a react application
// it's respoinsible for rendering the main react component to the DOM

import React from 'react'; // imports react library
import ReactDOM from 'react-dom'; // imports ReactDOM which is a package that provides DOM-specific methods that can be used at the top level of  a web app to enable an efficient way of managing DOM elements
import App from './App'; // imports the `App` component from the `App.js` file located in the same directory; `App` is typically the root component that wraps all other components in the react application

// this is a method provided by `ReactDOM` used to render a react element into the DOM in the supplied `container`
// takes two arguments:
// 1) first is an instance of the `App` component
// 2) second is the DOM node where you want to mount or render your react element; here it's `document.getElementByID('root'), which means the `App` component will be rendered inside the DOM element with the ID `root`
ReactDOM.render(
    <App />,
    document.getElementById('root')
);