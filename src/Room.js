import "./styles.css"

function Room(){
    const[isLit, setLit, roomTemp] = React.useState(true);
    const[isLit] = state[0];
    const[setLit] = state[1];
    const[roomTemp] = 72;

    return (
        <div classname = "room">the room is {isLit ? 'lit' : 'dark'}
        {roomTemp}
        <br/>
        <button onClick = {() => setLit(!isLit)}>
            flip
        </button>
        
        <button ON ={() => setLit(!isLit)}>
        </button>
        
        <button OFF ={() => setLit(isLit)}>   
        </button>

        <button plus> 
        {roomTemp++}
        </button>

        <button minus>
            {roomTemp--}
        </button>

        </div>

    );
}

export function Room()

//you can use the js expression in the brackets to have it say whether or not the room is lit or dark
//when the React.useState is true, it will say lit, else, dark
//this button will call its onClick prop and will call setLit with a new value

