const generateList = require('./ListGenerator.js').generateList;
const timer = require('./Timer.js').timerClass;

function mergeSort(inputArray) {
    if(inputArray.length === 1){
        return inputArray; //already sorted, so do not need to complete.
    };

    const middle = Math.floor(inputArray.length / 2); //find the middle of the array
    const left = inputArray.slice(0,middle); //take the left portion of the array
    const right = inputArray.slice(middle); //take the right portion of the array
    
    return merge(mergeSort(left),mergeSort(right));
};

function merge(left,right){
    let results = [];
    let leftIndex = 0;
    let rightIndex = 0;// set index to the start of each array

    while(leftIndex < left.length && rightIndex < right.length){ //stop when we reach the last index of either array, in the meantime;

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

(function timeSort(){
    let startTime = timer.prototype.getStartTime();
    console.log(mergeSort(generateList(5000000)));
    let endTime = timer.prototype.getEndTime();   
    timer.prototype.timeTakenInMinutesSeconds(startTime,endTime);
})();



