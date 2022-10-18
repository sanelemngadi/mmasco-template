import Box from "@mmasco-atoms/Box"
import { Center } from "src/styled.globals"
import styled from "styled-components"

export const CarouselItem = styled(Box) <{ end: boolean }>`
  width: 100%;
  height: 100%;
  background-color: #efefef;
  display: inline-block;
  margin-right: 2%;
  transition: ${({ end }) => end && 'all 200ms ease-out'};
  user-select: none;

  /* div{
    height: 100%;
    ${Center({})}
  } */
`

export const Indecators = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 40px;
  background-color: #efefef;
  transition: all 500ms ease-out;
  user-select: none;
`

export const Indecator = styled(Box) <{ idx: boolean }>`
    width: 4vw;
    height: 4vw;
    ${Center({})};
    margin-right: 2%;
    position: relative;
    border-radius: 50%;
    background-color: ${({ idx }) => idx ? 'blue' : "white"};
    border: 2px solid black;
    cursor: pointer;
    
    @media (min-width: 600px) {
        width: 1vw;
        height: 1vw;
        margin-right: .5%;
    }

    &:active{
      background-color: red;
    }
    &:hover{
      background-color: green;
    }
  
`