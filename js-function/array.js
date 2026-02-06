function sum(numbers){
    console.log(numbers);
    let sum = 0;
    for(const number of numbers){
        sum = sum + number;
    }
    return sum;
}

const nums = [43,32,43,454,65,12,56];
// const sum2 = sum(numbers);
console.log(sum(nums));