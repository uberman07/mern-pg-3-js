const numbers = [1, 2, 3, 4, 5, 6, 7]
console.log(numbers);
// numbers.reverse();
// console.log(numbers);

const reversed = [];

for(const num of numbers){
    // console.log(numbers.reverse())
    // console.log(num);
    reversed.unshift(num);
}
console.log(reversed)

const rev=[]
for(let i = 0; i<numbers.length; i++){
    const num = numbers[i];
    rev.unshift(num)
}

// reverse loop
const revrev = []
for(let i = numbers.length-1; i>= 0; i--){
    const num = numbers[i];
    console.log(num);
    revrev.push(num);
}
console.log(revrev)