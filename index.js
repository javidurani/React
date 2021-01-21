//These pull in the `react` and `react-dom` libraries

import React from 'react'
import ReactDOM from 'react-dom'

//other than the return statement, the function is a simple JS function
//the <div>Hello World!</div> is the syntax JSX
// what this does is that it calls the function, gets the JSX, and renders the HTML to the DOM


function Hi(){
    return <div>Hello World!</div>
}

//this is what makes the function work
//it tells react to call the hi function
//then it gets the returned JSX and inserts the HTML elements 
//into the document under the element with the id "root"
//the document.querySelector finds and returns the element root. 

ReactDOM.render(<Hi/>, document.querySelector('#root'));

//the code will compile in babel to a simpler version that is pure javascript
