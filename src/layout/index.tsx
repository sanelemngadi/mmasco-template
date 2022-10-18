import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { NqabaCSSReset, nqabaTheme } from '../styles/theme';

interface Props {
    children: JSX.Element
}

const NqabaPageLayout: FC<Props> = ({ children }) => {
    return (
        <ThemeProvider theme={nqabaTheme}>
            <NqabaCSSReset theme={nqabaTheme} />
            {children}
        </ThemeProvider>
    )
}

export default NqabaPageLayout