/*                          22-3 How to split, slice, substr, substring, concat, join */


/* 
const lyrics = 'Never let yesterday use up too much of today. You must be the change you wish to see in the world. He who conquers himself is the mightiest warrior.';
console.log(lyrics); 
*/
// Output: Never let yesterday use up too much of today. You must be the change you wish to see in the world. He who conquers himself is the mightiest warrior.


/* 
const lyrics = 'Never let yesterday use up too much of today. You must be the change you wish to see in the world. He who conquers himself is the mightiest warrior.';
const parts = lyrics.split(' ');
console.log(parts); 
*/
/* Output: [
  'Never',     'let',      'yesterday',
  'use',       'up',       'too',
  'much',      'of',       'today.',
  'You',       'must',     'be',
  'the',       'change',   'you',
  'wish',      'to',       'see',
  'in',        'the',      'world.',
  'He',        'who',      'conquers',
  'himself',   'is',       'the',
  'mightiest', 'warrior.'
] */



/* 
const lyrics = 'Never let yesterday use up too much of today. You must be the change you wish to see in the world. He who conquers himself is the mightiest warrior.';
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
console.log(sentences);  
*/ 
/* Output: [
  'Never let yesterday use up too much of today',
  ' You must be the change you wish to see in the world',
  ' He who conquers himself is the mightiest warrior',
  ''
] */


/* 
Why Is the Last Element an Empty String?
This happens because the string ends with a '.'. When 'split()' encounters the delimiter at the end, it creates an empty string as the last element in the array.

If You Want to Remove the Empty String:
You can filter out the empty string using: 
*/


/* 
const filteredSentences = sentences.filter(sentence => sentence.trim() !== '');
console.log(filteredSentences); 
*/
/* Output:
[
  'Never let yesterday use up too much of today',
  'You must be the change you wish to see in the world',
  'He who conquers himself is the mightiest warrior'
]
*/



/* 
const lyrics = 'Never let yesterday use up too much of today. You must be the change you wish to see in the world. He who conquers himself is the mightiest warrior';
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
console.log(sentences); 
*/
/* Output: [
  'Never let yesterday use up too much of today',
  ' You must be the change you wish to see in the world',
  ' He who conquers himself is the mightiest warrior'
] */ 



/* 
const lyrics = 'Never let yesterday use up too much of today. You must be the change you wish to see in the world. He who conquers himself is the mightiest warrior';
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');
console.log(chars); 
*/
/* Output: [
  'N', 'e', 'v', 'e', 'r', ' ', 'l', 'e', 't', ' ', 'y', 'e',
  's', 't', 'e', 'r', 'd', 'a', 'y', ' ', 'u', 's', 'e', ' ',
  'u', 'p', ' ', 't', 'o', 'o', ' ', 'm', 'u', 'c', 'h', ' ',
  'o', 'f', ' ', 't', 'o', 'd', 'a', 'y', '.', ' ', 'Y', 'o',
  'u', ' ', 'm', 'u', 's', 't', ' ', 'b', 'e', ' ', 't', 'h',
  'e', ' ', 'c', 'h', 'a', 'n', 'g', 'e', ' ', 'y', 'o', 'u',
  ' ', 'w', 'i', 's', 'h', ' ', 't', 'o', ' ', 's', 'e', 'e',
  ' ', 'i', 'n', ' ', 't', 'h', 'e', ' ', 'w', 'o', 'r', 'l',
  'd', '.', ' ', 'H',
  ... 47 more items
] */



/* 
The '... 47 more' items in the output occurs because the console in some environments (like browsers or Node.js) truncates long arrays to make the output easier to read. It doesn't mean the items are missing—they're just not shown in the preview. The full array is still available in memory.

* How to View the Full Output

1. Access the Array Directly:
After running your code, you can click on the array in your console to expand it and view all its elements (if your environment supports it, like browser developer tools).

2. Use a Loop or 'console.log' Entirely:
To explicitly print all characters, you can use: 
chars.forEach(char => console.log(char));
This will print each character on a new line.

3. Use 'JSON.stringify' for Full Array Output:
Convert the array to a string to display it completely:
console.log(JSON.stringify(chars));

4. Limit the Array Preview in Code:
If the array is too large, you can slice it to preview a specific portion:
console.log(chars.slice(0, 50)); // Prints the first 50 characters

5. Inspect Programmatically:
Check the array's length to confirm the number of items:
console.log(chars.length);

The ... 47 more items is just a way for the environment to signal that the array is larger than the displayed preview, not that it's incomplete.
*/




