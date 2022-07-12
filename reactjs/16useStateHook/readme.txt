React useState Hook
===================================
- Must import it before using.

- This hook allow us to track state in a function component.
State generally refers to data or properties that need to be tracking in an application

** useState accepts an initial state and returns two values:
1: The current state
2: A function that updates the state.


***sudo code by me to understand useState Hook
const [current_state_variable_name,function_that_updates_the_state] = useState(current_state_default_value)

eg: const [color,setColor] = useState("red"); //default value 'red'
    const [color,setColor] = useState(""); //No default value

***Notice again,we are destructuring the returned values from 'useState'.
-The first value, 'color', is our current state.
-The second value, 'setColor', is the function that is used to update our state
-Lastly we set the initial state to an empty string useState("").
***


Read State:
-------------

We can now include our state anywhere in our component. eg: we can use our pevious example state variable 'name' anywhere of the
component using curly braces {name}


Update state:
------------------
**We should never directly update state. eg: color="red" is not allowed.
use state updater function to update current state. eg: <button onClick={()=>setColor("blue")}>Blue</button>


What Can State Hold:
------------------------
The 'useState' Hook can be used to keep track of string,numbers,booleans,arrays,objects and any combination of these!

-We could create multiple state hooks to track individual values.eg:
function Car(){
const [brand,setBrand] = useState("Ford");
const [model,setModel] = useState("Mustang");
const [year,setYear] = useState("1964");
const [color,setColor] = useState("red");
return (
<>
<h1> My {brand}</h1>
<p> It is a {color} {model} from {year}. </p>
</>
       )
}




Or we can use one state and include an object instead!
------------------------------------------------------
function Car(){
    const [car,setCar] = useState({
    brand:"Ford",
    model:"Mustang",
    year:"1964",
    color:"red"
            });


    return (
    <>
    <h1> My {car.brand} </h1>
    <p> It is  a {car.color} {car.model} from {car.year}.</p>
    </>
           );
}


Updating Objects and Arrays in State
-------------------------------------
**When state is updated,the entire state gets overwritten.

What if we only want to update the color of our car?
If we only called setCar({color:"blue"}), this would remove the brand,model and year from our state.
**We can use the Javascript spread operator to help us.

function Car(){
    const [car,setCar]=useState({
    brand:"Ford",
    model:"Mustang",
    year:"1964",
    color:"red"
            });

    const updateColor=()=>{
        setCar(previousState=>{
                return {...previousState,color:"blue"}
                });
    }       
}


