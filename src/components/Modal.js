import React from 'react'
import styled from 'styled-components'

import {typeScale} from '../styles/'
import {Illustrations, CloseIcon} from '../assets'
import {PrimaryButton} from './Buttons'

const ModalWrapper = styled.div`
    width: 800px;
    height: 550px;
    box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.25);
    background-color: ${({theme}) => theme.formElementBackground};
    color: ${({theme}) => theme.textOnFormElementBackground};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 3px;
`

const SignupHeader = styled.h3`
    font-size: ${typeScale.heading3};
`

const SignupText = styled.p`
    font-size: ${typeScale.paragraph};
    max-width: 70%;
    text-align: center;
`

const CloseModalButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    position: absolute;
    top: 40px;
    right: 40px;
    width: 24px;
    height: 24px;
    padding: 0;
`

export const SignupModal = () => {
    return (
        <ModalWrapper>
            <img src={Illustrations.Signup} alt={"Sign up for an account"} aria-hidden={true}/>
            <SignupHeader>Sign Up</SignupHeader>
            <SignupText>Get access to daily hand crafted illustrations</SignupText>
            <PrimaryButton>Sign up!</PrimaryButton>
            <CloseModalButton aria-label="Close modal">
                <CloseIcon />
            </CloseModalButton>
        </ModalWrapper>

    )
}