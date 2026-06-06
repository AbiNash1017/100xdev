//A callback is simply a function you pass into another function, so that the receiving function can call it later.

function log1(){
    console.log("hello world");
}


function log2(){
    console.log("hello space");
}

function logWhatsPresent(fn){
    fn();
}

logWhatsPresent(log2);


/*
log1 and log2 are regular functions.

logWhatsPresent is a higher-order function — it takes another function as an argument (fn).

When you call logWhatsPresent(log2), you’re passing the function log2 as a callback.

Inside logWhatsPresent, fn() executes whatever function was passed in.
Since log2 was passed in, it runs console.log("hello space").
*/