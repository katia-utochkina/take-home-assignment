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

      <div className="form-group">
        <label>
        <textarea id="value" name="value" onChange={handleChange} value={textInput.value} required />
        </label>
      </div>

      <div className="form-group">
            <label htmlFor="textCase">Preferred Mode</label>
            <div className="form-field select">
              <select id="textCase" name="textCase" onChange={handleChange} value={textInput.textCase}>
                <option value="">None Selected</option>
                <option value="lowercase">Lowercase</option>
                <option value="uppercase">Uppercase</option>
              </select>
              <span className="focus"></span>
            </div>
          </div>
            <button type="submit">Submit</button> 
      </form>
      <div id="result">
        {textOutput}
      </div>
      </main>
    </div>
  );
}

export default App;
