import 'styled-components';

type CommonColors =
    | 'transparent'
    | 'white'
    | 'gradient'
    | 'background'
    | 'primary'
    | 'error'
    | 'success'
    | 'text';

type BreakPoints = {
    small: string;
    medium: string;
};

type BorderRadius = {
    s: string;
    m: string;
    l: string;
};

type Spacing = {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
};

type FontSize = {
    tiny: string;
    p: string;
    h1: string;
    h2: string;
};

type Shadows = {
    default: string;
};

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: Record<CommonColors, string>;
        breakpoints: BreakPoints;
        borderRadius: BorderRadius;
        spacing: Spacing;
        fontSize: FontSize;
        shadows: Shadows;
    }
}
