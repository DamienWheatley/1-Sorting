let inputArray = [5,3,2,1,6,8,4,7,2,8,14,82];

console.log(inputArray.length);

function insertSort (inputArray) {
    let orderedArray = [];
    let leftMostInteger = getLeftMostInteger(inputArray);

}

function moveInteger (integerToMove, orderedArray) {
    var orderedArrayLength = orderedArray.length - 1;
    if(integerToMove > orderedArray[orderedArrayLength]){

    }
};

function getLeftMostInteger (inputArray) {
    leftMostInteger = inputArray.shift();    
    return leftMostInteger;
};

//insertSort(inputArray);