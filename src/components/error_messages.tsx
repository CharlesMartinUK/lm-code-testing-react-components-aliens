interface ErrorMessagesProp {
	messages: string[];
}


const ErrorMessages : React.FC<ErrorMessagesProp> = (props) => {

	//console.log('errors')
	// need this other because get sent a lot of undefined
	if(props.messages === undefined) return <> </>
	
    return(
		<> 
			{ props.messages.map( (m,index) => (
			<span key={index} className="error">{m} </span>
			))
			}
		</> 
	);
} 
	
export default ErrorMessages