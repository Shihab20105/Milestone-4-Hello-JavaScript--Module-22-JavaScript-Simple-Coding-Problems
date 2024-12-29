/*                          22-9 (advanced) Create a Fibonacci Series using a for loop */


/* const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]; 

fibo[3] = fibo[2] + fibo[1]
fibo[4] = fibo[3] + fibo[2]
fibo[5] = fibo[4] + fibo[3]
fibo[50] = fibo[49] + fibo[48]
fibo[487] = fibo[486] + fibo[485]
fibo[n] = fibo[n-1] + fibo[n-2]
fibo[i] = fibo[i-1] + fibo[i-2]

*/


/* 
const fibo = [0, 1];
for(i = 0; i <= 10; i++){ // '0' and '1' already default, you already gave it. For that you have to start from '3' and number '3' index is '2', thats why you have to start from '2'. 
} 
*/




/* 
const fibo = [0, 1];
for(i = 2; i <= 10; i++){ 
    fibo[i] = fibo[i-1] + fibo[i-2]; 
}
console.log(fibo); 
*/
/* Output:
[
   0, 1,  1,  2,  3,
   5, 8, 13, 21, 34,
  55
] */



/* 
const fibo = [0, 1];
for(i = 2; i <= 15; i++){ 
    fibo[i] = fibo[i-1] + fibo[i-2]; 
}
console.log(fibo); 
*/
/* Output:
[
    0,   1,   1,   2,  3,  5,
    8,  13,  21,  34, 55, 89,
  144, 233, 377, 610
] */



const fibo = [0, 1];
for(i = 2; i <= 25; i++){ 
    fibo[i] = fibo[i-1] + fibo[i-2]; 
}
console.log(fibo);
/* Output:
[
      0,     1,     1,     2,     3,
      5,     8,    13,    21,    34,
     55,    89,   144,   233,   377,
    610,   987,  1597,  2584,  4181,
   6765, 10946, 17711, 28657, 46368,
  75025
] */