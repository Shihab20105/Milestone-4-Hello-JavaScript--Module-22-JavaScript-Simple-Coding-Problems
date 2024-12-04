/*                          22-5 Swap variable, swap without temp, destructing */

/* 
let first = 5;
let second = 7;
console.log(first, second); 
*/
// Output: 5 7


// This is wrong approach 
/* 
first = second;
second = first;
console.log(first, second); 
*/
/* Output:
5 7
7 7 */


// Approach: 1
/* 
let first = 5;
let second = 7;
console.log(first, second);
const temp = first;
first = second;
second = temp;
console.log(first, second); 
*/
/* Output:
5 7
7 5 */


// Approach: 2 - Destructuring 
let first = 5;
let second = 7;
console.log(first, second);
[first, second] = [second, first];
console.log(first, second);
/* Output:
5 7
7 5 */