

// validate_species_name.ts
const validateQuestion : (answer : string) => string[] = (answer) => {
	// validation code here
	// needs to return an array of error messages
	// or an empty array if there aren't any
	
	const errors:string[] = []
	
		
	if(answer !== "4")
		errors.push("Invalid answer")
	
	
	//no errors
	return errors
};

export default validateQuestion