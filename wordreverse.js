function reverseWords(str){
    const words = str.split(' ');
    // console.log(words);
    const result = [];
    for(let i = words.lenght-1; i>=0; i--){
        const element = words[i];
        result.push(element);
    }
    // return result;
    // console.log(result);
    const reversed = result.join('  ');
    return reversed;
}





const myString = 'I am a good boy';
reverseWords(myString);

console.log(myString);
console.log(reversed);
