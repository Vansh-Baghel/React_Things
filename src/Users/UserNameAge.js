import { useState } from "react";
import classes from "./UserNameAge.module.css";
import Card from "../UI/Card.js";
import Button from "../UI/Button.js"
import ErrorModal from "../UI/ErrorModal.js";

function UserNameAge(props){
        let [getInputUsername , setInputUsername] = useState('');
        let [getInputAge , setInputAge] = useState('');
        let [error , newError] = useState('');

    function addUserHandler(e){
        e.preventDefault();

        // Conditions so the empty field dont get added and also the negative age.
        // And + sign before getInputAge is to make sure that it is a number and not string. If string then it will get converted.
        if (getInputUsername.trim().length === 0 || getInputAge.trim().length === 0){
            newError({
                title: "Invalid input",
                message: "Please enter a valid name and age."
            })
            return;
        }

        if(getInputAge < 1){
            newError({
                title: "Invalid age",
                message: "Please enter valid age"
            })
            return;
        }
        // Function from App to get used in AddNewList.
        props.onAddUser(getInputUsername , getInputAge);
        // Emptying the input field by assigning the value attribute in the input tag.
        setInputUsername('');
        setInputAge('');
    }

    function usernameChangeHandler(e){
        setInputUsername(e.target.value);
    }

    function ageChangeHandler(e){
        setInputAge(e.target.value);
    }

    function errorDisappearHandler(){
        newError(null);
    }
    return (
        <div>
            {/* If error (used in useState) is defined only then the AND operator line will execute , otherwise it wont read the second stmt and move to the next lines. */}
            {/* Here onConfirm used is user defined and we can give any name to it and this same attribute will be used in the errorModal as props.onConfirm. */}
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorDisappearHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
            <label htmlFor="Username"> Username </label>
            <input type="text" onChange={usernameChangeHandler} value={getInputUsername}></input>
            <label htmlFor="Age"> Age </label>
            <input type="number" onChange={ageChangeHandler} value={getInputAge}></input>

            {/* While using another function as an attribute value, we dont use paranthesis in react. */}
            <Button id="addValues" type="submit"> Add values </Button>
            </form>
        </Card>
        </div>  
    );
}

export default UserNameAge;