const absoluteValuesSumMinimization = (a: number[]): number =>
    a.length %2 === 0 ? a[a.length/2 - 1] : a[(a.length -1) /2]