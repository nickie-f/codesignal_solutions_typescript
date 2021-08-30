function alternatingSums(a: number[]): number[] {
    let oddtotal: number = 0;
    let eventotal: number = 0;
    for (let i = 0; i < a.length; i++)    {
        if (i%2 == 0)   {
            oddtotal += a[i];
        }    
        else    {
            eventotal += a[i]
        }
    }
    let result: number[] = [oddtotal, eventotal];
    return result;
}