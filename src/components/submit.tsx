interface SubmitProps {
	submit: string;
	onSubmit: (value:string) => void;
}


const Submit: React.FC<SubmitProps> = ({ submit, onSubmit }) => (
    <>
       
        <button id='submit' onClick={(e) => onSubmit("")} />
    </> );
	
export default Submit