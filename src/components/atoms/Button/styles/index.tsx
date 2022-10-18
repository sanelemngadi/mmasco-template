import { CircleOnAnimation } from "src/animations/keyframes";
import { SxVals } from "src/utils/NewUtil";
import styled, { css } from "styled-components";
import { MmascoUniversalInterface } from "../../../../interfaces";
// import { SxQueries } from "../../../../utils";


interface ButtonPropsInterface extends MmascoUniversalInterface<"outlined" | "contained" | "text"> {
  type?: "button" | "submit" | "reset";
}
const onHover = css<ButtonPropsInterface>`

      background-color:${(props) => props.color === "primary" && props.theme.colors.primary};
      color:${(props) => props.color === "primary" && props.theme.colors.bgsecondary};
      background-color:${(props) => props.color === "secondary" && props.theme.colors.secondary};
      color:${(props) => props.color === "secondary" && props.theme.colors.bgsecondary};
      background-color:${(props) => props.color === "tertiary" && props.theme.colors.tertiary};
      color:${(props) => props.color === "tertiary" && props.theme.colors.light};
      

`

const Outlines = ({ variant, color, bg }: { variant?: "outlined" | "contained" | "text", color: string, bg: string }) => {
  if (variant === "outlined") {
    return css`
        border: 2px solid silver;
        &:hover{
          ${onHover};
          border: 2px solid transparent;
        }
    `
  }
  if (variant === "contained") {
    return css`
            border: 2px solid ${bg};
            background-color: ${bg};
            color: ${color};
            
            &:hover{
              ${onHover};
              border: 2px solid transparent;
              box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
            }
            &:active{
              transform: scale(0.9);
              transition: transform 0.3s ease-in-out;
            }
    `
  }
  return css`
    &:hover{
        background-color: rgba(0, 0, 0, 0.04);
    }
    &:active{
      transform: scale(0.9);
      transition: transform 0.3s ease-in-out;
    }
    `
}


export const Nqaba = styled.button<ButtonPropsInterface>`
  height: 40px;
  padding: .5rem 1rem;
  font-size: 16px;
  user-select: none;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #fff;
  border-radius: 4px;
  border: 0;
  outline: 0;
  ${(props) => Outlines({
  variant: props.variant, bg: props.theme.colors[props.color !== undefined ?
    props.color : "primary"],
  color: "white"
})}
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow: hidden;
  position: relative;

  &:hover::after{
    content: '';
    display: inline-flex;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    user-select: none;
    animation: ${CircleOnAnimation} 0.5s ease-in forwards;
  }

  ${(props) => SxVals(props.sx)}
`