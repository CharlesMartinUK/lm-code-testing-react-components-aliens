import { useState } from 'react';
import W12MHeader from './W12MHeader';

import   SpeciesName   from './species_name'
import   PlanetName   from './planet_name'
import   NumberOfBeings   from './number_of_beings'
import   Question   from './question'
import   Reason   from './reason'
//import   Submit   from './submit'


import validateSpeciesName from '../validate/validate_species_name'
import validatePlanetName from '../validate/validate_planet_name'
import validateNumberOfBeings from '../validate/validate_number_of_beings'
import validateQuestion from '../validate/validate_question'
import validateReason from '../validate/validate_reason'

const W12MForm = () => {
	
	const [speciesName, setSpeciesName] = useState('humans');
	const [planetName, setPlanetName] = useState('earth');
	const [numberOfBeings, setNumberOfBeings] = useState('0');
	const [question, setQuestion] = useState('4');
	const [reason, setReason] = useState('Must not harm the cats');
	//const [submit, setSubmit] = useState('fd');
	

	
	function handleSubmit(event:any) {
		event.preventDefault();
		console.log(speciesName)
		console.log(planetName)
		console.log(numberOfBeings)
		console.log(question)
		console.log(reason)
	}
	
	
	return (
	
		<form className='w12MForm' onSubmit={handleSubmit}>
			<W12MHeader />
			{/* REST OF FORM GOES HERE */
			
			<SpeciesName speciesName={speciesName} onChangeSpeciesName={(value) => setSpeciesName(value)}  validate={(value) => validateSpeciesName(value)} value={speciesName} />
			}
			{
			<PlanetName planetName={planetName} onChangePlanetName={(value) => setPlanetName(value)} validate={(value) => validatePlanetName(value)} value={planetName}/>
			
			}
			{
			<NumberOfBeings numberOfBeings={numberOfBeings} onChangeNumberOfBeings={(value) => setNumberOfBeings(value)}
			validate={(value) => validateNumberOfBeings(value)} value={numberOfBeings}			/>
			}
			
			{
			<Question question={question} onChangeQuestion={(value) => setQuestion(value)} validate={(value) => validateQuestion(value)} value={question}/>
			}
			
			{
			<Reason reason={reason} onChangeReason={(value) => setReason(value)}validate={(value) => validateReason(value)} value={reason} 
			/>
			
			}
		
			{
		 
			<button type="submit">Submit</button>
			}
		</form>
		
		
	);
};

export default W12MForm;
