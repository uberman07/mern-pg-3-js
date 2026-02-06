const mobiles = [
    {name : 'Samsung', price : 70000, camera : '12mp', color: 'black'},
    {name : 'xiaomi', price : 25000, camera : '12mp', color: 'black'},
    {name : 'Realme', price : 23000, camera : '12mp', color: 'black'},
    {name : 'Iphone', price : 100000, camera : '12mp', color: 'black'},
    {name : 'Oppo', price : 20000, camera : '12mp', color: 'black'},
    {name : 'Nokia', price : 10000, camera : '12mp', color: 'black'}
]

function cheapestObject(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price ){
            min = phone;
        }
    }
    return min;
}

const cheap = cheapestObject(mobiles)
console.log(cheap);