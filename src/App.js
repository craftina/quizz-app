import './App.css';
import myData from './data/questions.json';
import Question from './components/Questions/Questions';

function App() {
  console.log(myData.questions.question1);
  return (
    <div className="App">
      <div className="react-quiz-container">
        <Question />
      </div>
    </div> 
  );
}

export default App;
