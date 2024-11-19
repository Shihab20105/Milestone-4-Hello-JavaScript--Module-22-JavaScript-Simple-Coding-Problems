/*                          22-1 String comparison using toLowerCase toUpperCase */

/* 
The String is immutable, so its value cannot be changed. If the String doesn't remain immutable, any hacker can cause a security issue in the application by changing the reference value. The String is safe for multithreading because of its immutableness. Different threads can access a single “String instance”.
*/

/* 
const userName = 'SuperStar';
const userInput = 'SuperStaR';
if(userName === userInput){
    console.log('Valid user');
}
else{
    console.log('Invalid user');
}
*/
/* Output: 
Invalid user */


/*
const userName = 'SuperStar';
const userInput = 'SuperStaR';
console.log(userName.toLowerCase());
if(userName.toLowerCase() === userInput){
    console.log('Valid user');
}
else{
    console.log('Invalid user');
} 
*/
/* Output:
superstar
Invalid user */


/*
 const userName = 'SuperStar';
const userInput = 'SuperStaR';
console.log(userName.toLowerCase());
if(userName.toLowerCase() === userInput.toLowerCase()){
    console.log('Valid user');
}
else{
    console.log('Invalid user');
}  
*/
/* Output:
superstar
Valid user */





const userName = 'SuperStar';
const userInput = 'SuperStaR';
console.log(userName.toLowerCase());
console.log(userName.toUpperCase());
if(userName.toLocaleLowerCase() === userInput.toLocaleLowerCase()){
    console.log('Valid user');
}
else{
    console.log('Invalid user');
}  

/* Output:
superstar
SUPERSTAR
Valid user */   
