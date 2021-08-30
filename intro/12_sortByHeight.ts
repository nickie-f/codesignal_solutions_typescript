function sortByHeight(a: number[]): number[] {

    let temp = a.filter(x => (x > 0)).sort((a,b) => a - b);
    
    return a.map(x => 
    {
        if (x > 0)  {                       
            return temp.shift();           
        }        
        return -1;
    }
    )
}