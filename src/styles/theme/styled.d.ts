// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string,
            secondary: string,
            tertiary: string,
            grey: string,
            grayD9: string,
            bgsecondary: string,
            light: string,
            dark: string,
        },
        fonts: {
            headings: string,
            body: string,
            // poppins: "'Poppins', sans-serif",
        },
        breakpoints: {
            up(dir: string): string
        }
    }
}