import styled from "styled-components";
import Box from "../../components/atoms/Box";
import { projectColors } from "../theme";

//the container
// export const AppBarContainer = styled(Box)`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 16px;
//     position: sticky !important;
//     top: 0;
//     left: 0;
//     background-color:${projectColors.light};
//     height: 80px;
//     margin: 0 auto;
// `

// export const AppBarButtons = styled.div`
//     display: flex;
//     flex: 2;
//     justify-content:  flex-end;
//     align-items: center;
//     width: 264px;
// `

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

export const UnOrderedList = styled.ul`
    display: none;
    flex: 3;

    @media (min-width: 900px) {
        display: flex;
        justify-content:  flex-start;
        align-items: center;
    }
`;

export const LinkItems = styled.li`
    list-style: none;
`


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