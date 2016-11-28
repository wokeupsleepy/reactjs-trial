import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';

/*
NOTE: Most of the steps to get to this point come from here:
https://www.codementor.io/tamizhvendan/tutorials/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr
In Setting Up Babel-Loader section, it is needed to install babel-core
(command in Command Prompt: npm install --save-dev babel-core).

Remember to navigate to the local website folder before running npm commands in Command Prompt
Remember to run Command Prompt as Admin

The following command:
node_modules\.bin\webpack -d --watch
is run from the local website folder in CLI (Admin) in order to constantly monitor and convert the index.jsx.

To remove/fix the syntax highlighting/syntax error detection, follow Solution 2 from the first reply here:
http://stackoverflow.com/questions/34097915/visual-studio-2015-jsx-es2015-syntax-highlighting
*/

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Donner',
    lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

const secondElement = getGreeting(user);

//ReactDOM.render(secondElement, document.getElementById('app'));

//NOTE: Renders a clock of the current time
function tick() {
    //NOTE: "Welcome(input)" is a ReactJS component, "input" is a ReactJS props (input for a ReactJS component)
    function Welcome(input) {
        return <h3>Hello, {input.name}!</h3>;
    }

    //NOTE: That the Welcome tag below is rendered using the above Welcome() function
    //NOTE: "element" is a ReactJS element, it's essentially a piece of "renderable" HTML
    const element = (
      <div>
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
          <Welcome name="Sara" />
      </div>
    );

    ReactDOM.render(
      element,
      document.getElementById('clock')
    );
}

//NOTE: Updates the clock every second with the ReactDOM.render() call inside tick()
setInterval(tick, 1000);

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}