

function Gate({isOpen}){
    if (isOpen){
        ReactDOM.render(<isOpen status = "open"/> )
    }

    else{
        ReactDOM.render(<isOpen status = "closed"/>)
    }
}

export function Gate()

//need help still