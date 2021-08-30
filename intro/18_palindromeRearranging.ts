function palindromeRearranging(inputString: string): boolean {
let counts = {};
    for(var i = 0; i < inputString.length; i++){
         counts[inputString[i]] = ( counts[inputString[i]] || 0) + 1;
    }
    let oddCOunt = 0;
    for(var p in counts){
        let num = counts[p];
        if(num % 2 == 1){
            oddCOunt++;
            if(oddCOunt >=2) return false;
        }
    }
    return true;
}