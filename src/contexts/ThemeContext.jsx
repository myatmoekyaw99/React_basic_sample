import React, { useState } from "react";

export const ThemeContext = React.createContext();

function ThemeProvider({children}){

    const [theme,setTheme] = useState('#ced4da');
    const [todoList,setTodoList] = useState([]);

    return (
        <ThemeContext.Provider value={{theme,setTheme,todoList,setTodoList}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;