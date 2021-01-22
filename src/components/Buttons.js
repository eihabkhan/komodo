import styled from 'styled-components'
import { defaultTheme, typeScale } from '../styles'

const Button = styled.button`
    min-width: 100px;
    height: 45px;
    font-weight: 600;
    font-size: ${typeScale.paragraph};
    border-radius: 4px;
    cursor: pointer;
    border: none;
    font-family: ${defaultTheme.primaryFont};
    box-sizing: border-box;
`

export const PrimaryButton = styled(Button)`
     background-color: ${defaultTheme.primaryColor};
     color: white;
     text-align: center;
`

export const SecondaryButton = styled(Button)`
    background-color: transparent;
    border: 3px solid ${defaultTheme.primaryColor};
    color: ${defaultTheme.primaryColor};
`

export const TertiaryButton = styled(Button)`
    background-color: transparent;    
    color: ${defaultTheme.primaryColor};
`


export default PrimaryButton