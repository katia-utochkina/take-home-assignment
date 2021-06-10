import React, { useState } from "react";
import "./App.css";

const defaultInput = {
  value: "Here is some example text.",
  textCase: "",
};

const App = () => {
  const [textInput, setTextInput] = useState(defaultInput);
  const [textOutput, setTextOutput] = useState("");

  const handleChange = (e) => {
    setTextInput({
      ...textInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (textInput.textCase) {
      case "uppercase":
        setTextOutput(textInput.value.toUpperCase());
        break;
      case "lowercase":
        setTextOutput(textInput.value.toLowerCase());
        break;
      default:
        setTextOutput(textInput.value);
        break;
    }
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
        <div id="result">{textOutput}</div>
      </main>
    </div>
  );
};

export default App;
