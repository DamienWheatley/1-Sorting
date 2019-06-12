//Hardcoded temporarily just to get it working.
let inputArray = [5,3,2,1,6,8,4,7,2,8,82,14];

console.log("UNSORTED: " + inputArray);

//Will eventually put a timer function in here - which will run asynchronous to the "moveSmallestInteger" function.
function selectionSort (inputArray) {
    moveSmallestInteger(inputArray);
};

function moveSmallestInteger (inputArray) {
    let referenceArray = inputArray.slice(0);
    let elementCount = -1;
    let inputArrayLength = inputArray.length;
    while(referenceArray.length !== 0 && elementCount < inputArrayLength){
        let smallestInteger = findSmallestInteger(referenceArray);
        for(i=0;i<=inputArray.length - 1;i++){
            if(inputArray[i] === smallestInteger && elementCount < inputArrayLength){
                elementCount++;
                let integerToSwap = inputArray[i];
                let integerBeingSwapped = inputArray[elementCount];
                inputArray[elementCount] = integerToSwap;
                inputArray[i] = integerBeingSwapped;
                console.log(inputArray);
            };
        };
    };
};

function findSmallestInteger (referenceArray) {
    let smallestInteger = Math.min.apply( Math,referenceArray);
    //removes smallest integer from "referenceArray" after finding it
    //otherwise it would constantly find the same number over and over.
    referenceArray.forEach(function(element,elementIndex) {
        if(element === smallestInteger){ //it's removing element 0, which contains 8 - which moves element 1 to element 0, but because it has already done element 0 it skips 8.
            referenceArray.splice(elementIndex,1);
            console.log(`Removing ${element} at position ${elementIndex}`)
        };
    });
    return smallestInteger;
};

selectionSort(inputArray);
console.log("SORTED?:  " + inputArray);