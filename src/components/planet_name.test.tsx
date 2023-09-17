import { render, screen } from '@testing-library/react';
import PlanetName from './planet_name';
import user from '@testing-library/user-event';

test('renders PlanetName element', () => {
	
	const props ={
		"planetName":"Donutopia",
		onChangePlanetName:jest.fn(),
		validate:jest.fn(),
		value:"Donutopia"
	};
	
	render(<PlanetName {...props} />);

	const sn = screen.getByRole("textbox")
	expect(sn).toBeInTheDocument()
	
});


test('default PlanetName set correctly', () => {
	
	const props ={
		"planetName":"Donutopia",
		onChangePlanetName:jest.fn(),
		validate:jest.fn(),
		value:"Donutopia"
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
		validate:jest.fn(),
		value:"Donutopia"
	};
	
	render(<PlanetName {...props} />);
	
	await user.type(screen.getByRole('textbox'), ' and custard');

	const st = screen.getByRole('textbox');
	expect(mockChange).toHaveBeenCalledTimes(12)
	
});


test('PlanetName too short validation correctly', () => {
	
	const mockValidate = jest.fn()
	
	const props ={
		"planetName":"Donutopia",
		onChangePlanetName:jest.fn(),
		validate:mockValidate,
		value:"Donutopia"
	};
	
	mockValidate.mockReturnValue(["Planet name too short"])
	
	render(<PlanetName {...props} />);
	
	const t = screen.getByText('Planet name too short') 
	
	//console.log(t)  
	expect(t).toBeInTheDocument()
	
})


test('PlanetName no problem validation correctly', () => {
	
	const mockValidate = jest.fn()
	
	const props ={
		"planetName":"Donutopia",
		onChangePlanetName:jest.fn(),
		validate:mockValidate,
		value:"Donutopia"
	};
	
	mockValidate.mockReturnValue([])
	
	const {container} = render(<PlanetName {...props} />);
	
	const t = container.getElementsByClassName('error') 
	
	//console.log(t)  
	expect(t).toHaveLength(0);
	
})




