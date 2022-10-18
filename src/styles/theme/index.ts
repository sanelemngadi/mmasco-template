import { createGlobalStyle, DefaultTheme } from "styled-components";
//9A9A9A grey

export const projectColors = {
    primary: "#0E2536",
    secondary: "#F6B47D",
    tertiary: "#4F55E3",
    grey: "#9A9A9A",
    grayD9: "#D9D9D9",
    bgsecondary: "#D7DDF2",
    light: "#fff",
    dark: "#000",
}

export const projectFonts = {
    primary: "'Dosis', Helvetica, sans-serif",
    secondary: "'Cormorant', serif",
}

export const nqabaTheme: DefaultTheme = {
    colors: {
        primary: "#0E2536",
        secondary: "#F6B47D",
        tertiary: "#4F55E3",
        grey: "#9A9A9A",
        grayD9: "#D9D9D9",
        bgsecondary: "#D7DDF2",
        light: "#fff",
        dark: "#000",
    },
    fonts: {
        headings: "'Cormorant', serif",
        body: "'Dosis', Helvetica, sans-serif",
    },
    breakpoints: {
        up: (dir: string): string => {
            if (dir === 'sm') {
                return `@media (min-width: 600px)`;
            }
            if (dir === 'md') {
                return `@media (min-width: 900px)`;
            }
            if (dir === 'lg') {
                return `@media (min-width: 1200px)`;
            }
            return '@media (min-width: 600px)';
        }
    }

}

export const NqabaCSSReset = createGlobalStyle`
    *,*::before, *:after{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body{
        font-family: ${({ theme }) => theme.fonts.body};
        min-height: 100vh;
    }

    h1,h2,h3,h4,h5,h6{
        font-family: ${({ theme }) => theme.fonts.headings};
    }

    p, button, input,textarea{
        font-family: ${({ theme }) => theme.fonts.body};
    }
`