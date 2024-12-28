/*                          22-8 Reverse a string and Reverse words in a sentence */


/* 
function reverseString(text){
    for(let i = 0; i < text.length; i++){
        const element = text[i];
        console.log(element);
    }
}

const myString = 'I am a good boy';
const reversed = reverseString(myString); 
*/
/* Output:
I
 
a
m

a

g
o
o
d

b
o
y */





/* 
function reverseString(text){
    //for(let i = 0; i < text.length; i++){}
    for(let i = text.length; i >= 0; i--){
        const element = text[i];
        console.log(element);
    }
}

const myString = 'I am a good boy';
const reversed = reverseString(myString); 
*/
/* Output:
undefined
y
o
b

d
o
o
g

a

m
a

I */



/* 
function reverseString(text){
    //for(let i = 0; i < text.length; i++){}
    for(let i = text.length-1; i >= 0; i--){
        const element = text[i];
        console.log(element);
    }
}

const myString = 'I am a good boy';
const reversed = reverseString(myString); 
*/
/* Output:
y
o
b

d
o
o
g

a

m
a

I */



function reverseString(text){
    //for(let i = 0; i < text.length; i++){}
    let reversed = '';
    for(let i = text.length-1; i >= 0; i--){
        const element = text[i];
        reversed = reversed + element;
        console.log(element, reversed);
    }
    return reversed;
}

const myString = 'I am a good boy';
const reversed = reverseString(myString);
console.log('Reversed Output: ', reversed);
/* Output:
y y
o yo
b yob
  yob
d yob d
o yob do
o yob doo
g yob doog
  yob doog
a yob doog a
  yob doog a
m yob doog a m
a yob doog a ma
  yob doog a ma
I yob doog a ma I
Reversed Output:  yob doog a ma I */