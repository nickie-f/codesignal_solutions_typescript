function commonCharacterCount(s1: string, s2: string): number {
	let count = 0;
	for (let i = 0; i < s1.length; i++)	{
		if (s2.indexOf(s1[i]) !== -1)	{
			s2 = s2.replace(s1[i], '');
			count++;
		}
	}
	return count;
}	