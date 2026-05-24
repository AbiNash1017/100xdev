/*
function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}
*/

// You are only allowed to call one function after this
// How will you displayResult of a sum

//solution:
/*
calling a function
*/

function sum(num1, num2, fnToCall) {
    let result = num1 + num2;
    fnToCall(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

const ans = sum(1, 2, displayResult);

//here now can i call any function with the arameneter in a single now this is called

//second type

function calculateArithematic(a,b,arithematicFinalFunction){
    const ans=arithematicFinalFunction(a,b);
    return ans;
}

function add(a,b){
    return a+b;
}

const value=calculateArithematic(1,2,add);
console.log(value);
