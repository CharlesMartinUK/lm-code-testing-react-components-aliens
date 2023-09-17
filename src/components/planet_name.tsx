import ErrorMessages from './error_messages'

interface PlanetNameProps {
	planetName: string;
	onChangePlanetName: (value:string) => void;
	validate:(value:string) => string[];
	value:string;
}


const PlanetName : React.FC<PlanetNameProps> = ({ planetName, onChangePlanetName ,validate, value}) => {
	
	const errorMessages:string[] = validate(value)

	return(
    <>
        <label htmlFor='planetName'>Planet Name</label>
        <input id='planetName' type='text' value={planetName} onChange={(e) => onChangePlanetName(e.target.value)} />
		<ErrorMessages messages={errorMessages} />
		<br />
    </> )
}
	
export default PlanetName