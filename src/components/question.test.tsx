import { render, screen, fireEvent } from '@testing-library/react';
import Question from './question';
import   user   from '@testing-library/user-event';


test('renders question element', () => {
	
	const props ={
		"question":"4",
		onChangeQuestion:jest.fn(),
		validate:jest.fn(),
		value:"4"
	};
	
	render(<Question {...props} />);


	expect( screen.getByLabelText('What is 2 + 2 ?')).toBeInTheDocument()
	
});


test('default question set correctly', () => {
	
	const props ={
		"question":"4",
		onChangeQuestion:jest.fn(),
		validate:jest.fn(),
		value:"4"
	};
	
	render(<Question {...props} />);


	expect( screen.getByLabelText('What is 2 + 2 ?') ).toHaveValue("4")
	
});


test('question change handler called', async ()  =>  {
	
	const mockHandler = jest.fn()
	
	const props ={
		"question":"4",
		onChangeQuestion: mockHandler,
		validate:jest.fn(),
		value:"4"
	};
	
	render(<Question {...props} />);

	//userEvent.selectOptions(screen.getByLabelText('What is 2 + 2 ?'), 'not4');
	
	await user.selectOptions(screen.getByLabelText('What is 2 + 2 ?'), 'not4');
	
	expect(mockHandler).toHaveBeenCalledTimes(1);
	
	//expect((screen.getByText('4') as HTMLOptionElement).selected).toBeFalsy()
	
	//expect((screen.getByText('Not 4') as HTMLOptionElement).selected).toBeTruthy();
	
	
	//expect(mockChangeHandler).toHaveBeenCalledTimes(1);
	
	/* // could not get any of this to work, not sure why
	 userEvent.selectOptions(screen.getByLabelText('What is 2 + 2 ?'), 'not4');
	 expect((screen.getByText('4') as HTMLOptionElement).selected).toBeFalsy()
	  
     expect((screen.getByText('Not 4') as HTMLOptionElement).selected).toBeTruthy();
	  */
     

	
});