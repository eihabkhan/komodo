import React from 'react'
import ReactDOM from 'react-dom'

import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/Buttons'

const App = () => (
    <div>
        <PrimaryButton>Submit</PrimaryButton>
        <SecondaryButton>Login</SecondaryButton>
        <TertiaryButton>Cancel</TertiaryButton>
    </div>
)

ReactDOM.render(<App />, document.querySelector("#root"))