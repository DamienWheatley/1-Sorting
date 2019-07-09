const generateList = require('./listGenerator.js').generateList;
const importTimer = require('./timer.js');

module.exports.insertSort = function(inputArray){
    for(i=0;i<inputArray.length;i++){ //Iterates through inputArray ...
        let valueToMove = inputArray[i]; // ... and selects the value to move.
        let j = i - 1; //Selects the value to the left of the valueToMove
        if(typeof(valueToMove) !== typeof(0)){
            inputArray.splice(i,1);
            valueToMove = inputArray[i];
        };
        while(j >= 0 && inputArray[j] > valueToMove){ //All the time the value to the left of the value to move is greater ...
            inputArray[j + 1] = inputArray[j]; // ... move the value before to the right (moving the "valueToMove to the left")
            j = j - 1; //Changes 'j' to the next number to the left and checks if value to move is greater until it's no longer greater.  
        }
        inputArray[j + 1] = valueToMove; //Once the valueToMove is bigger than the number to the left, set to value of "valueToMove".
    }
    return inputArray;
}

timeInsertSort = function() {
    let timer = new importTimer.timerClass();
    timer.setStart();
    console.log(insertSort(generateList(100000)));
    timer.setEnd();
    console.log(timer.getStringReport());
};