import React, { useRef, useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";
import classes from "./AddUser.module.css";

const AddUsers = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (events) => {
    events.preventDefault();
    const enterName = nameInputRef.current.value;
    const enterAge = nameInputRef.current.value;
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age > 0",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="text"
            value={enteredAge}
            onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button>Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUsers;
