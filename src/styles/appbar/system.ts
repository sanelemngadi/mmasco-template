import { projectColors } from "../theme";
import styled from "styled-components";
import Box from "../../components/atoms/Box";

export const AppBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 48px;
    padding: 16px;
    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
    background-color: ${projectColors.light};
    margin: 0 auto;
    max-width: 1200px;

    @media (min-width: 900px) {
        justify-content: center;
        height: 80px;

    }
`


export const AppBarButtons = styled(Box)`
    display: none;
    flex: 2;
    justify-content: flex-end;
    align-items: center;
    width: 264px;

    @media (min-width: 900px) {
        display: flex;
    }
`;

export const DeskTopLinkList = styled.ul`
    display: none;

    @media (min-width: 900px) {
        display: block;
    }
`;

export const AllScreenLogo = styled(Box)`
    display: inline-flex;
    align-items: center;

    @media (min-width: 900px) {
        display: flex;
        flex: 1;
        justify-content: flex-start;
        align-items: unset;
    }
`;

export const AppBarMenu = styled(Box)`
    width: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 900px) {
    display: none;
}
`;