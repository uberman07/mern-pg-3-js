function noDuplicate(array){
    const unique = [];
    for(const i of array){
        if(unique.includes(i) === false){
            unique.push(i);
        }
    }
    return unique;
}


const biraniKhor = ['abul', 'babul', 'kabul', 'sabul', 'abul', 'sabul'];

const numbers = [1,2,3,4,5,56,7,8,2,3,4,5]

const un1= noDuplicate(biraniKhor);
const un2 = noDuplicate(numbers);

console.log(un1);
console.log(un2);