import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {ThemeProvider} from 'styled-components'

import { SignupModal } from './components/'
import {GlobalStyle} from './styles/'
import {defaultTheme, darkTheme} from './styles/themes'   



const App = () => {
    const [useDarkTheme, setUseDarkTheme] = useState(false);

    return (
        <ThemeProvider theme={useDarkTheme? darkTheme : defaultTheme}>
            <button 
                onClick={() => setUseDarkTheme(true)}
            >Dark Theme</button>
            <button 
                onClick={() => setUseDarkTheme(false)}
            >Default Theme</button>
            <div
                style={
                    {
                        background: useDarkTheme ? darkTheme.tertiaryColor : "#fff" ,
                        width: "100vw",
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around"
                    }
                }
            >
                <SignupModal />
            </div>
            <GlobalStyle />
        </ThemeProvider>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"))