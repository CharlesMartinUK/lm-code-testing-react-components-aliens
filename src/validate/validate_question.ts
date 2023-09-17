

// validate_species_name.ts
const validateQuestion : (question : string) => string[] = (question) => {
	// validation code here
	// needs to return an array of error messages
	// or an empty array if there aren't any
	
	const errors:string[] = []
	
		
	if(question != "4")
		errors.push("invalid answer")
	
	
	//no errors
	return errors
};

export default validateQuestion