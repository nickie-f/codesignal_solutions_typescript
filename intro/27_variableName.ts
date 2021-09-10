	function variableName (name: string): boolean	{
		if name.match(/^[a-z_A-Z][a-z_0-9_A-Z]*$/)	return true
		return false
	}
