function inchToFeet(inch){
    const feet = inch/12;
    const feetNum = parseInt(feet);
    const feetRem = inch % 12;
    const result = feetNum + ' feet ' + feetRem + ' inches ';
    return result;
}

const safty = inchToFeet(233);
console.log(safty);