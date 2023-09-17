import { numbersOnly } from './validate_string'

// validate_species_name.ts
const validateNumberOfBeings : (numberOfBeings : string) => string[] = (numberOfBeings) => {
	// validation code here
	// needs to return an array of error messages
	// or an empty array if there aren't any
	
	const errors:string[] = []
	
		
	if(numbersOnly(numberOfBeings))  {
		
		if(parseInt(numberOfBeings) < 1000000000)
			errors.push("number of beings must be at least 1000000000")
	}
	else
		errors.push("Number of beings must be numbers only")
	
	
	//no errors
	return errors
};

export default validateNumberOfBeings