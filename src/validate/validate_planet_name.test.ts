import validatePlanetName from './validate_planet_name'

test('PlanetNameValidation valid name test', () =>  {

	expect(validatePlanetName("earth")).toHaveLength(0)
})

test('PlanetNameValidation too short name test', () =>  {
	//must be 2 or more
	expect(validatePlanetName("q")).toHaveLength(1)
})


test('PlanetNameValidation too long name test', () =>  {
	// no more than 49
	expect(validatePlanetName("aaaaaaaaaafsdfsdfsdfdsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdaaaaaaaaaaaaaaaaaaaaa")).toHaveLength(1)
})

test('PlanetNameValidation special character name test', () =>  {

	expect(validatePlanetName("earth for $ale")).toHaveLength(1)
})

test('PlanetNameValidation  numbers allowed name test', () =>  {

	expect(validatePlanetName("earth2")).toHaveLength(0)
})