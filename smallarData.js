function minInarray(numbers){
    console.log('array insite the array', numbers);
    let smollar = numbers[0];
    for(let i =words.length-1; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        console.log(element);
        if(element < smollar){
            smollar = element;
        }
    }

    return smollar;

}

const smollarInfo = [167, 190,120,165,137];

const lowest = minInarray(smollarInfo);
console.log('data of smallar :',lowest );


