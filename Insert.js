const generateList = require('./ListGenerator.js').generateList;
const timer = require('./Timer.js').timerClass;

function insertSort(inputArray){
    for(i=1;i<inputArray.length;i++){ //Iterates through inputArray ...
        let valueToMove = inputArray[i]; // ... and selects the value to move.
        let j = i - 1; //Selects the value to the left of the valueToMove
        while(j >= 0 && inputArray[j] > valueToMove){ //All the time the value to the left of the value to move is greater ...
            inputArray[j + 1] = inputArray[j]; // ... move the value before to the right (moving the "valueToMove to the left")
            j = j - 1; //Changes 'j' to the next number to the left and checks if value to move is greater until it's no longer greater.  
        }
        inputArray[j + 1] = valueToMove; //Once the valueToMove is bigger than the number to the left, set to value of "valueToMove".
    }
    return inputArray;
}

(function timeInsertSort () {
    let startTime = timer.prototype.getStartTime();
    console.log(insertSort(generateList(100000)));
    let endTime = timer.prototype.getEndTime();
    timer.prototype.timeTakenInMinutesSeconds(startTime,endTime);
})();