const removeFromArray = function(arr, ...value) {
    for (const elements of value) {
    let index = arr.length -1;
    for (;index >= 0; index--) {
        if (value.includes(arr[index])) {
        arr.splice(index, 1);
    }
    }
}
    return arr;
}

console.log(removeFromArray([1, 2, 2, 3, 4, 5, 6, "john", "johnny", "john"], 3, 2,"johdded"));


// Do not edit below this line
/*
So i need to make a function that can take two arguements


*/

module.exports = removeFromArray;
