import './Questions.css';


const Question = (props) => {
    const data = props.data;

    function onClickButton(ev){
        const button = ev.target;
        const allButtons = ev.target.parentElement.children;

        for (let i = 0; i < allButtons.length; i++) {
            let btn = allButtons[i];
            btn.classList.remove("active");
        }
        
        if(button.classList.contains("active")){
            button.classList.remove("active")
        } else{
            button.classList.add("active")
        }
    }

    return (
            <div>
                <div className="question">
                    <h3>{data.question}</h3>
                </div>
                <div className="answers">
                    {data.answers.map(a => {
                        return  <button key={`${data.id}${a.bullet}`} onClick={onClickButton} className="answer-btn">{a.bullet}) {a.answerText}</button>
                    })}
                </div>
            </div>
    );
}
export default Question;