//Hardcoded temporarily just to get it working.
let inputArray = [5,3,2,1,6,8,4,7,2,8,14,82];

console.log("UNSORTED: " + inputArray);

//Will eventually put a timer function in here - which will run asynchronous to the "moveSmallestInteger" function.
function selectionSort (inputArray) {
    moveSmallestInteger(inputArray);        
};

function moveSmallestInteger (inputArray) {
    let referenceArray = inputArray.slice(0);
    let elementCount = -1;
    let inputArrayLength = inputArray.length;
    while(referenceArray.length !== 0 && elementCount <= inputArrayLength - 1){
        let smallestInteger = findSmallestInteger(referenceArray);
        for(i=0;i<=inputArray.length - 1;i++){
            if(inputArray[i] === smallestInteger){
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
        if(element === smallestInteger){
            referenceArray.splice(elementIndex,1);
        };
    });
    return smallestInteger;
};

selectionSort(inputArray);
console.log("SORTED?:  " + inputArray);