import React, { useCallback, useState } from "react";

function CalculateTemperature(){

    let pstyle ={color:'blue'};

    const [celsius,setCelsius] = useState(0);
    const [fahrenheit,setFahrenheit] = useState(0);
    const [isShow,setIsShow] = useState(false);

    const handleCelcius = (val) =>{
        setCelsius(val);
        let newFah = parseInt(val * 9/5 + 32) ;
        setFahrenheit(newFah);
        setIsShow(true);
    };

    const handleFahrenheit = (val) => {
        setFahrenheit(val);
        let newCel = parseInt((val - 32) * 5/9 );
        setCelsius(newCel);
        setIsShow(true);
    };

    return (
        <div className="temp-section">
            <h2>Temperature Calculation</h2><br/>
             <label htmlFor="celsius">Celsius :</label><br/>
            <input type="number" name="celsius" id="celsius" className="temp-form-input" placeholder="Enter your celsius" value={celsius} onChange={(e)=>handleCelcius(e.target.value)}/><br></br>

            <label htmlFor="fahrenheit">Fahrenheit :</label><br/>
            <input type="number" name="fahrenheit" id="fahrenheit" className="temp-form-input" placeholder="Enter your fahrenheit" value={fahrenheit} onChange={(e)=>handleFahrenheit(e.target.value)}/><br></br>
            <br/>
            {
                isShow && <><p style={pstyle}>Your Temperature is : {celsius ? celsius: '0'}&deg;{'C'}</p><br/><p style={pstyle}>Your Temperature is :  {fahrenheit ? fahrenheit: '0'}&deg;{'F'}</p></>
            }
        </div>
    );
}

export default CalculateTemperature;