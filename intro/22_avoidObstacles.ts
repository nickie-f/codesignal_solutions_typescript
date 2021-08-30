function avoidObstacles(a: number[]): number {
    a.sort((a,b) => a - b);
    let min: number = 1;
    let step: number = 0;
    while (step < a[a.length -1])   {           
        step += min;    
        for (let i = 0; i < a.length; i++)  {
            if (step === a[i])  {
                step = 0;
                min++;
            }   
        }    
    }
    return min;
}
/* Note that this problem can also be solved with fewer lines of code 
using the Javascript built-in arrar methods: some(), find() and every()
*/