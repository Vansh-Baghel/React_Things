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
* Whenever we use react , the execution of the files take place only once . Means whenever we want to update any file component (the function which we write) , it doesnt change it.
* If we want to change anything in JS , we need our executer to go back to the file and read the component again .
* **useState** here comes into picture , it accepts two arguments (oldName , newName) . The newName can be updated as a function where ever needed.
* Use destructing of arrays in this to assign variable to both the outputs , one oldValue and second newValue.
* We cannot update the value using the equal to sign because when we call it as a function then it says the executer to **rerun** the component , which we need.