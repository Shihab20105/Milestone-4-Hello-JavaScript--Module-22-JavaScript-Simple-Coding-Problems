/*                          22-8 Reverse a string and Reverse words in a sentence */



/* 
function reverseWords(str){
    const words = str.split(' ');
    console.log(words);
}


const myString = 'I am a good boy';
reverseWords(myString); 
*/
// Output: [ 'I', 'am', 'a', 'good', 'boy' ]


/* 
function reverseWords(str){
    const words = str.split(' ');
    const result = [];
    //[ 'I', 'am', 'a', 'good', 'boy' ]
    for(let i = words.length -1; i >= 0; i--){
        const element = [i];
        result.push(element);
    }
    console.log(result);
}


const myString = 'I am a good boy';
reverseWords(myString); 
*/
// Output: [ [ 4 ], [ 3 ], [ 2 ], [ 1 ], [ 0 ] ]



/* 
function reverseWords(str){
    const words = str.split(' ');
    const result = [];
    //[ 'I', 'am', 'a', 'good', 'boy' ]
    for(let i = words.length -1; i >= 0; i--){
        const element = words[i];
        result.push(element);
    }
    console.log(result);
}


const myString = 'I am a good boy';
reverseWords(myString); 
*/
// Output: [ 'boy', 'good', 'a', 'am', 'I' ]



function reverseWords(str){
    const words = str.split(' ');
    const result = [];
    //[ 'I', 'am', 'a', 'good', 'boy' ]
    for(let i = words.length -1; i >= 0; i--){
        const element = words[i];
        result.push(element);
    }
    const reversed = result.join(' ');
    return reversed;
}

const myString = 'I am a good boy';
const output = reverseWords(myString); // Call the function and store the result
console.log(output); // Print the result to the console
// Output: boy good a am I