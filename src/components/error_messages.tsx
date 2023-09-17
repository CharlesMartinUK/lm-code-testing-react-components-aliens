interface ErrorMessagesProp {
	messages: string[];
}


const ErrorMessages : React.FC<ErrorMessagesProp> = (props) => {

	//console.log('errors')
    return(<>
        <span className="error">{props.messages}</span>
    </> );
} 
	
export default ErrorMessages