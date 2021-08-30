// Naive
function allLongestStrings(arr: string[]): string[] {
	let max: number = arr[0].length;
	let result: string = []

	for (let i = 0; i < arr.length; i++)
		if (arr.[i].length === max)
			result.push(arr[i])
		if (arr[i].length > max)	{
			max = arr[i].length;
			result = arr[i];
		}
	return result;
}	

// Using filter() and map()
function allLongestStrings(inputArray) {
    return inputArray.filter(x => x.length === Math.max(...inputArray.map(x => x.length)));}
