import './App.css';

function App() {
  return (
    <div className="App">
      <div class="react-quiz-container">
        <div class="question-wrapper">
          <div class="question">
            <h3>This is a question</h3>
          </div>
          <div class="answers">
            <button class="answer-btn">a) Answer 1</button>
            <button class="answer-btn">b) Answer 2</button>
            <button class="answer-btn">c) Answer 3</button>
            <button class="answer-btn">d) Answer 4</button>
          </div>
          <div class="next">
            <button>Next</button>
          </div>
        </div>

      </div>
      {/* <img src="../puplic/images/background_image.jpg" /> */}

    </div> 
  );
}

export default App;
