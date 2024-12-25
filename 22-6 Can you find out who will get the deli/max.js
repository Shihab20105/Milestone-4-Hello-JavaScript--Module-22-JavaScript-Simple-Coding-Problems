/*                          22-6 Can you find out who will get the delicious cake */

/* Can you find out who will get the delicious cake?
                            Part - I 
Jim is a meritorious student. He secures first place in his class all the time. This year Dela has joined his class. She was also a topper at her previous school. On the day of result publication, the teachers comes in to the class with a delicious cake and says that ''Jim and Dela, whoever is the topper, wil get this tasty cake.'' Can you find out who will get this cake?

Input:
The input line has two values, m (The mark Jim has got) and n (The mark Dela has got).

Output:
Print the name of the topper.

Sample Input - 1:                                   Sample Output - 2:
84 75                                               69 97

Sample Output - 1:                                  Sample Output - 2:
Jim                                                 Dela
*/


/* 
const jim = 84;
const dela = 75;
if(jim > dela){
    console.log('Jim will get the cake');
}
else{
    console.log('Dela you will get the cake');
} 
*/
// Output: Jim will get the cake


/* 
const jim = 69;
const dela = 97;
if(jim > dela){
    console.log('Jim will get the cake');
}
else{
    console.log('Dela you will get the cake');
} 
*/
// Output: Dela you will get the cake

/* -------------------------------------------------------------------------------------------------------------------------- */

/* Can you find out who will get the delicious cake?
                            Part - II

This year not only Jim and Dela but also Chinku are doing hard work to secure the first position. Can you find out who will get the delicious cake?

Input:
The input line has three values, x (The marks Jim has got), y (The marks Dela has got) and z (The marks Chinku has got).

Output:
Print the name of the topper.

Sample Input - 1:                                   Sample Input - 2:
84 99 77                                            69 97 99

Sample Output - 1:                                  Sample Output - 2:
Dela                                                Chinku
*/

/* 
const jim = 84;
const dela = 94;
const chinku = 77;

if(jim > dela && jim > chinku){
    console.log('Jim will get the cake');
}
else if(dela > jim && dela > chinku){
    console.log('Dela wil eat the cake in this time');
}
else{
    console.log('Chinku will get the cake');
} 
*/
// Output: Dela wil eat the cake in this time


/* 
const jim = 69;
const dela = 97;
const chinku = 97;

if(jim > dela && jim > chinku){
    console.log('Jim will get the cake');
}
else if(dela > jim && dela > chinku){
    console.log('Dela wil eat the cake in this time');
}
else{
    console.log('Chinku will get the cake');
} 
*/
// Output: Chinku will get the cake
// Note: 97 not greater than 97 for that it will show 'Chinku will get the cake'.


/*
 const jim = 69;
const dela = 97;
const chinku = 99;

if(jim > dela && jim > chinku){
    console.log('Jim will get the cake');
}
else if(dela > jim && dela > chinku){
    console.log('Dela wil eat the cake in this time');
}
else{
    console.log('Chinku will get the cake');
} 
*/
// Output: Chinku will get the cake


// The full things has a easy way
Math.max(45, 77, 98);
Math.min(55, -20, 89);

/* Homework 1: 
Write a function that will take 3 numbers will return the max number
Write a function that will take 3 parameters and will return the min number
* First time do it using 'if-else'
* Second time do it using 'Math.min' or 'Math.max'
*/


/* Math.max(45, 77, 98);
Write a function that will take 3 numbers will return the max number
do it using 'if-else' 
Here's how you can write a function in JavaScript that takes three numbers and returns the maximum using 'if-else':
*/
/* 
function findMaxIfElse(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
} 
*/
// Example Usage:
/* 
const maxNumber = findMaxIfElse(45, 77, 98);
console.log("Maximum number using if-else:", maxNumber); 
*/
// Output: Maximum number using if-else: 98


/* Math.min(55, -20, 89);
Write a function that will take 3 parameters and will return the min number
do it using 'if-else'
Here’s how you can write a JavaScript function that takes three parameters and returns the minimum using 'if-else':
*/
/* 
function findMinIfElse(a, b, c) {
    if (a < b && a < c) {
        return a;
    } else if (b < a && b < c) {
        return b;
    } else {
        return c;
    }
} 
*/
// Example Usage:
/* 
const minNumber = findMinIfElse(55, -20, 89);
console.log("Minimum number using if-else:", minNumber); 
*/
// Output: Minimum number using if-else: -20



/* Math.max(45, 77, 98);
Write a function that will take 3 numbers will return the max number
do it using 'Math.min' or 'Math.max
Here’s how you can write a JavaScript function that uses 'Math.max' to find the maximum of three numbers: */
/* 
function findMaxMath(a, b, c) {
    return Math.max(a, b, c);
} 
*/
// Example Usage:
/* 
const maxNumber = findMaxMath(45, 77, 98);
console.log("Maximum number using Math.max:", maxNumber); 
*/
// Output: Maximum number using Math.max: 98




/* Math.min(55, -20, 89);
Write a function that will take 3 parameters and will return the min number
do it using 'Math.min' or 'Math.max' 
Here’s how you can write a JavaScript function that uses 'Math.min' to find the minimum of three numbers:
*/
function findMinMath(a, b, c) {
    return Math.min(a, b, c);
}
// Example Usage:
const minNumber = findMinMath(55, -20, 89);
console.log("Minimum number using Math.min:", minNumber);
// Output: Minimum number using Math.min: -20





