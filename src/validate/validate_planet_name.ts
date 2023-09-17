import { containsSpecialCharacters } from './validate_string'

// validate_species_name.ts
const validatePlanetName : (planetName : string) => string[] = (planetName) => {
	// validation code here
	// needs to return an array of error messages
	// or an empty array if there aren't any
	
	const errors:string[] = []
	
	if(planetName.length < 2) errors.push( "Planet name too short")
	if(planetName.length > 19) errors.push("Planet name too long")
		
	if(containsSpecialCharacters(planetName)) 
		errors.push("Planet name must not contain any special characters")
	
	//no errors
	return errors
};

export default validatePlanetName