function makeArrayConsecutive2(statues: number[]): number   {
    let sorted: number[] = statues.sort((a, b) => a - b);
    let full = [];
    for (let i = sorted[0]; i < sorted[sorted.length]; i++)    {
        full.push(i);
    }
    return full.length - sorted.length;
}