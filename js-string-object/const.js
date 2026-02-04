const school = 'Notre Dame College Dhaka';
console.log(school)
console.log(school.toLocaleLowerCase());
console.log(school.toUpperCase());
// case sensitive

const sub = 'chemistry';
const book = 'ChemisTry';

if(sub.toLowerCase() === book.toLowerCase()){
    console.log('I am reading');
}
else{
    console.log('portesi na');
}

const drink = 'water';
const liquid = '   water  ';

if(drink === liquid.trim()){
    console.log(
        'pani khabo'
    );
}
else{
    console.log(
        'khabo na'
    );
}