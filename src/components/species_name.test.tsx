import { render, screen } from '@testing-library/react';
import SpeciesName from './species_name';
import user from '@testing-library/user-event';

test('renders SpeciesName element', () => {
	
	const props ={
		"speciesName":"Humans",
		onChangeSpeciesName:jest.fn(),
		validate:jest.fn(),
		value:"Humans"
	};
	  
	render(<SpeciesName {...props} />);

	const sn = screen.getByRole("textbox")
	expect(sn).toBeInTheDocument()
	
});


test('default SpeciesName set correctly', () => {
	
	const props ={
		"speciesName":"Cat Women",
		onChangeSpeciesName:jest.fn(),
		validate:jest.fn(),
		value:"Cat Women"
	};
	
	render(<SpeciesName {...props} />);

	const st = screen.getByRole('textbox');
	expect(st).toHaveValue("Cat Women")
	
});


test('SpeciesName change handler called', async () =>  {
	
	const mockChange = jest.fn()
	
	const props ={
		"speciesName":"Cat Women",
		onChangeSpeciesName:mockChange,
		validate:jest.fn(),
		value:"Cat Women"
	};
	
	render(<SpeciesName {...props} />);
	
	await user.type(screen.getByRole('textbox'), ' of Uranus');

	const st = screen.getByRole('textbox');
	expect(mockChange).toHaveBeenCalledTimes(10)
	
});