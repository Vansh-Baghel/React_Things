import classes from "./Button.module.css";

function Button(props) {
  return (
    <button
    // Here we assigned onCLick attribute as props.onClick so that other files could also use the same in the <Button>
      className={`${classes.button} ${props.className}`} onClick={props.onClick}
    >
      {props.children}{" "}
    </button>
  );
}

export default Button;
