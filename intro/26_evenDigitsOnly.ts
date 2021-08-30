function evenDigitsOnly(n: number): boolean {    
    return n.toString().split('').every(x => +x%2 === 0);
}

// Of course you can use some() or find(), which are very similar.