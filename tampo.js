let first = 5;
let second = 7;
console.log(first, second);
//wrong approace
// first = second;
// second = first;

//approace 1
// const temp = first;
// first = second;
// second = temp;

//approach: 2 -- destrusturing
[first, second] = [second, first];


console.log(first, second);
