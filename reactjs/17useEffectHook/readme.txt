REACT useEffect Hook
=================================
*You have to import it before using it.

**useEffect accepts two arguments. The second argument is optional
useEffect(<function>,<dependency>)  

***Methods:***(most important and main topic)
--------------
1: No dependency passed:

useEffect(()=>{
 //Runs on every render
        });

2: An empty array:

useEffect(()=>{
 //Runs only on the first render
        },[]);

3: Props or state values

useEffect(()=>{
 //Runs on the first render
 //And any time any dependency value changes
        },[prop,state]);



-The useEffect Hook allows you to perform side effects in your components.
Some examples of side effects are: fetching data, directly updating the DOM, and timers.










