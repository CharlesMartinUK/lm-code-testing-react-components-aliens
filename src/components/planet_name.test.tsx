import { render, screen } from '@testing-library/react';
import PlanetName from './planet_name';
import user from '@testing-library/user-event';

test('renders PlanetName element', () => {
	
	const props ={
		"planetName":"Donutopia",
		onChangePlanetName:jest.fn(),
	};
	
	render(<PlanetName {...props} />);

	const sn = screen.getByRole("textbox")
	expect(sn).toBeInTheDocument()
	
});


test('default PlanetName set correctly', () => {
	
	const props ={
		"planetName":"Donutopia",
		onChangePlanetName:jest.fn(),
	};
	
	render(<PlanetName {...props} />);

	const st = screen.getByRole('textbox');
	expect(st).toHaveValue("Donutopia")
	
});


test('PlanetName change handler called', async () =>  {
	
	const mockChange = jest.fn()
	
	const props ={
		"planetName":"Donutopia",
		onChangePlanetName:mockChange,
	};
	
	render(<PlanetName {...props} />);
	
	await user.type(screen.getByRole('textbox'), ' and custard');

	const st = screen.getByRole('textbox');
	expect(mockChange).toHaveBeenCalledTimes(12)
	
});