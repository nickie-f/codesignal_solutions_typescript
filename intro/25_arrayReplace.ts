function arrayReplace(i: number[], e: number, s: number): number[] {
    return i.map( x => x === e? s: x)
}

/* Note: Of course we can solve it using only an If statement wrapped in a For loop. 
But I guess the purpose of this exercise and later ones is for us to practice array methods. 
Hence the solution
*/