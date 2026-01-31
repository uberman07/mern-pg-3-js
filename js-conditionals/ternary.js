// ternary = three parts

//  condition ? do when true : do when false 
// const age = 110;
// age >= 18 ? console.log("vote dio") : console.log("ghumao")

let price = 500;
const isLeader = true;

if(isLeader === true){
    price = 0;
}
else{
    price+=100;
}

// console.log(price)

price = isLeader === true ? 0 : price + 100;

price = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 100;

console.log(price)
