import ErrorMessages from './error_messages'

interface ReasonProps {
	reason: string;
	onChangeReason: (value:string) => void;
	validate:(value:string) => string[];
	value:string
}


const Reason : React.FC<ReasonProps> = ({ reason, onChangeReason, validate, value }) => {

	const errorMessages = validate(value)
 
	return(
    <>
        <label htmlFor='reason'> Reason for sparing</label>
        <textarea id='reason'  value={reason} onChange={(e) => onChangeReason(e.target.value)} rows={20} cols ={30} > 
		
		</textarea><ErrorMessages messages={errorMessages} /><br />
    </> );
}
	
export default Reason