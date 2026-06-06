/*
JSON stands for JavaScript Object Notation. It’s a lightweight data format used to store and exchange information, especially between a server and a web application.

RULES::==>
    Data is written as key–value pairs: "key": "value"

Keys must be in double quotes " "

Values can be:

String ("text")

Number (23)

Boolean (true/false)

Array (["a","b","c"])

Object ({"x":1,"y":2})

null
*/


/*
Parse = Read JSON → Object  
You use it when you receive JSON data (like from an API or file) and want to work with it in JavaScript.

Stringify = Write Object → JSON  
You use it when you want to send/store data in JSON format (like sending to a server or saving in localStorage).
*/


function jsonMethods(jsonString) {
  console.log("Original JSON String:", jsonString);

  // Parsing JSON string to JavaScript object
  let parsedObject = JSON.parse(jsonString);
  console.log("After JSON.parse():", parsedObject);

  // Stringifying JavaScript object to JSON string
  let jsonStringified = JSON.stringify(parsedObject);
  console.log("After JSON.stringify():", jsonStringified);
}

// Example Usage for JSON Methods
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);


// Object → JSON string
const obj = { name: "Abinash", age: 23 };
const jsonStr = JSON.stringify(obj);
console.log(jsonStr); 
// {"name":"Abinash","age":23}

// JSON string → Object
const parsedObj = JSON.parse(jsonStr);
console.log(parsedObj.name); 
// Abinash

