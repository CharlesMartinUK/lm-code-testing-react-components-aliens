import validateNumberOfBeings from './validate_number_of_beings'


test('validateNumberOfBeings min accectable number', () => {
	
	expect(validateNumberOfBeings("1000000000")).toHaveLength(0)
	
})


test('validateNumberOfBeings number to low', () => {
	
	expect(validateNumberOfBeings("999990999")).toHaveLength(1)
	
})


test('validateNumberOfBeings numbers only', () => {
	
	expect(validateNumberOfBeings("earth 999")).toHaveLength(1)
	
})