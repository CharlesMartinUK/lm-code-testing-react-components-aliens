interface QuestionProps {
	question: string;
	onChangeQuestion: (value:string) => void;
}


const Question : React.FC<QuestionProps> = ({ question, onChangeQuestion }) => (
    <>
        <label htmlFor='question'>What is 2 + 2 ?</label>
        <select id='question'  value={question} onChange={(e) => onChangeQuestion(e.target.value)} > 
		
			<option value="4">4</option>
			<option value="not4">Not 4</option>
		</select>
    </> );
	
export default Question