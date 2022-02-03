import './App.css';
import myData from './data/questions.json';
import Question from './components/Questions/Questions';
import {useState, useContext} from 'react';

function App() {
  let [current, setCurrent] = useState(1);
  let [currentQuestion, setCurrentQuestion] = useState(myData.questions["1"]);
  
  function onClickNext(){
    setCurrent(++current);
    setCurrentQuestion(myData.questions[`${current}`]);
  }

  

  return (
    <div className="App">
      <div className="react-quiz-container">
        <div className="question-wrapper">
          <Question data={currentQuestion} />
          <div className="next">
            <button onClick={onClickNext}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
