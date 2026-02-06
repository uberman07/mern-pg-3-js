function woodQuantity(chair, table, bed){
    const perChair = 3;
    const perTable = 5;
    const perBed = 10;

    const allChair = perChair * chair;
    const allTable = perTable * table;
    const allBed = perBed * bed;
    const totalWood = allChair + allTable + allBed;
    return totalWood;
}

const wood = woodQuantity(3,4,5);
console.log(wood);