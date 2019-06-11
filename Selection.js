let input = [5,3,2,1,6,8,4,7,8];

console.log("UNSORTED: " + input);

function selectionSort (input) {
    moveSmallestInteger(input);        
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
    return smallestInteger;
};

function moveSmallestInteger (input) {
    let referenceArray = input.slice(0);
    let elementCount = -1;
    while(referenceArray != 0){
        let smallestInteger = findSmallestInteger(referenceArray);
        for(i=0;i<=input.length - 1;i++){
            if(input[i] === smallestInteger){
                elementCount++
                let integerToSwap = input[i];
                let integerBeingSwapped = input[elementCount];
                input[elementCount] = integerToSwap;
                input[i] = integerBeingSwapped;
            };
        };
    };
};

selectionSort(input);
console.log("SORTED?:  " + input);