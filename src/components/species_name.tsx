import ErrorMessages from './error_messages'

interface SpeciesNameProps {
	speciesName: string;
	onChangeSpeciesName: (value:string) => void;
	validate:(value:string) => string[];
	value:string;
}


const SpeciesName : React.FC<SpeciesNameProps> = (props) => {

	const errorMessages:string[] = props.validate(props.value)
	//console.log("Errors ",errorMessages)

    return(<>
        <label htmlFor='props.speciesName'>Species Name</label>
        <input id='props.speciesName' type='text' value={props.speciesName} onChange={(e) => props.onChangeSpeciesName(e.target.value)}  />
		<ErrorMessages messages={errorMessages} />
		 <br />
    </> );
} 
	
export default SpeciesName