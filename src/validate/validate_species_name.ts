 

import { containsNumbers, containsSpecialCharacters } from './validate_string'

// validate_species_name.ts
const validateSpeciesName : (speciesName : string) => string[] = (speciesName) => {
	// validation code here
	// needs to return an array of error messages
	// or an empty array if there aren't any
	
	const errors:string[] = []
	
	if(speciesName.length < 3) errors.push( "Species name too short")
	if(speciesName.length > 23) errors.push("Species name too long")
	if(containsNumbers(speciesName)) errors.push("Species name must contain no numbers")
		
	if(containsSpecialCharacters(speciesName)) 
		errors.push("Species name must not contain any special characters")
	
	//no errors
	return errors
};

export default validateSpeciesName