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

// let errorCode=100;
// if(errorCode==100){
//     throw new Error("Invalid JSON");
// }

//   let div2=document.querySelector('div2');
// undefined
// div2
// null
//    let div2=document.querySelector('#div2');
// undefined
// div2
// <div id=​"div2">​…​</div>​<p>​first​</p>​<h1>​Second​</h1>​<p>​third​</p>​</div>​
// let newElement=document.createElement('span');
// undefined
// newElement
// <span>​</span>​
// newElement.textContent='India Incredible';
// 'India Incredible'
// div2.insertAdjacentElement('beforebegin',newElement);
// <span>​India Incredible​</span>​

let div2=document.querySelector('#div2');
let newElement=document.createElement('span');
newElement.textContent="Hi guyz";
div2.insertAdjacentElement('afterend',newElement);
console.log("element created");


// let parent=document.querySelector('#div2');
// let Child=document.querySelector('#fchild');
// parent.removeChild(Child);

// console.log(Child.parentElement); to find parent

// let parent=Child.parentElement;
// let Child=document.querySelector('#fchild');
