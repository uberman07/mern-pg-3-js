function evenSizedString(str){
    const size = str.length;
    if(size %2 === 0){
        console.log('even size');
        return true;
    }
    else{
        console.log('odd size');
        return false;
    }
    console.log(str, size);
}

evenSizedString('Dhaka');

function doubleOrTriple(number , double){
    if(double){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}

console.log(doubleOrTriple(4, true));
console.log(doubleOrTriple(4, false));

function numberElem(numbers){
    const len = numbers.length;
    return len;
}
console.log(numberElem([123,34,23245,546,32,12,34,53]))

function getAge(person){
    const age = person.age;
    return age;
}
const student = {
    name: 'safty',
    age: 22
}
console.log(getAge(student));