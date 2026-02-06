const disha = 45;
const salman = 60;
const jim = 56;

if(jim > disha && jim > salman){
    console.log('jim is max');
}
else if(disha > jim && disha >> salman){
    console.log('disha is max')
}
else{
    console.log('salman is max');
}

const max = Math.max(disha, salman, jim);
console.log(max);