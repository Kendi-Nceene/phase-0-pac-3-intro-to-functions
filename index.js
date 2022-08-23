// Follow along with the examples here

//Understand arguments and parameters

function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`);
}

sayHelloTo("Isabel"); // "Hello, Isabel!"
sayHelloTo("Jane"); // "Hello, Jane!"
sayHelloTo("R2-D2"); // "Hello, R2-D2!"
sayHelloTo(1); // "Hello, 1!"

//Saying something new
function say(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`);
}
say("Goodbye", "Julio");

//Order of Arguments
//What if we reversed the order of our arguments? Try this function call:
function say(greeting, firstName) {
  console.log("firstName: ", firstName);
  console.log("greeting: ", greeting);
  console.log(`${greeting}, ${firstName}!`);
}

//Return Values in JavaScript
function add(x, y) {
  return x + y;
}
console.log(add(1, 2));

//return and log a string in our say() function
function say(greeting, firstName) {
  console.log("I was called!");
  return `${greeting}, ${firstName}!`;
}