import styled from "styled-components";
import Grid from "../../components/atoms/Grid";
import Typography from "../../components/atoms/Typography";
import { projectColors } from "../theme";


export const ItemGrid = styled(Grid)`
    color: #D9D9D9;
    padding: 20px;
`

export const Headings = styled(Typography)`
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 500;
    color: ${projectColors.secondary} !important;
    margin-bottom: 16px;
`

export const MapLink = styled.a`
    display: inline-flex;
    font-size: 14px;
    font-weight: 300;
    text-decoration: underline;
    color: #D9D9D9;
    cursor: pointer;
    margin-right: 16px;
`
