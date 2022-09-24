import React, { useState } from "react";

import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <React.Fragment>
      <AddUsers onAddUser={addUserHandler} />
      <UsersList users={userList} />
      {/* <h1>Love</h1> */}
    </React.Fragment>
  );
}

export default App;
