//These pull in the `react` and `react-dom` libraries

import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import MediaCard from MediaCard
import HiFullName from HiFullName
import greet from greet
import Gate from Gate
import Room from Room
import Reddit from Reddit

//how to export functions from other files:
// export function (thename)()
//import (thename) from (thename)
 
//other than the return statement, the function is a simple JS function
//the <div>Hello World!</div> is the syntax JSX
// what this does is that it calls the function, gets the JSX, and renders the HTML to the DOM
// you can store vars in the function by declaring the var outside and calling it inside the function.

let name = "javi";

function Hi(){
    return <div><strong>Hello {name}</strong>
    <h1>Welcome to React</h1>
    <h2>So far all is good</h2>
    <li>test 1</li>
    <li>test 2</li>

    {5 + 10}
    </div>
}

//this is what makes the function work
//it tells react to call the hi function
//then it gets the returned JSX and inserts the HTML elements 
//into the document under the element with the id "root"
//the document.querySelector finds and returns the element root. 

ReactDOM.render(<Hi/>, document.querySelector('#root'));

//the code will compile in babel to a simpler version that is pure javascript

//simple function that calls the name var and greets 

//working with props
//new parameter will be props
function Hi(props){
    return <div><strong>Hello {props.name}!</strong>
    <h1>Welcome to React</h1>
    <h2>So far all is good</h2>
    <li>test 1</li>
    <li>test 2</li>

    {5 + 10}
    </div>
}

//the props name must be passed and we do this by doing this
//it will then say "Hello Javi!"
//you can also pass in booleans, nums, etc. (not limited to strings)

ReactDOM.render(<Hi name="Javi"/>), document.querySelector('#root')

//these bars {} also determine whether somethings a string or js function

//<Sidebar hidden ="false"/> //string
//<Sidebar hidden = {false}/> //js expression


//there are different ways of writing the "Hi" function with the name constant

//the default
//function Hi({ name }) {
//    return <div>Hello {name}!</div>;
//  }

//the function in a constant
//const Hi = function({ name }) {
//    return <div>Hello {name}!</div>;
//  }

// it can also be put into a const without the function which is useful if its short
//const Hi = ({ name }) => <div>Hello {name}!</div>;

//option const Hi = ({ name }) => (<div>Hello {name}!</div>)
//^^ the parenthesees can be used if more space is required

//practice



ReactDOM.render(<MediaCard/>, document.querySelector('#root'))

ReactDOM.render(<Reddit />, document.getElementById("root"))


