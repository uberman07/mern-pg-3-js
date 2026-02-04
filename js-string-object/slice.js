const address = 'andorKilla';
const part = address.slice(2,6);
// console.log(part);

const sentence = 'I am a hardworking person.';
console.log(sentence.split());
console.log(sentence.split(''));
console.log(sentence.split(' '));
console.log(sentence.split('a'));

const friends  = 'safty, rahat, zubair, tasin, hasan, nur, allam, fahad';
const frns = friends.split(',');
console.log(frns);

const elite  = ['safty', 'rahat', 'zubair', 'tasin', 'hasan', 'nur', 'allam', 'fahad' ] ;
console.log(elite);
console.log(elite.join());
console.log(elite.join('|'));

const first = 'safty';
const last = 'obaid';

const fullname = first + ' ' + last;
const fullName2 = first.concat(' ').concat(last);
console.log(fullName2);
console.log(last.includes('d'));