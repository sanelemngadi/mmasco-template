import styled from "styled-components";
import Box from "../../components/atoms/Box";
import Typography from "../../components/atoms/Typography";
import { projectFonts } from "../theme";

export const Text = styled(Typography)`
    font-family: ${projectFonts.primary};
`;

export const Wrapper = styled(Box)`
    max-width: 738px;
    margin: 1rem auto;
`