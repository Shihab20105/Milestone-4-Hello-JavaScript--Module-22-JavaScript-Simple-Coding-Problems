/*                          22-2 Apply Search includes, indexOf, startswith, endswith */
/* 
const lyrics = 'Never let yesterday use up too much of today. You must be the change you wish to see in the world. He who conquers himself is the mightiest warrior.';

const doesExist = lyrics.includes('yesterday');
console.log(doesExist); 
*/
// Output: true


/* 
const lyrics = 'Never let yesterday use up too much of today. You must be the change you wish to see in the world. He who conquers himself is the mightiest warrior.';

const doesExist = lyrics.includes('yesterdays');
console.log(doesExist); 
*/
// Output: false


/* 
const lyrics = 'Never let yesterday use up too much of today. You must be the change you wish to see in the world. He who conquers himself is the mightiest warrior.';

const doesExist = lyrics.includes('Yesterday');   // Case sensitive
console.log(doesExist); 
*/
// Output: false



/* 
const lyrics = 'Never let yesterday use up too much of today. You must be the change you wish to see in the world. He who conquers himself is the mightiest warrior.';

const searchString = 'Yesterday';
const doesExist = lyrics.includes(searchString);
console.log(doesExist); 
*/
// Output: false


/* 
const lyrics = 'Never let yesterday use up too much of today. You must be the change you wish to see in the world. He who conquers himself is the mightiest warrior.';

const searchString = 'Yesterday';
const doesExist = lyrics.includes(searchString);
console.log(doesExist); 
*/
// Output: false


/* 
const lyrics = 'Never let Yesterday use up too much of today. You must be the change you wish to see in the world. He who conquers himself is the mightiest warrior.';

const searchString = 'yesterday';
const lyricsLowerCase = lyrics.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchString);
console.log(doesExist); 
*/
// Output: true


/* 
const lyrics = 'Never let Yesterday use up too much of today. You must be the change you wish to see in the world. He who conquers himself is the mightiest warrior.';

const searchString = 'YeSterday';
const lyricsLowerCase = lyrics.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchString);
console.log(doesExist); 
*/
// Output: false



/* 
const lyrics = 'Never let Yesterday use up too much of today. You must be the change you wish to see in the world. He who conquers himself is the mightiest warrior.';

const searchString = 'YeSterday';
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
console.log(doesExist); 
*/
// Output: true



/* 
const lyrics = 'Never let Yesterday use up too much of today. You must be the change you wish to see in the world. He who conquers himself is the mightiest warrior.';

const searchString = 'YeSterday';
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
const doesExistOnline = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExist);
console.log(doesExistOnline); 
*/
/* Output:
true
true */



/* -------------------------------------------------------------------------------------------------------------------------- */


/*                          IndexOf */

/* 
const lyrics = 'Never let Yesterday use up too much of today. yesterday is history. Tomorrow is mystery. You must be the change you wish to see in the world. He who conquers himself is the mightiest warrior.';

const searchString = 'YeSterday';
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
const doesExistOnline = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(lyrics.indexOf('yesterday')); 
*/
//Output: 46



/* 
const lyrics = 'Never let Yesterday use up too much of today. yesterday is history. Tomorrow is mystery. You must be the change you wish to see in the world. He who conquers himself is the mightiest warrior.';

const searchString = 'YeSterday';
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
const doesExistOnline = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(lyrics.indexOf('yesterdays')); 
*/
//Output: -1



/* 
const lyrics = 'Never let Yesterday use up too much of today. yesterday is history. Tomorrow is mystery. You must be the change you wish to see in the world. He who conquers himself is the mightiest warrior.';

const searchString = 'YeSterday';
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
const doesExistOnline = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(lyrics.indexOf('yesterdays'));
console.log(lyrics.indexOf('Never')); 
*/
/* Output:
-1
0 */



/* 
const lyrics = 'Never let Yesterday use up too much of today. yesterday is history. Tomorrow is mystery. You must be the change you wish to see in the world. He who conquers himself is the mightiest warrior.';

const searchString = 'YeSterday';
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
const doesExistOnline = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(lyrics.indexOf('yesterdays'));
console.log(lyrics.indexOf('Never'));

if(lyrics.indexOf('history') !== -1){
    console.log('Exists inside the string');
}
else{
    console.log('Can not find it');
} 
*/
/* Output:
-1
0
Exists inside the string */




/* 
const lyrics = 'Never let Yesterday use up too much of today. yesterday is history. Tomorrow is mystery. You must be the change you wish to see in the world. He who conquers himself is the mightiest warrior.';

const searchString = 'YeSterday';
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
const doesExistOnline = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(lyrics.indexOf('yesterdays'));
console.log(lyrics.indexOf('Never'));

if(lyrics.indexOf('historyee') !== -1){
    console.log('Exists inside the string');
}
else{
    console.log('Can not find it');
} 
*/
/* Output:
-1
0
Can not find it */



/* -------------------------------------------------------------------------------------------------------------------------- */

/*                          startWith */


/* 
const lyrics = 'Never let Yesterday use up too much of today. yesterday is history. Tomorrow is mystery. You must be the change you wish to see in the world. He who conquers himself is the mightiest warrior.';

const searchString = 'YeSterday';
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
const doesExistOnline = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(lyrics.indexOf('yesterdays'));
console.log(lyrics.indexOf('Never'));

if(lyrics.indexOf('historyee') !== -1){
    console.log('Exists inside the string');
}
else{
    console.log('Can not find it');
}

console.log(lyrics.startsWith('Never')); 
*/
/* Output:
-1
0
Can not find it
true */




/* 
const lyrics = 'Never let Yesterday use up too much of today. yesterday is history. Tomorrow is mystery. You must be the change you wish to see in the world. He who conquers himself is the mightiest warrior.';

const searchString = 'YeSterday';
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
const doesExistOnline = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(lyrics.indexOf('yesterdays'));
console.log(lyrics.indexOf('Never'));

if(lyrics.indexOf('historyee') !== -1){
    console.log('Exists inside the string');
}
else{
    console.log('Can not find it');
}

console.log(lyrics.startsWith('9ever')); 
*/
/* Output:
-1
0
Can not find it
false */



/* -------------------------------------------------------------------------------------------------------------------------- */

/*                          endsWith */

const fileName = 'MyBioData.pdf';
const otherFile = 'MyPic.png';
fileName.endsWith('.pdf')
