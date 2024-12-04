/*                          22-4 Math, abs, pow, round, ceil, floor, and random number */


/* 
const result = Math.pow(3, 8);
console.log(result); 
*/
// Output: 6561


/* 
const result = Math.pow(3, 8);
console.log(result);

const num1 = 25;
const num2 = 45;

const gap = num1 - num2;

if(gap < 5){
    console.log('You guys can be friends');
}
else{
    console.log('You guys stay apart');
} 
*/

/* Output:
6561
You guys can be friends */



/* 
const result = Math.pow(3, 8);
console.log(result);

const num1 = 25;
const num2 = 45;

const gap = num1 - num2;
console.log(gap);

if(gap < 5){
    console.log('You guys can be friends');
}
else{
    console.log('You guys stay apart');
} 
*/
/* Output:
6561
-20
You guys can be friends */



/* 
const result = Math.pow(3, 8);

const num1 = 25;
const num2 = 45;

const gap = num1 - num2;
console.log(gap);

if(gap < 5){
    console.log('You guys can be friends');
}
else{
    console.log('You guys stay apart');
} 
*/
/* Output:
-20
You guys can be friends */



/* 
const result = Math.pow(3, 8);

const num1 = 75;
const num2 = 45;

const gap = num1 - num2;
console.log(gap);

if(gap < 5){
    console.log('You guys can be friends');
}
else{
    console.log('You guys stay apart');
} 
*/
/* Output:
30
You guys stay apart */



/* 
const result = Math.pow(3, 8);

const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);
console.log(gap);

if(gap < 5){
    console.log('You guys can be friends');
}
else{
    console.log('You guys stay apart');
} 
*/
/* Output:
20
You guys stay apart */


/* ------------------------------------------------------------------------------------------------------------------------- */

// 

/* 
const number = 2.4598;
const fullNumber = Math.round(number);
console.log(fullNumber); 
*/
// Output: 2


/* 
const number = 2.514598;
const fullNumber = Math.round(number);
console.log(fullNumber); 
*/
// Output: 3



/* 
const number = 2.49999;
const fullNumber = Math.round(number);
console.log(fullNumber); 
*/
// Output: 2


/* 
const number = 2.50001;
const fullNumber = Math.round(number);
console.log(fullNumber); 
*/
// Output: 3


/* 
const number = 2.5;
const fullNumber = Math.round(number);
console.log(fullNumber); 
*/
// Output: 3


/* 
const number = 2.451235;
const fullNumber = Math.round(number);
const result2 = Math.ceil(2.00001);
console.log(result2); 
*/
// Output: 3



/* 
const number = 2.451235;
const fullNumber = Math.round(number);
const result2 = Math.ceil(2.00001);
const result3 = Math.floor(456.259);
console.log(result3); 
*/
// Output: 456


/* -------------------------------------------------------------------------------------------------------------------------- */


// Random 

/* 
const number = 2.451235;
const fullNumber = Math.round(number);
const result2 = Math.ceil(2.00001);
const result3 = Math.floor(456.259);
//console.log(result3); 
*/

/* -------------------------------------------------------------------------------------------------------------------------- */
//console.log(Math.random());
// Output: 0.35855812967446155

//console.log(Math.random());
// Output: 0.9058632850086286

//console.log(Math.random());
// Output: 0.23956522064113162



/* 
const random = Math.random()*100;  // If you need 1 to 100 then you can do this
console.log(random); 
*/
// Output: 39.351495066910644

/* 
const random = Math.random()*100;
console.log(random); 
*/
// Output: 63.77944599170446

/* 
const random = Math.random()*100;
console.log(random); 
*/
// Output: 83.83070435219014


/* 
const random = Math.round(Math.random()*100);     // If you want to get full number then you can do this
console.log(random); 
 */
// Output: 21


/* 
const random = Math.round(Math.random()*100);     // If you want to get full number then you can do this
console.log(random);  
*/
// Output: 89

/* 
const random = Math.round(Math.random()*100);     // If you want to get full number then you can do this
console.log(random); 
*/ 
// Output: 75



/* 
for(let i = 0; i < 20; i++){
    const random = Math.round(Math.random()*6);
    console.log(random); 
} 
*/
/* Output:
5
2
3
3
3
3
2
1
5
1
4
1
1
3
2
4
2
1
2
3 */



for(let i = 0; i < 20; i++){
    const random = Math.round(Math.random()*6);
    console.log(random); 
}
/* Output:
3
1
6
0
4
6
3
2
4
1
5
3
0
2
0
6
2
4
4
1 */

