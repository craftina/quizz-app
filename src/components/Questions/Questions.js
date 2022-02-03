import './Questions.css';

const Question = () => {
    return (
        <div className="question-wrapper">
          <div className="question">
            <h3>This is a question</h3>
          </div>
          <div className="answers">
            <button className="answer-btn">a) Answer 1</button>
            <button className="answer-btn">b) Answer 2</button>
            <button className="answer-btn">c) Answer 3</button>
            <button className="answer-btn">d) Answer 4</button>
          </div>
          <div className="next">
            <button>Next</button>
          </div>
        </div>
    );
}
export default Question;