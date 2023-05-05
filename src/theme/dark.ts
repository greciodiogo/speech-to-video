import { DefaultTheme } from 'styled-components';
import { light } from './light';

const dark: DefaultTheme = {
    ...light,
    colors: {
        ...light.colors,
        gradient: 'linear-gradient(#091236, #1E215D)',
        background: '#20232A',
        text: '#FFFFFF',
    },
};

export { dark };
