import classes from "./AddNewList.module.css"
import Card from "../UI/Card.js";


// props point to the App which acts as middle file between UserNameAge and this file . Basically we are getting the data of UserNameAge from App into this file . We couldve imported this file in UserNameAge directly but to make separate components and to maintain the files , we did this. This is called Lifting State Up.
function AddNewList(props){
    return (
        <ul className = {classes.user}>
            {/* We use round brackets for map method in React */}
            {props.users.map((user) => (
                // We have to provide a unique id to every element to avoid getting the error in the log. This is defined in App file.
                <li key={user.id}>
                    {user.name} ({user.age} years old)
                </li>
            ))}
        </ul>
    );
}

export default AddNewList;