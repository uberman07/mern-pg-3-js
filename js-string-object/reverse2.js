const hi = 'I am learning web dev';
let reverse = '';
for(let i = 0; i< hi.length; i++){
    console.log(i);
    console.log(hi[i]);
    const letter = hi[i];
    reverse = letter + reverse;
}
console.log(reverse);