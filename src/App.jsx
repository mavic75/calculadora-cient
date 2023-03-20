import React, { useState } from "react";
import "./index.css";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.id));
  };

  const handleClickAbs = (e) => {
	try {
		setResult(eval(result*(-1)).toString());
	  } catch (error) {
		setResult("Invalid");
	  }
  };

  const handleClick1div = (e) => {
	try {
		setResult(eval(1/result).toString());
	  } catch (error) {
		setResult("Invalid");
	  }
  };
  
  const handleClickE = (e) => {
	try {
		setResult(eval(2.7182818284590452353602874713527).toString());
	  } catch (error) {
		setResult("Invalid");
	  }
  };

  const handleClickPi = (e) => {
	try {
		setResult(eval(3.1415926535897932384626433832795).toString());
	  } catch (error) {
		setResult("Invalid");
	  }
  };

  const handleClickMod = (e) => {
	try {
		const res = result % result.concat(e.target.id).toString()
		setResult(eval(res).toString());
	  } catch (error) {
		setResult("Invalid");
	  }
  };

  const clear = () => {
    setResult("");
  };

  const deleteElement = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Invalid");
    }
  };
  return (
    <div className="calculator">
      
       <input type="text" value={result} disabled />

      <div className="buttons">
	  	
        <button id="π" className="operator" onClick={handleClickPi}>π</button>
        <button id="e" className="operator" onClick={handleClickE}>e</button>
		<button className="operator" onClick={clear}>AC</button>
        <button className="operator" onClick={deleteElement}>DE</button>

		<button id="1/x" className="operator" onClick={handleClick1div}>1/x</button>
        <button id="*(-1)" className="operator" onClick={handleClickAbs}>|x|</button>
        <button id="exp" className="operator" onClick={handleClick}>exp</button>
        <button id="Mod" className="operator" onClick={handleClickMod}>mod</button>

		<button id="(" className="operator" onClick={handleClick}>(</button>
        <button id=")" className="operator" onClick={handleClick}>)</button>
        <button id="!" className="operator" onClick={handleClick}>n!</button>
        <button id="/" className="operator" onClick={handleClick}>/</button>

        <button id="7" className="number" onClick={handleClick}>7</button>
        <button id="8" className="number" onClick={handleClick}>8</button>
        <button id="9" className="number" onClick={handleClick}>9</button>
        <button id="*" className="operator" onClick={handleClick}>*</button>

        <button id="4" className="number" onClick={handleClick}>4</button>
        <button id="5" className="number" onClick={handleClick}>5</button>
        <button id="6" className="number" onClick={handleClick}>6</button>
        <button id="-" className="operator" onClick={handleClick}>-</button>

        <button id="1" className="number" onClick={handleClick}>1</button>
        <button id="2" className="number" onClick={handleClick}>2</button>
        <button id="3" className="number" onClick={handleClick}>3</button>
        <button id="+" className="operator" onClick={handleClick}>+</button>

        <button id="00" className="number" onClick={handleClick}>00</button>
        <button id="0" className="number" onClick={handleClick}>0</button>
        <button id="," className="operator" onClick={handleClick}>,</button>
        <button id="=" className="operator" onClick={calculate}>=</button>
      </div>
    </div>
  )
}

export default App
