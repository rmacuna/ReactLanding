import { css } from 'styled-components';

export const theme = {
    main: {
        primary: 'rgba(118,41,245,1)',
        secondary: 'rgba(110,247,173,1)',
        tertiary: 'rgba(255,181,0,1)',
    },
    constants: {
        navItemsPadding: '10px 14px',
        navItemColor: '#fff',
        defaultListPadding: '12px 16px'
    },
    breakpoints: {
        phone: 576,
        tablet: 768,
        desktop: 992,
    }
}

export const Media = Object.keys(theme.breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${theme.breakpoints[label] / 16}em) {
        ${css(...args)}
      }
    `
    return acc
}, {}) 