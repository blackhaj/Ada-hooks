# Why do Hooks transform React?

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### To install project
1. Clone the repo `git clone https://github.com/blackhaj/Ada-hooks.git`
2. Cd into the repo `cd Ada-hooks`
3. Install the dependencies `npm i`
4. Start the server `npm start`

## Prerequisites
*I assume you already know how Hooks work*
This example app aims to show the power of hooks, not how to use them.

## Key points
* Hooks were released in React version 16.8
* Most of the excitment came because they allow state in functional components
* However, they also allow React devs to reuse logic across components
* Now React Devs can reuse components *AND* functionality 🔥
* This makes for *DRY*er code and happier devs

## Overview of App
~This is a contrived example but hopefully sheds some light~
* In the app I have made two different components.
  1. [A Box](src/ClassBasedBox.js)
  2. [A Circle](src/ClassBasedCircle.js) (well... oval)
* In the first row, I made them using Classes. In the second row, using Functions
* The Box and the Circle are different components - however, they share functionality
* When the user hovers over them, the message changes
* In this fake app, the functionality is trivial but in a real app this might be useful for showing, say, a 'like' button...
* The key point is that because I used class components, I had to repeat the logic in both components
* This is bad because:
  1. It was more work for me and I am lazy
  2. If I want to update the logic, I have to update it in two places
  3. It's way more code and more code = more potential problems
* With Hooks, I can package up the logic and use it in multiple locations
* Now I have a single [useHover](src/hooks/useHover.js) hook where the logic is stored
* Both my Functional [Box](src/FunctionBasedBox.js) and [Circle](src/FunctionBasedCircle.js) components can then use this logic.
* This is great because:
  1. My code is *DRY*
  2. I can update the logic in one place and benefit in multiple places
  3. I can make logic that I can reuse in other applications