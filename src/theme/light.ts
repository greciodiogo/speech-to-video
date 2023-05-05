import { DefaultTheme } from 'styled-components';

const light: DefaultTheme = {
    colors: {
        transparent: 'transparent',
        white: '#FFFFFF',
        gradient: 'linear-gradient(#39598A, #79D7ED)',
        primary: '#F5B66B',
        background: '#F8F6EE',
        text: '#484848',
        error: '#B70A0F',
        success: '#4EA855',
    },
    breakpoints: {
        small: '767px',
        medium: '840px',
    },
    borderRadius: {
        s: '8px',
        m: '14px',
        l: '16px',
    },
    spacing: {
        xs: '6px',
        s: '16px',
        m: '24px',
        l: '28px',
        xl: '48px',
        xxl: '58px',
    },
    fontSize: {
        tiny: '0.6rem',
        p: '1.15rem',
        h2: '1.45rem',
        h1: '2.75rem',
    },
    shadows: {
        default: `
            box-shadow: 0px 0px 4px 1px rgba(72, 72, 72, 0.20);
            -webkit-box-shadow: 0px 0px 4px 1px rgba(72, 72, 72, 0.20);
            -moz-box-shadow: 0px 0px 4px 1px rgba(72, 72, 72, 0.20);
        `,
    },
};

export { light };
