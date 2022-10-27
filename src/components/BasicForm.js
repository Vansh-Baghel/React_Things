import useErrorForm from "../User-Hooks/useErrorForm";

const firstNameInvalidCondition = (inputFNameVal) =>
  inputFNameVal.trim() === "" ||
  inputFNameVal.charAt(0) !== inputFNameVal.charAt(0).toUpperCase();

const lastNameInvalidCondition = (inputLNameVal) =>
  inputLNameVal.trim() === "" ||
  inputLNameVal.charAt(0) !== inputLNameVal.charAt(0).toUpperCase();

const emailInvalidCondition = (inputEmailVal) =>
  inputEmailVal.trim() === "" ||
  inputEmailVal.charAt(0) === inputEmailVal.charAt(0).toUpperCase() ||
  !inputEmailVal.includes("@");

const BasicForm = (props) => {
  const {
    inputVal: inputFNameVal,
    InputIsInvalid: firstNameInvalid,
    InputValChangeHandler: firstNameChangeHandler,
    InputValBlurHandler: inputFNameBlurHandler,
    InputValClasses: InputFNameClasses,
    resetField: resetFNameField,
  } = useErrorForm(firstNameInvalidCondition);

  const {
    inputVal: inputLNameVal,
    InputIsInvalid: lastNameInvalid,
    InputValChangeHandler: lastNameChangeHandler,
    InputValBlurHandler: inputLNameBlurHandler,
    InputValClasses: InputLNameClasses,
    resetField: resetLNameField,
  } = useErrorForm(lastNameInvalidCondition);

  const {
    inputVal: inputEmailVal,
    InputIsInvalid: emailInvalid,
    InputValChangeHandler: emailChangeHandler,
    InputValBlurHandler: inputEmailBlurHandler,
    InputValClasses: InputEmailClasses,
    resetField: resetemailField,
  } = useErrorForm(emailInvalidCondition);

  const onSubmitFormHandler = (e) => {
    e.preventDefault();

    if (firstNameInvalid && lastNameInvalid && emailInvalid) {
      return;
    }

    resetFNameField();
    resetLNameField();
    resetemailField();

    // setInputLNameVal("");
    // setInputEmailVal("");
  };
  // const InputFNameClasses =
  //   firstNameInvalid === true ? "form-control invalid" : "form-control";
  // const InputLNameClasses =
  //   lastNameInvalid === true ? "form-control invalid" : "form-control";
  // const InputEmailClasses =
  //   emailInvalid === true ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={onSubmitFormHandler}>
      <div className="control-group">
        <div className={InputFNameClasses}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            onChange={firstNameChangeHandler}
            onBlur={inputFNameBlurHandler}
            value={inputFNameVal}
          />
          {firstNameInvalid && <p> Start with capital letter </p>}
        </div>
        <div className={InputLNameClasses}>
          <label htmlFor="fname">Last Name</label>
          <input
            type="text"
            id="fname"
            onChange={lastNameChangeHandler}
            onBlur={inputLNameBlurHandler}
            value={inputLNameVal}
          />
          {lastNameInvalid && <p> Start with capital letter </p>}
        </div>
        <div className={InputEmailClasses}>
          <label htmlFor="email">Your E-Mail</label>
          <input
            type="email"
            id="email"
            onChange={emailChangeHandler}
            onBlur={inputEmailBlurHandler}
            value={inputEmailVal}
          />
          {emailInvalid && (
            <p className="error-text">Please enter a valid email.</p>
          )}
        </div>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
