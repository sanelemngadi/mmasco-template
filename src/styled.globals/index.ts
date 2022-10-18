import styled, { css } from "styled-components";
import Nqabanqaba from "./Nqaba";

interface ContainerProps {
    maxWidth?: "sm" | "md" | "lg",
}

const contained = (max?: string) => {
    if (max === "sm") return css`max-width: 600px !important;`;
    if (max === "md") return css`max-width: 900px !important;`;
    if (max === "lg") return css`max-width: 1200px !important;`;
    return css`max-width: 1200px;`
}

const Container = styled(Nqabanqaba) <ContainerProps>`
    ${({ maxWidth }) => contained(maxWidth)};
    margin: 0 auto;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
`


interface CenterProps {
    align?: string,
    justify?: string,
    flex?: string
}

const Center = ({ align, justify, flex }: CenterProps) => {
    return css`
        display: ${flex ? flex : 'flex'};
        align-items: ${align ? align : 'center'};
        justify-content: ${justify ? justify : 'center'};
    `
}

const SSROnly = css`
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;  /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
`

const SSROnlyFocusable = css`
    clip: auto !important;
	-webkit-clip-path: none !important;
	clip-path: none !important;
	height: auto !important;
	margin: auto !important;
	overflow: visible !important;
	width: auto !important;
	white-space: normal !important;
`


export { Container, Center, Nqabanqaba, SSROnly, SSROnlyFocusable };