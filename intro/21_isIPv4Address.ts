function isIPv4Address(inputString: string): boolean {
// convert into an array of numbers    
    let a = inputString.split('.')    
    console.log(a)
// check if there's more than 4 elements after string conversion  
    if (a.length !== 4)   return false         
    for (let i = 0; i < a.length; i++)   {
// check if any element can be converted to a TRUE number  
        if ( (a[i] === '') || ( isNaN(+a[i]) ) )  return false 
// check if the number belongs to (0, 255)
        if ((+a[i] > 255) || (+a[i] < 0))   return false
// check if there's any leeding zeros
        if (a[i].length > 1 && a[i][0] === '0') return false
    }    
    return true;
}