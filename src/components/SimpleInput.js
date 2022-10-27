import useError from "../User-Hooks/useError";

const SimpleInput = () => {
  const {inputVal : inputName , InputValIsInvalid : nameIsInvalid , InputChangeHandler : nameInputChangeHandler , InputClasses , reset : resetName} = useError(inputVal => inputVal.trim() !== "");

  // setInputIsTouched will be true when the form is submitted.

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (nameIsInvalid) {
      return;
    }

    console.log(inputName);

    resetName();
  
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className={InputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={inputName}
        />
      </div>
      {nameIsInvalid && (
        <p className="error-text">Input field must not be empty </p>
      )}
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input type="text" id="email" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
