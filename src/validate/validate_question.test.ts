import ValidateQuestion from './validate_question'


test('question is 4 valid', () => {
	
	expect(ValidateQuestion("4")).toHaveLength(0)
	
})

test('question not4 invalid', () => {
	
	expect(ValidateQuestion("45")).toHaveLength(1)
	
})