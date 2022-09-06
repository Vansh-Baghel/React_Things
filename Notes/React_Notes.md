# Chp 2
## JSX
* It is the extension of React which refers to Javascript and XML (html) as we use both html and js in same file of react. 

## Components
* Components in react are just JS functions. 
* We break big project components as smaller components to make it more organized and easy to understand and go to the function directly. 
* We don't specify the extension. 
* Custom made components must start with **Uppercase** and we also need to export it. 

## 1 root element
* There must be only one root element while adding HTML code in js file. 
* One root means it can have multiple lines of HTML but the first and it must be wrapped in an Html element like **div**.

## HTML inside JS explained
* It is not actually HTML but JSX syntax invested by React. 
* Therefore it is JS itself. 

## Adding JS in HTML code
* We use curly braces to insert any variable of JS inside the HTML code in JSX file itself. 

## props
* To link 2 different files to change a component we use the concept of props. 
* Sometimes we might want to change certain **component** from different file and to link them we must pass an argument in the of first file function and need to specify the variable which we use in the second file. 
* We create object and then access the value from key in the HTML in second file. 
* props refer to the file in which the function is being used.

## Way to get date format in JS
* **toLocalString** can be used to get the date and month.
* **getFullYear** for year.

## render()
* The first element will be the one which will be used to replace the content of second element.

## children props
* children is a reserved prompt and the value is always the content between the opening and the closing component.
* Whenever we want to create wrapper of our own , we use **.children**.
* To give mulitple classes to it , we need to store the classes in the variable and add **.className** with it which says that all the class mentioned will be added into the child variable. 

## useState in React
* useState is one of the **hook** functions and we always use it inside any component but not inside any nested function or outside the component.
* Whenever we use react , the execution of the files take place only once . Means whenever we want to update any file component (the function which we write) , it doesnt change it ie this **('')**.
* Always give the initial value in the paranthesis.
* If we want to change anything in JS , we need our executer to go back to the file and read the component again .
* **useState** here comes into picture , it accepts two arguments **(oldName , newName)/(nameStored , newNameAssign)** . The newName can be updated as a function where ever needed.
* Use destructing of arrays in this to assign variable to both the outputs , one oldValue and second newValue.
* We cannot update the value using the equal to sign because when we call it as a function then it says the executer to **rerun** the component , which we need.

## useState dependant on prev value
* Many times we are using previous values so we can append them, therefore whenever our data is dependant on previous values use second argument of useState as a function and pass the storedValue argument (first arg of useState) as arg of this function .
* Use spread operator to get all the storedValues.

## Dynamicallyn adding array el
* We can do this by using map method and avoid manually adding each elements into the file.

# Chp 6
## Styled components
* write **npm install --save styled-components** to use it.
* Then **import** it in files and then we can use it.
* Write all the CSS styles inside the **template literals** and use **&** before using any class, other HTML element or pseudo class.
* Dont need to give primary class name, ie , first class name. For second class name u can specify it inside the place its used and also can use ternary operator to give its condition.
* You can also directly use **media query** inside the curly braces of any class styling.

## .module.css
* Here we can use CSS styling in JS by importing the particular CSS file which is named as .module.css .
* Search more if wanna learn.

## Debug in inspect 
* Can visit any file from inspect and debug it to find the errors .
* Can see the property value after hover.

## React Dev Tools 
* This is a way to find many informations like linking of files , find the text , get the id , props , function name , etc etc .
* Download react dev tools extension from google and visit **Components** in the lists of console dropdown.

## Function inside function
* While using a normal function as a callback function (means used under our file function) , then we dont use paranthesis because we dont want to execute the function as soon as it reaches the line but rather want to make it used whenever required.

## Blank the input field
* When we want our input field to blank after submission , make sure to give input HTML element the **value** attribute.
* This will store the oldValue in it , and then we can change the new value to blank string ie **newValueVariable('')**.

## Lifting State Up
* When we want to connect two sibling components , then we find a common file to connect the two files .
* We use the data from that common file which acts as middle file between the two.
* This helps us to maintain small components of a big file. 
