import './App.css';
import myData from './data/questions.json';
import Question from './components/Questions/Questions';
import { useState, useEffect } from 'react';

function App() {
  let [current, setCurrent] = useState(1);
  let [currentQuestion, setCurrentQuestion] = useState(myData.questions["1"]);
  let [submitButton, setSubmitButton] = useState('Next');
  let [notice, setNotice] = useState('');
  let [answers, setAnswers] = useState({ correct: 0, wrong: 0 });
  let [form, setForm] = useState('');

  useEffect(() => {
    setSubmitButton(() =>
      Object.keys(myData.questions).length === current
        ? 'Result'
        : 'Next'
    );
  }, [current])



  function onClickNext(ev) {
    ev.preventDefault();

    let currentAnswer = '';

    const form = ev.target.parentNode.parentNode.parentNode;
    const buttons = form.querySelectorAll('input');
    let isAnswered = false;

    for (let i = 0; i < buttons.length; i++) {
      const el = buttons[i];

      if (el.classList.contains("active")) {
        isAnswered = true;
        currentAnswer = el.name;
      }
    }

    if (isAnswered === false) {
      return setNotice('You must choose an answer!');
    } else {
      setNotice('');

      if (ev.target.innerHTML === 'Next') {
        savingAnswers(currentAnswer);
        setCurrent(++current);
        setCurrentQuestion(myData.questions[`${current}`]);
      } else if (ev.target.innerHTML === 'Result') {
        savingAnswers(currentAnswer);
        form.querySelector('.form-div').classList.add('hidden');
        form.querySelector('.result-div').classList.remove('hidden');



        for (const key in answers) {
          console.log(answers);

          const element = answers[key];
          // console.log(element);

        }
      }

    }
  }


  function savingAnswers(currentAnswer) {
    let givenAnswer = currentQuestion.answers.find(x => x.idAnswer === currentAnswer);
    let isCorrect = givenAnswer.isCorrect;

    if (isCorrect === true) {
      let oldNum = answers.correct;
      setAnswers(oldState => ({
        ...oldState, correct: oldNum + 1
      }))
    } else {
      let oldNum = answers.wrong;
      setAnswers(oldState => ({
        ...oldState, wrong: oldNum + 1
      }))
    }
  }




  return (
    <div className="App">
      <div className="react-quiz-container">
        <div className="question-wrapper">
          <form>
            <div className="result-div hidden">
              Your result is {'1'}
            </div>
            <div className="form-div">
              <Question data={currentQuestion} />
              <div className="notice">{notice}</div>
              <div className="next-btn">
                {submitButton === 'Result'
                  ? <button onClick={onClickNext}>Result</button>
                  : <button onClick={onClickNext}>Next</button>
                }
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
