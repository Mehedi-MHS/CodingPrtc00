//this is module file. Named exports

//not exported
function somethingPrivate(){
  console("I will not be exported because my name is not set in 'export' field ");
}

export const PI=3.1416;
export function doSomething(){
  console.log("Hello From a module");
}

function somethingElse(){
  console.log("something Else");
}

export {somethingElse}

export class MyClass{
  test(){}
}
