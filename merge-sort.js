function mergeSort(array) {
	// console.log('array', array)
	let left, right;
	if (array.length === 0) {
		return undefined;
	} else if (array.length === 1) {
		return array
	} else if (array.length > 1) {
		left = array.splice(0, Math.round(array.length / 2));	
		right = array;

		console.log('1', "L:", left, ", R:", right);

		 left = mergeSort(left)
		 right = mergeSort(right)

		console.log('2', "L:", left, ", R:", right);
	
		let sortedArray = [];
		
		while(left.length || right.length) {
			// console.log('3', "L:", left, ", R:", right);
			if (!left.length) {
				sortedArray = sortedArray.concat(right);
				right = [];
			} else if (!right.length) {
				sortedArray = sortedArray.concat(left);
				left = [];
			} else if (left[0] < right[0]) {
				sortedArray.push(left.shift());
			} else {
				sortedArray.push(right.shift());
			};
		};
	
		// console.log('sortedArray', sortedArray)
		return sortedArray;
	};

};


// console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
// console.log(mergeSort([105, 79, 100, 110]));
console.log(mergeSort([3, 6, 4, 1, 2, 5, 0]));
