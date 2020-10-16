import React from 'react';
import './App.css';
import ClassBasedBox from './ClassBasedBox';
import ClassBasedCircle from './ClassBasedCircle';
import FunctionBasedBox from './FunctionBasedBox';
import FunctionBasedCircle from './FunctionBasedCircle';
import SubTitle from './SubTitle';
import Title from './Title';

function App() {
  return (
    <div className="App container">
      <div className="container">
        <Title title={'Components made from Classes'} />
        <p>
          The Box and the Circle are different components, <strong>but</strong>, they share
          functionality.
        </p>
        <p>If you hover over them, the message inside changes.</p>
        <p>
          However, because they are class components, I had to repeat the logic in each each
          component
        </p>
        <p>
          This is not <strong>DRY</strong>.
        </p>
        <p>If I wanted to update the logic I would have to update it in both components.</p>
        <div className="columns horizontal ">
          <ClassBasedBox />
          <ClassBasedCircle />
        </div>
      </div>
      <Title title={'Components made from Functions'} />
      <p>Creating a custom hook allows me to share functionality between different components</p>
      <p>
        This is <strong>HUGE</strong> for React developers because now you share make reusable
        components <strong>AND</strong> reusable functionality
      </p>
      <div className="columns horizontal">
        <FunctionBasedBox />
        <FunctionBasedCircle />
      </div>
    </div>
  );
}

export default App;
