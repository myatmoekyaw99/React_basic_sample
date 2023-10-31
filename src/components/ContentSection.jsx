import React, { useContext } from "react";
import TodoList from "./TodoList";
import RegistrationForm from "./RegistrationForm";
import CalculateTemperature from "./CalculateTempearture";
import { ThemeContext } from "../contexts/ThemeContext";

function ContentSection({text}){

    const {theme} = useContext(ThemeContext);

    if(text === 'todo'){
        return (
            <div className="content-section" style={{background:`${theme}`}}>
                <TodoList/>
            </div>
        );
    }else if(text === 'registration'){
        return (
            <div className="content-section" style={{background:`${theme}`}}>
                <RegistrationForm/>
            </div>
        );
    }else if(text === 'temperature'){
        return (
            <div className="content-section" style={{background:`${theme}`}}>
                <CalculateTemperature/>
            </div>
        );
    }
   
}

export default ContentSection;