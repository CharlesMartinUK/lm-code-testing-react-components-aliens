
// validate_species_name.ts
const validateReason : (reason : string) => string[] = (reason) => {
	// validation code here
	// needs to return an array of error messages
	// or an empty array if there aren't any
	
	const errors:string[] = []
	
	if(reason.length < 17) errors.push("Reason too short")
	if(reason.length > 153) errors.push("Reason too long")
	
	//no errors
	return errors
};

export default validateReason