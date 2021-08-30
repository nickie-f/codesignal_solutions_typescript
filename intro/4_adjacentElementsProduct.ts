function adjacentElementsProduct(arr: number[]): number {
	let result = arr[0] * arr[1];
    for (let i = 1; i < arr.length - 1; i++) {
        let temp = arr[i] * arr[i+1];
        if (temp > result) {
            result = temp;
            }
    }
    return result;
}