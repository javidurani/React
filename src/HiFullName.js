//there can also be multiple props
function HiFullName(props) {
    return(<div>Hi {props.firstname} {props.lastname}!</div>)
}

//here we define what the firstname and lastname are
<HiFullName firstname = "Javier" lastname = "Duran"/>

export function HiFullName();