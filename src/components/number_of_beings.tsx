import ErrorMessages from './error_messages'

interface NumberOfBeingsProps {
	numberOfBeings: string;
	onChangeNumberOfBeings: (value:string) => void;
	validate:(value:string) => string[];
	value:string;
}


const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({ numberOfBeings, onChangeNumberOfBeings, validate, value }) => {

	const errorMessages:string[] = validate(value)

    return(<>
        <label htmlFor='numberOfBeings'>Number Of Beings</label>
        <input id='numberOfBeings' type='text' value={numberOfBeings} onChange={(e) => onChangeNumberOfBeings(e.target.value)} />
		<ErrorMessages messages={errorMessages} />
		<br />
</>)
 };
	
export default NumberOfBeings