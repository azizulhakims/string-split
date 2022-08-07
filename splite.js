const lyrics = 'hello yes this is azizul hakim. i am from Gazipur. i have know how to manage computer network also i explor web devlopment.'

const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');
console.log(parts);
console.log(sentences);
console.log(chars);

const partial = lyrics.slice(5, 8);
console.log(partial);

const partial2 = lyrics.substring(15, 20);
console.log(partial2);

const lines = [
    'yes i can manage all network', 'also windows and script ','bache network. my name is azizul hakim.',
    'rong jomece onek kicor'
];
const newBoi = lines.join(', ');
console.log(newBoi);
