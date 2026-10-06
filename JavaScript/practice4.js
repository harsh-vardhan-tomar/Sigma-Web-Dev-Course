// compile time error

//syntax error
//console.log(1;

//Runtime error
// console.log(x);

// try{
//     console.log("try block starts here ");
//     console.log(x);
//     console.log("try block ends here");
// }
// catch(e){
//     // retry logic 
//     // callback mechanism
//     // logging
//     // custom error
//     console.log("your catch block :",e);
// }
// finally{
//     console.log("This will always run");
// }


// Custom Error
// try{
//     // ReferenceError
//     console.log(x);
// }
// catch(e){
//     throw new Error("Bhai pehle declare karlo , uske baad print karna");
// }

let errorCode=100;
if(errorCode==100){
    throw new Error("Invalid JSON");
}