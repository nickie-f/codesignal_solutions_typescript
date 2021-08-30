function arrayChange(a: number[]): number {
    let min: number = 0;
    for (let i: number = 0; i < a.length-1; i++)  {
        while (a[i] >= a[i+1])  {                  
            a[i+1]++;
            min++;
        }
    }
    return min;           
}