/* 
const lyrics = 'Never let yesterday use up too much of today. You must be the change you wish to see in the world. He who conquers himself is the mightiest warrior';
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');
const partial = lyrics.slice(5, 8);
console.log(partial); 
*/
// Output: le



/* 
const lyrics = 'Never let yesterday use up too much of today. You must be the change you wish to see in the world. He who conquers himself is the mightiest warrior';
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');
const partial = lyrics.slice(5, 8);
console.log(partial);
const partial2 = lyrics.substring(5, 8);
console.log(partial2); 
*/
/* Output: 
 le
 le */



/* 
const lyrics = 'Never let yesterday use up too much of today. You must be the change you wish to see in the world. He who conquers himself is the mightiest warrior';
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');
const partial = lyrics.slice(5, 9);
console.log(partial);
const partial2 = lyrics.substring(5, 9);
console.log(partial2); 
*/
/* Output: 
let
let */



/* 
const lyrics = 'Never let yesterday use up too much of today. You must be the change you wish to see in the world. He who conquers himself is the mightiest warrior';
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');
const partial = lyrics.slice(5, 9);
console.log(partial);
const partial2 = lyrics.substring(5, 9);
console.log(partial2);

const lines = [
    'Never let yesterday use up too much of today',
    'You must be the change you wish to see in the world',
    'He who conquers himself is the mightiest warrior'
  ];
const newQuotes = lines.join(':');
console.log(newQuotes); 
*/
/* Output:
 let
 let
Never let yesterday use up too much of today:You must be the change you wish to see in the world:He who conquers himself is the mightiest warrior */




/* 
const lyrics = 'Never let yesterday use up too much of today. You must be the change you wish to see in the world. He who conquers himself is the mightiest warrior';
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');
const partial = lyrics.slice(5, 9);
console.log(partial);
const partial2 = lyrics.substring(5, 9);
console.log(partial2);

const lines = [
    'Never let yesterday use up too much of today',
    'You must be the change you wish to see in the world',
    'He who conquers himself is the mightiest warrior',
    'The greatest glory in living lies not in never falling, but in rising every time we fall'
  ];
const newQuotes = lines.join(':');
console.log(newQuotes); 
*/
/* Output:
 let
 let
Never let yesterday use up too much of today:You must be the change you wish to see in the world:He who conquers himself is the mightiest warrior:The greatest glory in living lies not in never falling, but in rising every time we fall */





/* const lines = [
    'Never let yesterday use up too much of today',
    'You must be the change you wish to see in the world',
    'He who conquers himself is the mightiest warrior',
    'The greatest glory in living lies not in never falling, but in rising every time we fall'
  ];
const newQuotes = lines.join('.');
console.log(newQuotes); */
// Output: Never let yesterday use up too much of today.You must be the change you wish to see in the world.He who conquers himself is the mightiest warrior.The greatest glory in living lies not in never falling, but in rising every time we fall



/* 
const lines = [
    'Never let yesterday use up too much of today',
    'You must be the change you wish to see in the world',
    'He who conquers himself is the mightiest warrior',
    'The greatest glory in living lies not in never falling, but in rising every time we fall'
  ];
const newQuotes = lines.join('. ');
console.log(newQuotes); 
*/
// Output: Never let yesterday use up too much of today. You must be the change you wish to see in the world. He who conquers himself is the mightiest warrior. The greatest glory in living lies not in never falling, but in rising every time we fall




const lines = [
    'never let yesterday use up too much of today',
    'you must be the change you wish to see in the world',
    'he who conquers himself is the mightiest warrior',
    'the greatest glory in living lies not in never falling, but in rising every time we fall'
  ];
const newQuotes = lines.join('. ');
console.log(newQuotes);
// Output: never let yesterday use up too much of today. you must be the change you wish to see in the world. he who conquers himself is the mightiest warrior. the greatest glory in living lies not in never falling, but in rising every time we fall