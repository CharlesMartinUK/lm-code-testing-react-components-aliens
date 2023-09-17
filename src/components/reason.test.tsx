import { render, screen } from '@testing-library/react';
import Reason from './reason';
import user from '@testing-library/user-event';

test('renders reason element', () => {
	
	const props ={
		"reason":"cats rules",
		onChangeReason:jest.fn(),
		validate:jest.fn(),
		value:"cats rules"
	};
	
	render(<Reason {...props} />);

	const sn = screen.getByLabelText("Reason for sparing")
	expect(sn).toBeInTheDocument()
	
});


test('default reason set correctly', () => {
	
	const props ={
		"reason":"cats rules",
		onChangeReason:jest.fn(),
		validate:jest.fn(),
		value:"cats rules"
	};
	
	render(<Reason {...props} />);

	const st = screen.getByLabelText("Reason for sparing")
	expect(st).toHaveValue("cats rules")
	
});


test('reason change handler called', async () =>  {
	
	const mockChange = jest.fn()
	
	const props ={
		"reason":"cats rules",
		onChangeReason:mockChange,
		validate:jest.fn(),
		value:"cats rules"
	};
	
	render(<Reason {...props} />);
	
	await user.type(screen.getByLabelText("Reason for sparing"), ' and catnip');

	const st = screen.getByLabelText("Reason for sparing");
	expect(mockChange).toHaveBeenCalledTimes(11)
	
});


test('reason validate handle error correct', () =>  {

	const mockValidate = jest.fn()
	
	const props ={
		"reason":"cats rules",
		onChangeReason:jest.fn(),
		validate:mockValidate,
		value:"cats rules"
	};
	
	mockValidate.mockReturnValue(["ERROR"])
	
	const { container } = render(<Reason {...props} />);

	const t = container.getElementsByClassName('error') 
	
	//console.log(t)  
	expect(t).toHaveLength(1);

})


test('reason validate handle no error correct', () =>  {

	const mockValidate = jest.fn()
	
	const props ={
		"reason":"cats rules",
		onChangeReason:jest.fn(),
		validate:mockValidate,
		value:"cats rules"
	};
	
	mockValidate.mockReturnValue([])
	
	const { container } = render(<Reason {...props} />);

	const t = container.getElementsByClassName('error') 
	
	//console.log(t)  
	expect(t).toHaveLength(0);

})