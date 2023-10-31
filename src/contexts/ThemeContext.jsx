import React, { useState } from "react";

export const ThemeContext = React.createContext();

function ThemeProvider({children}){

    const [theme,setTheme] = useState('#ced4da');

    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;