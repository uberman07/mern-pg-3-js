function oddAverage(numbers){
    const odds = [];
    for(const number of numbers){
        if(number % 2 === 1){
            odds.push(number);
        }
    }
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const len = odds.length;
    return sum / len;
}

const numbers = [12,21,32,334,13,423,523,53,28,11];
const avg = oddAverage(numbers);
console.log(avg);