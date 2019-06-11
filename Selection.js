let inputArray = [5,3,2,1,6,8,4,7,2,8,14,82];

console.log("UNSORTED: " + inputArray);

function selectionSort (inputArray) {
    moveSmallestInteger(inputArray);        
};

function moveSmallestInteger (inputArray) {
    let referenceArray = inputArray.slice(0);
    let elementCount = -1;
    while(referenceArray != 0){
        let smallestInteger = findSmallestInteger(referenceArray);
        for(i=0;i<=inputArray.length - 1;i++){
            if(inputArray[i] === smallestInteger){
                elementCount++
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
    for(j=0;j<=referenceArray.length;j++){
        if(referenceArray[j] === smallestInteger){
            referenceArray.splice(j,1);
        };
    };
    console.log(smallestInteger);
    return smallestInteger;
};

selectionSort(inputArray);
console.log("SORTED?:  " + inputArray);