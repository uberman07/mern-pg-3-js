const numbers = [12, 22, 33, 44, 55, 66, 77, 88, 99];

// console.log(numbers);
// console.log(typeof numbers);

const friends = ['abul', 'babul', 'kabul'];
const passed = [true, false, true, true, false];
const mixedArray = [213, 'safty', 'afifa', 434.343];

// console.log(numbers.length);

// console.log(numbers[4]);

const fourth = numbers[3];

// console.log(fourth);

numbers[4] = 999;
// console.log(numbers)

const ages=[];
ages.push(12);
ages.push(23, 34, 34, 45, 345);
// console.log(ages);

friends.push('namaz');
const out1 = friends.pop();
// console.log(friends);
const out2 = friends.pop();
// console.log(friends);

// console.log(out1, out2);
console.log(friends);
friends.shift();
console.log(friends);

friends.unshift('ghuami');
console.log(friends);

console.log(friends.includes('ghuami'));

if(friends.includes('ghuami')){
    console.log('party');
}
else{
    console.log('slep'
    );
}

console.log(friends.indexOf('ghuami'));
console.log(friends.indexOf('tomato'));

