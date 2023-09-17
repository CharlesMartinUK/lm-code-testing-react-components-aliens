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