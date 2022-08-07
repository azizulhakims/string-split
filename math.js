const result = Math.pow(3, 8);
console.log(result);


const num1 = 25;
const num2 = 29;

const gap = Math.abs(num1-num2);

console.log(gap);

if( gap<5){
    console.log('yes you can create friend');
}

else{
    console.log('yes you can not friend')
}


const number = 2.34342

const fullNumber = Math.round(number);

console.log(fullNumber);

const result2 = Math.ceil(2.00001);
console.log(result2);
const result3 = Math.floor(2.00001);
console.log(result3);


// Rendom

// console.log(Math.random());

for(let i=0; i<20; i++){
    const random = Math.round(Math.random()*6);
    console.log(random);
}


