import './Questions.css';


const Question = (props) => {
    const data = props.data;
    console.log(data);
    return (
            <div>
                <div className="question">
                    <h3>{data.question}</h3>
                </div>
                <div className="answers">
                    {data.answers.map(a => {
                        return  <button key={`${data.id}${a.bullet}`} className="answer-btn">{a.bullet}) {a.answerText}</button>
                    })}
                </div>
            </div>
    );
}
export default Question;