const generateList = require('./ListGenerator.js').generateList;

function mergeSort(inputArray) {
    if(inputArray.length === 1){
        return inputArray; //already sorted, so do not need to complete.
    };

    const middle = Math.floor(inputArray.length / 2);
    const left = inputArray.slice(0,middle);
    const right = inputArray.slice(middle);
    
    return merge(mergeSort(left),mergeSort(right));
};

function merge(left,right){
    let results = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){

        if(left[leftIndex] < right[rightIndex]){
            results.push(left[leftIndex]);
            leftIndex++;
        } else {
            results.push(right[rightIndex]);
            rightIndex++;
        };
    };
    return results.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

console.log(mergeSort(generateList(10)));