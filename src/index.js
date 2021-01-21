//These pull in the `react` and `react-dom` libraries

import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

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
