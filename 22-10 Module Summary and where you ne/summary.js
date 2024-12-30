/*                          22-10 Module Summary and where you need to focus */


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