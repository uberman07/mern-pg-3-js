const friends = ['elon', 'Elon', 'ekon', 'elom', 'bill', 'mark', 'john'];
const sortedFriends = friends.sort();
console.log(sortedFriends);

const numbers = [4, 2, 1, 9, 6, 7, 8];
numbers.sort();
console.log(numbers);

// or we can do 

const numbersAsc = numbers.sort();
console.log(numbersAsc)

const nums = [4, 2, 1, 12, 11, 43, 9, 6, 7, 8];
// nums.sort(); //not working properly
const numsAsc = numbers.sort(function (a, b) {return a - b})
console.log(numsAsc);
