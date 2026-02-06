const today = new Date();
console.log(today);

const date = new Date('2063-12-11')
console.log(date);

console.log(date.getMonth())
console.log(date.getDay())

const specificDate = new Date(2091, 0, 30);
console.log(specificDate)
specificDate.setMonth(10);
console.log(specificDate.toLocaleString('en-GB'));