import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Navbar(props){

    const {theme,setTheme} = useContext(ThemeContext);
    
    const handleTheme=(e)=>{

        if(e.target.checked){
            setTheme('#001514');
            document.querySelector("body").setAttribute("data-theme","dark");
            document.body.style.background = '#001514' ;
            
        }else{
            setTheme('#ced4da');
            document.querySelector("body").setAttribute("data-theme","light");
            document.body.style.background = '#ced4da' ;
        }
        
    }

    return (
        <div className="navbar" style={{background:`${theme}`}}>
            <div className="left-nav">
                <button className="btn" onClick={() => props.textUpdate('todo')}>Todo List</button>
                <button className="btn" onClick={() => props.textUpdate('registration')}>Registration Form</button>
                <button className="btn" onClick={()=> props.textUpdate('temperature')}>Temperature Calculator</button>
            </div>
            <div className="right-nav">
                <input type="checkbox" id="check" name="check" defaultChecked={theme === '#001514'} onChange={handleTheme}/>
                <label htmlFor="check" className="theme"><i className="fa-solid fa-sun sun"></i><i className="fa-solid fa-moon moon"></i></label>
            </div>
        </div>
    );
}

export default Navbar;