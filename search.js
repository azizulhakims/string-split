const lyrics  ='Tumi bondhu kala pakhi ami jeno ki. bosonto kala tomi bolte pari ni'

const searchString = 'Pakhi';
// const doesExist = lyrics.includes('Pakhi');

const lyricsLowerCase = lyrics.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);

const doesExistOneLine = lyrics.toLocaleLowerCase().includes(searchString.toLocaleLowerCase());

// console.log(doesExist);


//indexof
console.log(lyrics.indexOf('kailla'));
console.log(lyrics.indexOf('Tumi'));


if(lyrics.indexOf('sada') !== -1){
    console.log ('exists inside the string')
}
else{
    console.log('cannot find it');
}

//startswith

console.log(lyrics.startsWith('2mi'))

