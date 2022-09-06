import classes from "./Card.module.css"

function Card(props){
    return (
        // Use this "className" to give any class in other files where this Card wrapper is used. 
        <div className={`${classes.card} ${props.className}`}>{props.children}</div>
    )
}

export default Card;