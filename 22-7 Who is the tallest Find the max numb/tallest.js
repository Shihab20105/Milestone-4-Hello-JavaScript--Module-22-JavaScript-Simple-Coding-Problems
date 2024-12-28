/*                          22-7 Who is the tallest? Find the max number in an array */

/*                          Who is the tallest
Tom and his friends are participating in the 'Who is the tallest?' competition. As per the name, the person with the highest height will be the winner. Can you find who is the tallest among  Tom and all of his friends?

Input:
The input line can have multiple integer numbers, xi(The hight of i'th friend in cm).

Output:
Print the height of the tallest friend (cm).

Sample Input -1:                                    Sample Input -2:
157   134  188                                      167  190 120 165 137

Sample Output -1:                                   Sample Output -2
188                                                 190

*/

/* 
function maxInArray(numbers){

}

const heights = [167,  190, 120, 165, 137];
const tallest = maxInArray(heights);
console.log(tallest); 
*/
// Output: undefined



/* 
function maxInArray(numbers){
    console.log('Array inside the Array', numbers);
}

const heights = [167,  190, 120, 165, 137];
const tallest = maxInArray(heights);
console.log('Tallest person is: ', tallest); 
*/
/* Output: 
Array inside the Array [ 167, 190, 120, 165, 137 ]
Tallest person is:  undefined */



/* 
function maxInArray(numbers){
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        console.log(element);
    }
}

const heights = [167,  190, 120, 165, 137];
const tallest = maxInArray(heights);
console.log('Tallest person is: ', tallest); 
*/
/* Output:
167
190
120
165
137
Tallest person is:  undefined */



/* 
function maxInArray(numbers){
    for(let i = 0; i < numbers.length; i++){
        let largest = numbers[0];
        const index = i;
        const element = numbers[index];
        if(element > largest){
            largest = element;
        }
        return largest;
    }
}

const heights = [167,  190, 120, 165, 137];
const tallest = maxInArray(heights);
console.log('Tallest person is: ', tallest); 
*/
// Output: Tallest person is:  167



/* 
function maxInArray(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}

const heights = [167,  190, 120, 165, 137];
const tallest = maxInArray(heights);
console.log('Tallest person is: ', tallest); 
*/
// Output: Tallest person is:  190




/* 
function maxInArray(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}

const heights = [167,  190, 120, 165, 137, 265];
const tallest = maxInArray(heights);
console.log('Tallest person is: ', tallest); 
*/
// Output: Tallest person is:  265


/* -------------------------------------------------------------------------------------------------------------------------- */

/* Write a function to get the lowest number in an array */

/* 
function minInArray(numbers){
    let lowest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element < lowest){
            lowest = element;
        }
    }
    return lowest;
}

const heights = [167,  190, 120, 165, 137, 265];
const shortest = minInArray(heights);
console.log('Shortest person is: ', shortest); 
*/
// Output: Shortest person is:  120



/* 
1. Initialization:

* 'lowest' is initialized to the first element of the array '(numbers[0]').

2. Loop:

* The 'for' loop iterates through each element of the array.
* For each element, it compares 'element' with 'lowest'. If 'element' is smaller, 'lowest' is updated to 'element'.

3. Return Value:

* After the loop finishes, the function returns the smallest value in the array.

Output:

For the input array 'heights = [167, 190, 120, 165, 137, 265],' the smallest value is '120'. When you run the program, it will output:
Shortest person is: 120


Optimization:
The variable 'index' is unnecessary since you are already using 'i' directly. You can simplify the code slightly:
*/

function minInArray(numbers) {
    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}

const heights = [167, 190, 120, 165, 137, 265];
const shortest = minInArray(heights);
console.log('Shortest person is:', shortest);
// Output: Shortest person is: 120




