import './App.css';
import myData from './data/questions.json';
import Question from './components/Questions/Questions';
import { useState, useEffect } from 'react';

function App() {
  let [current, setCurrent] = useState(1);
  let [currentQuestion, setCurrentQuestion] = useState(myData.questions["1"]);
  let [answers, setAnswers] = useState([]);
  let [submitButton, setSubmitButton] = useState('Next');


  function onClickNext(ev) {
    ev.preventDefault();

    const form = ev.target.parentNode.parentNode;
    const buttons = form.querySelectorAll('input');
    console.log(buttons);
    for (let i = 0; i < buttons.length; i++) {
      const el = buttons[i];
      if (el.classList.contains("active")) {

        setAnswers(oldState => (
          [...oldState, el.name]));

      } else {
        console.log(false);
      }
    }

    setCurrent(++current);
    setCurrentQuestion(myData.questions[`${current}`]);
  }


  function onClickResult() {
    console.log('result');
  }

  useEffect(() => {
    setSubmitButton(() =>
      Object.keys(myData.questions).length === (answers.length + 1)
        ? 'Result'
        : 'Next'
    );
  }, [answers.length])
  // console.log(Object.keys(myData.questions).length);
  // console.log(answers.length);
  // console.log(Object.keys(myData.questions).length);



  return (
    <div className="App">
      <div className="react-quiz-container">
        <div className="question-wrapper">
          <form>

            <Question data={currentQuestion} />
            <div className="next-btn">
              {submitButton === 'Result'
                ? <button onClick={onClickResult}>Result</button>
                : <button onClick={onClickNext}>Next</button>
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
