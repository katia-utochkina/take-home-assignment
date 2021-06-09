import React from "react";
import './App.css';

const defaultInput = {
  value: "Here is some example text.",
  textCase: "",
};


function App() {
  const [textInput, setTextInput] = React.useState(defaultInput);
  const [textOutput, setTextOutput] = React.useState('');

  const handleChange = event => {
    setTextInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setTextOutput('Your formatted text will go here!')
  };

  return (
    <div className="App">
      <header>
        <h1>Career Lab | Take-Home Assignment</h1>
      </header>

      <main> 
      <form className="form" onSubmit={handleSubmit}>
        <label>
        <textarea id="value" name="value" onChange={handleChange} value={textInput.value} required />
        </label>
        <input type="submit" value="Submit"/>
      </form>
      <div id="result">
        {textOutput}
      </div>
      </main>
    </div>
  );
}

export default App;
