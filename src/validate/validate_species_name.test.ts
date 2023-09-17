import validateSpeciesName from './validate_species_name'

test('SpeciesNameValidation valid name test', () =>  {

	expect(validateSpeciesName("earth")).toHaveLength(0)
})

test('SpeciesNameValidation too short name test', () =>  {
	//must be 3 or more
	expect(validateSpeciesName("qt")).toHaveLength(1)
})


test('SpeciesNameValidation too long name test', () =>  {
	// no more than 27
	expect(validateSpeciesName("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")).toHaveLength(1)
})

test('SpeciesNameValidation special character name test', () =>  {

	expect(validateSpeciesName("earth for $ale")).toHaveLength(1)
})

test('SpeciesNameValidation no numbers name test', () =>  {

	expect(validateSpeciesName("earth2")).toHaveLength(1)
})