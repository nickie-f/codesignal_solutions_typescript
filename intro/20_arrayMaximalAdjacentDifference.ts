function arrayMaximalAdjacentDifference(a: number[]): number {
    let comp: number[] = [];
    for (let i = 0; i < a.length -1; i++)  {
        comp.push(Math.abs(a[i+1] - a[i]));
    }
    return Math.max(...comp)
}