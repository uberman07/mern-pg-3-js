const heights = [12,32,23,45,34,33,56];

function getMax(heights){
    let max = heights[0];
    for(const height of heights){
        if(height > max){
            max = height;
        }
    }
    return max;
}

const max = getMax(heights);
console.log(max);