REACT MEMO
--------------
 
Using 'memo' will cause React to skip rendering a component if its props have not changed.
This can improve performance.

This setion uses react hooks

-In example (01Problem),the "Todos" component re-renders even when the todos have not changed.
When you click the increment button,the 'Todos' component re-renders. If this component was complex,it could cause performance issues.


- To fix this,we can use 'memo'. [example 01Solution]
Use 'memo' to keep the 'Todos' component from needlessly re-rendering.
