import styled from 'styled-components'
import {applyStyleModifiers} from 'styled-components-modifiers'

import { typeScale } from '../styles'

const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,
    large: () => `
        font-size: ${typeScale.heading5};
        width: 120px;
        height: 50px;
    `,
    warning: ({theme}) => {    
        return `
        border: none;
        background-color: ${theme.status.warningColor};
        color: ${theme.textColorInverted};

        &:hover {
            background-color: ${theme.status.warningHoverColor};
        }

        &:active {
            background-color: ${theme.status.warningActiveColor};      
        }
    `
    },
    error: ({theme}) => `
        border: none;
        background-color: ${theme.status.errorColor};
        color: ${theme.textColorInverted};

        &:hover {
            background-color: ${theme.status.errorHoverColor};
        }

        &:active {
            background-color: ${theme.status.errorActiveColor};      
        }
    `,
    succes: ({theme}) => `
        border: none;
        background-color: ${theme.status.successColor};
        color: ${theme.textColorInverted};

        &:hover {
            background-color: ${theme.status.successHoverColor};
        }

        &:active {
            background-color: ${theme.status.successActiveColor};      
        }
    `

}



const Button = styled.button`
    min-width: 80px;
    height: 45px;
    font-weight: 600;
    font-size: ${typeScale.paragraph};
    border-radius: 4px;
    cursor: pointer;
    border: none;
    transition: all 0.3s linear;
    outline: none;

    &:hover {
        background-color: ${({theme}) => theme.primaryHoverColor};
        color: ${({theme}) => theme.textColorOnPrimary}
    }

    &:active {
        border-color: ${({theme}) => theme.tertiaryColor};
        background-color: ${({theme}) => theme.tertiaryColor}
    }

    &:disabled{ cursor: not-allowed}
`

export const PrimaryButton = styled(Button)`
     background-color: ${({theme}) => theme.primaryColor};
     color: white;
     text-align: center;

     &:disabled {
         background-color: ${({theme}) => theme.disabledColor};
         color: ${({theme}) => theme.textOnDisabled}
     }

     ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const SecondaryButton = styled(Button)`
    background-color: transparent;
    border: 3px solid ${({theme}) => theme.secondaryColor};
    color: ${({theme}) => theme.secondaryColor};

    &:disabled {
        background-color: transparent;
        border: 3px solid ${({theme}) => theme.disabledColor};
        color: ${({theme}) => theme.textOnDisabled};
    }
    
    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const TertiaryButton = styled(Button)`
    background-color: transparent;    
    color: ${({theme}) => theme.textColor};

    &:disabled{
        background-color: transparent;    
        color: ${({theme}) => theme.textOnDisabled};
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`


export default PrimaryButton