import {createGlobalStyle} from 'styled-components'
import {normalize} from 'polished'

import {primaryFont} from './typography'

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    * {
        font-size: 16px;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: ${primaryFont}
    }

    main {
        width: 90%;
        margin: 0 auto;
    }
`