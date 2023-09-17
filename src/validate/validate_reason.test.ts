import ValidateReason from './validate_reason'


test("Validate reason text loneg engough",() => {
	
	expect(ValidateReason("12345678901234567890")).toHaveLength(0)
	
})

test("Validate reason text too small(16 should be at least 17)",() => {
	
	expect(ValidateReason("1234567890123456")).toHaveLength(1)
	
})


test("Validate reason text too long(should be no more than 153)",() => {
	
	expect(ValidateReason("1234567890123456fdsfsdfdsfdsfdsfdsfsdfsdfsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfdsfdsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsd")).toHaveLength(1)
	
})