function isLucky(n: number): boolean {
    let arr = n.toString().split('');   
    let f = 0;                          
    let b = 0;                          
    
    for (let i = 0; i < arr.length/2; i++) { 
        f += +arr[i];   
        b += +arr[arr.length-i-1];
    }
    
    if (f == b)  {
        return true;
    }    
    return false;
}