function matrixElementsSum (m: number[][]): number	{

    let sum = 0;

	for (let col = 0; col < m[0].length; col++) {

	    for (let row = 0; row < m.length; row++)    {
	    	
	        if (m[row][col] == 0)  {
	            break;
	        }
	        else    {
	            sum += m[row][col];
	           
	        }
	    }    
	}
	return sum;
}