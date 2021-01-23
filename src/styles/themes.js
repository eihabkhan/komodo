import { primary, neutral, warning, success, error } from './colors'
import { primaryFont } from './typography'

export const defaultTheme = {
    primaryColor: primary[100],
    primaryHoverColor: primary[200],
    primaryActiveColor: primary[300],
    secondaryColor: primary[200],
    tertiaryColor: primary[300],
    disabledColor: neutral[400],
    
    textColorOnPrimary: neutral[100],
    textColor: neutral[600],
    textColorInverted: neutral[100],
    textOnDisabled: neutral[500],
    primaryFont,

    formElementBackground: neutral[100],
    textOnFormElementBackground: neutral[600],

    status: {
        warningColor: warning[100],
        warningHoverColor: warning[200],
        warningActiveColor: warning[300],

        errorColor: error[100],
        errorHoverColor: error[200],
        errorActiveColor: error[300],

        successColor: success[100],
        successHoverColor: success[200],
        successActiveColor: success[300],
    }
}

export const darkTheme = {
    primaryColor: primary[100],
    primaryHoverColor: primary[200],
    primaryActiveColor: neutral[300],
    secondaryColor: primary[200],
    tertiaryColor: primary[300],
    disabledColor: neutral[400],
    
    textColorOnPrimary: neutral[100],
    textColor: primary[400],
    textColorInverted: neutral[100],
    textOnDisabled: neutral[500],
    
    primaryFont,

    formElementBackground: neutral[100],
    textOnFormElementBackground: neutral[600],

    status: {
        warningColor: warning[100],
        warningHoverColor: warning[200],
        warningActiveColor: warning[300],

        errorColor: error[100],
        errorHoverColor: error[200],
        errorActiveColor: error[300],

        successColor: success[100],
        successHoverColor: success[200],
        successActiveColor: success[300],
    }
}
