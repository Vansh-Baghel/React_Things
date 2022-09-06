import { useState } from "react"

import AddNewList from './Users/AddNewList';
import UserNameAge from './Users/UserNameAge';

function App() {
  const [newNames , updatingNewNames] = useState([]);

  // Here we are using previous values so we can append them, therefore whenever our data is dependant on previous values use second argument of useState as function.
  function addUserEventHandler(uName , uAge){
      updatingNewNames(prevList => {
        return[...prevList , { name : uName , age : uAge , id : Math.random()}];
      });
  }

  return (
    <div>
      <UserNameAge onAddUser = {addUserEventHandler}/>
      <AddNewList users={newNames}/>
    </div>
  );
}

export default App;
