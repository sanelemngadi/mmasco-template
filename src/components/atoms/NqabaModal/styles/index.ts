import styled from "styled-components"
import { MmascoUniversalInterface } from "../../../../interfaces"
import { SxQueries } from "../../../../utils"

export interface Props extends MmascoUniversalInterface<string> {
    open: boolean
}

export const BnB = styled.div<Props>`
    display: ${(props) => props.open ? "block" : 'none'};
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255 255 255 / 96%);
    padding: .5rem;
    z-index: 300;
    overflow: auto;
    padding: 1rem;
    
    
    ${SxQueries}
`