
import { useState } from 'react'
import './App.css'

function App() {
  const [height,setHeight]=useState("")
  const [weight,setWeight]=useState("")
  const [bmi,setBmi]=useState(null)
  const [bmiStatus,setBmiStatus]=useState("")
  const [errorMessage,setErrorMessage]=useState("")
  const calculateBmi=(event)=>{
    const isValidHeight= /^\d+$/.test(height);
    const isValidWeight= /^\d+$/.test(weight);
    if(isValidHeight && isValidWeight){
      const heightInMeters= height/100;
      const bmiValue=weight/(heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2))
      if(bmiValue<18.5){
        setBmiStatus("UnderWeight");
      }else if(bmiValue>=18.5 && bmiValue<24.9){
        setBmiStatus("Normal Weight")
      }else if(bmiValue>=25 && bmiValue<29.9){
        setBmiStatus("Overweight")
      }else{
        setBmiStatus("obese")
      }
      setErrorMessage("");
    }else{
      setBmi(null);
      setBmiStatus("");
      setErrorMessage("Please enter valid numeric values for height and weight.")
    }
  }
  const clearAll=()=>{
    setBmi(null);
    setBmiStatus("");
    setHeight("")
    setWeight("")
  }

  return (
    <>
      <div className='bmi-container'>
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>

          {errorMessage && <p className='error'>{errorMessage}</p>}
          <div className="input-container">
            <label htmlFor="height">Height (cm):</label>
            <input type="text" value={height} id="height" onChange={(event)=>setHeight(event.target.value)} />
          </div>
          <div className="input-container">
            <label htmlFor="weight">Weight (kg):</label>
            <input type="text" value={weight} id="weight" onChange={(event)=>setWeight(event.target.value)}/>
          </div>
          <button onClick={calculateBmi}>Calculate BMI</button>
          <button onClick={clearAll}>clear</button>
          {bmi!==null && (
          <div className="result">
            <p>Your BMI is :{bmi}</p>
            <p>Status:{bmiStatus}</p>
          </div>)}
        </div>
      </div>
    </>
  )
}

export default App
