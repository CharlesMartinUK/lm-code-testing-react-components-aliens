import ErrorMessages from './error_messages'

interface QuestionProps {
	question: string;
	onChangeQuestion: (value:string) => void;
	validate:(value:string) => string[],
	value:string
}


const Question : React.FC<QuestionProps> = ({ question, onChangeQuestion, validate, value }) =>{ 

	const errorMessages:string[] = validate(value)

	return(
    <>
        <label htmlFor='question'>What is 2 + 2 ?</label>
        <select id='question'  value={question} onChange={(e) => onChangeQuestion(e.target.value)} > 
		
			<option value="4">4</option>
			<option value="not4">Not 4</option>
		</select>
		<ErrorMessages messages={errorMessages} />
		<br />
    </> );
	
}
	
export default Question