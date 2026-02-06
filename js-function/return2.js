function add(num1, num2){
    const total = num1 + num2;
    return total;
}

const bill = add(5, 10);

function add2(num1, num2){
    return num1 + num2;
}

const bill2 = add2(5, 10);

console.log(bill, bill2);

// arrow function 

const add3 = (num1, num2) => num1 + num2;

const bill3 = add3(4,6);
console.log(bill3);
