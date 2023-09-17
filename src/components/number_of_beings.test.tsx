import { render, screen } from '@testing-library/react';
import NumberOfBeings from './number_of_beings';
import user from '@testing-library/user-event';

test('renders NumberOfBeings element', () => {
	
	const props ={
		"numberOfBeings":"4",
		onChangeNumberOfBeings:jest.fn(),
		validate:jest.fn(),
		value:"4"
	};
	
	render(<NumberOfBeings {...props} />);

	const sn = screen.getByRole("textbox")
	expect(sn).toBeInTheDocument()
	
});


test('default numberOfBeings set correctly', () => {
	
	const props ={
		"numberOfBeings":"4",
		onChangeNumberOfBeings:jest.fn(),
		validate:jest.fn(),
		value:"4"
	};
	
	render(<NumberOfBeings {...props} />);

	const st = screen.getByRole('textbox');
	expect(st).toHaveValue("4")
	
});


test('numberOfBeings change handler called', async () =>  {
	
	const mockChange = jest.fn()
	
	const props ={
		"numberOfBeings":"4",
		onChangeNumberOfBeings:mockChange,
		validate:jest.fn(),
		value:"4"
	};
	
	render(<NumberOfBeings {...props} />);
	
	await user.type(screen.getByRole('textbox'), '88');

	const st = screen.getByRole('textbox');
	expect(mockChange).toHaveBeenCalledTimes(2)
	
});



test('NumberOfBeings error return correctly', () => {
	
	const mockValidate = jest.fn()
	
	const props ={
		"numberOfBeings":"4",
		onChangeNumberOfBeings:jest.fn(),
		validate:mockValidate,
		value:"4"
	};
	
	mockValidate.mockReturnValue(["NumberOfBeings too low"])
	
	render(<NumberOfBeings {...props} />);
	
	const t = screen.getByText('NumberOfBeings too low') 
	
	//console.log(t)  
	expect(t).toBeInTheDocument()
	
})


test('NumberOfBeings no problem validation correctly', () => {
	
	const mockValidate = jest.fn()
	
	const props ={
		"numberOfBeings":"4",
		onChangeNumberOfBeings:jest.fn(),
		validate:mockValidate,
		value:"4"
	};
	
	mockValidate.mockReturnValue([])
	
	const {container} = render(<NumberOfBeings {...props} />);
	
	const t = container.getElementsByClassName('error') 
	
	//console.log(t)  
	expect(t).toHaveLength(0);
	
})

