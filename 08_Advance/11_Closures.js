// ! Lexical Scoping
function init() {
  var name = "Lexical Scoping"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

// ! Closures 
function makeFunc() {
  const name = "Closures";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
// console.log(myFunc);