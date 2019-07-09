const generateList = require('./ListGenerator.js').generateList;
const importTimer = require('./timer.js');

module.exports.merge = function merge(left,right){
    let results = [];
    let leftIndex = 0;
    let rightIndex = 0;// set index to the start of each array

    while(leftIndex < left.length && rightIndex < right.length){ //stop when we reach the last index of either array, in the meantime;
        if(typeof(left[leftIndex]) !== typeof(0)){
            left.splice(leftIndex,1);
        } else if(typeof(right[rightIndex]) !== typeof(0)){
            right.splice(rightIndex,1);
        };

        if(left[leftIndex] < right[rightIndex]){ //if left index value is smaller
            results.push(left[leftIndex]); //push it to results array
            leftIndex++; //and move onto the next index in the array
        } else {
            results.push(right[rightIndex]); //if left index value is bigger, push right index value to results array
            rightIndex++; //and move onto the next index in the array
        };
        
    };
    return results.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)); //once we've got to the end of the array we can just concatenate the remaining indexes to the end.
};

module.exports.mergeSort = function mergeSort(inputArray){
    if(inputArray.length === 1){
        return inputArray; //already sorted, so do not need to continue.
    };

    const middle = Math.floor(inputArray.length / 2); //find the middle of the array
    const left = inputArray.slice(0,middle); //take the left portion of the array
    const right = inputArray.slice(middle); //take the right portion of the array
    
    return merge(mergeSort(left),mergeSort(right));
};

function timeMergeSort(){
    let timer = new importTimer.timerClass();
    timer.setStart();
    console.log(mergeSort(generateList(10000))); //Generates the list and sorts
    timer.setEnd();
    console.log(timer.getStringReport());
};