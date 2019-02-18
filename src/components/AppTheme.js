import { css } from 'styled-components';

export const theme = {
    main: {
        primary:               'rgba(118,41,245,1)',
        secondary:             'rgba(110,247,173,1)',
        tertiary:              'rgba(255,181,0,1)',
    },
    constants: {
        navItemsPadding:       '10px 14px',
        navItemColor:          '#fff',
        defaultListPadding:    '12px 16px',

        SkewedTag: {
            fontSize:             '2em',
            skewTagDegree:        'skew(-15deg)',
            skewTagDegreeContent: 'skew(15deg)',
            skewTagShadow:        '0 2px 60px rgba(0,0,0,.5)'
        },
        Footer: {
            footerBackground: '#2d1555'
        },

        secondSectionPadding:      '48px 50px'
    },
    breakpoints: {
        phone:      576,
        tablet:     768,
        desktop:    992,
    }
}


// This is a template for media querys.

export const Media = Object.keys(theme.breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${theme.breakpoints[label] / 16}em) {
        ${css(...args)}
      }
    `
    return acc
}, {}) 


export const MediaPortrait = Object.keys(theme.breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${theme.breakpoints[label] / 16}em), screen and (orientation: portrait) {
        ${css(...args)}
      }
    `
    return acc
}, {}) 