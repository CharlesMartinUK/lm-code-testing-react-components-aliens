interface ReasonProps {
	reason: string;
	onChangeReason: (value:string) => void;
}


const Reason : React.FC<ReasonProps> = ({ reason, onChangeReason }) => (
    <>
        <label htmlFor='reason'> Reason for sparing</label>
        <textarea id='reason'  value={reason} onChange={(e) => onChangeReason(e.target.value)} rows={20} cols ={30} > 
		
		</textarea>
    </> );
	
export default Reason