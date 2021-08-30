function almostIncreasingSequence (s: number): boolean	{
	let count = 0;	

// Check if there are ANY adjacent numbers in the wrong order:
	for (let i = 0; i < s.length -1; i++)	{
		if (s[i] >= s[i+1]) 
			count++;	
// If there are more than two pairs of numbers wrongly placed:
			if (count > 1)	
				return false;
// If after "removing", there are still wrongly placed numbers:
			if ( s[i] >= s[i+2] && s[-1] >= s[i+1] )	
				return false;
	}
	return true;	
}