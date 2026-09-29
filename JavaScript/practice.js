// var age=23; // global scope
// if(true){
//     console.log(age);
// }

// function solve(){
//     var age = 23;
//     console.log(age);
// }
// solve();
// console.log(age); //error

// var age=12; // Redeclaration of variable
// var age=34;

// {
//     let age=24;
//     console.log(age);
// }

// {
//     let age=24;
// }
// console.log(age); //error


// let a=10;
// a="babbar";
// a=null;

// const a=10;
// a=20;
// const a;
// const a=40;
// console.log(a);

let num=12;
console.log(typeof(num));

let id1=Symbol("id");
let id2=Symbol("id");
if(id1==id2){
    console.log("hello");
}
else{
    console.log("bye");
}

let a=3;
let b=3;
console.log(a**b);

console.log('5'==5);    //true
console.log('5'===5); //false

console.log(false || "harsh");
console.log(false || 1 || 7 || 8);

console.log(2&3);
console.log(2|3);
console.log(~3);
console.log(~0);
console.log(2^2);

console.log(10>>1);
console.log(10<<1);

// for(let i=0;i<=5;i++){
//     console.log(i);
// }

// for(let i=5;i>=1;i--){
//     if(i==3){
//         break;
//     }
//     console.log(i);
// }

// for(let i=0;i<5;i++){
//     if(i==3){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
// }
// let i=0;
// while(i<5){
//     console.log("inside loop");  // infinite loop
//     if(i==3){ 
        
//         continue;
//     }
//     else{
//         console.log(i);
//         i++;
//     }   
// }
let i=0;
while(i<5){
    console.log("inside loop");  
    if(i==3){ 
        i++;
        continue;
    }
    else{
        console.log(i);
        i++;
    }   
}
let firstName='Santra';
let middleName="Imli";
let lastName=`Bye Bye 
tomar`;
console.log(lastName);

let fName=new String("Hello my name is Santra");
console.log(fName);
console.log(typeof(fName));

console.log(firstName.substring(1,4));

let sentence="hello everyone kaise ho sab";
let words=sentence.split(' ');
console.log(words);

let sentence2="hello \"everyone\" kaise ho sab";
console.log(sentence2);


let sentence3="hello\\everyone\\kaise\\h\\o\\sab";
let words3=sentence3.split('\\');
console.log(words3);
console.log(words3.join(','));


