export * from './dark';
export * from './light';

import React, { createContext, FC, useContext, useMemo, useState } from 'react';
import { ThemeProvider as DefaultThemeProvider } from 'styled-components';
import SnackbarProvider from 'react-simple-snackbar';

import { dark } from './dark';
import { light } from './light';
import { ThemeContextProps } from './type';
import { DisplayImage } from '@components';

export const ThemeContext = createContext<ThemeContextProps>({
    theme: 'light',
    toggle: () => undefined,
});

export const useTheme = () => {
    const { theme, toggle } = useContext(ThemeContext);

    return {
        theme: theme === 'light' ? light : dark,
        toggle,
        themeName: theme,
    };
};

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggle = () => {
        setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
    };

    const values = useMemo(
        () => ({
            theme,
            toggle,
        }),
        [toggle, theme],
    );

    return (
        <ThemeContext.Provider value={values}>
            <SnackbarProvider>
                <DefaultThemeProvider theme={theme === 'light' ? light : dark}>
                    <DisplayImage>{children}</DisplayImage>
                </DefaultThemeProvider>
            </SnackbarProvider>
        </ThemeContext.Provider>
    );
};
