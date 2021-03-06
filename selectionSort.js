const generateList = require('./listGenerator.js').generateList;
const timer = require('./timer.js').timerClass;

function selectionSort(inputArray) {
    let outputArray = [];
	while(inputArray.length > 0) {
		// Repeatedly push the smallest remaining element onto the output
		outputArray.push(popShortest(inputArray));
	}
	return outputArray;
};

function popShortest(inputArray) {
	let smallestIndex = 0;
	let smallestValue = inputArray[0];
	for (let i = 1; i < inputArray.length; i++) {
		// If the current element is smaller than the smallest seen so far...
		if (inputArray[i] < smallestValue) {
			// ... then we update our understanding of what the smallest is
			smallestIndex = i;
			smallestValue = inputArray[i];
		}
	}
	// Now we can safely remove the smallest from the input array
	inputArray.splice(smallestIndex, 1);
	// While returning the corresponding value ultimately for use in the output array
	return smallestValue;
};

(function timeSelectionSort(){
	let startTime = timer.prototype.getStartTime();
	console.log(selectionSort(generateList(50000)));
	let endTime = timer.prototype.getEndTime();
	timer.prototype.timeTakenInMinutesSeconds(startTime,endTime);
})();