function depositProfit(d: number, r: number, t: number): number {
    let i = 0;
    while (d < t)  {
        d *= 1+ r/100
        i++
    }
    console.log(d)
    return i
}