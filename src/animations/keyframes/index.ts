import { keyframes } from "styled-components";

export const CircleOnAnimation = keyframes`
  from{
    clip-path: circle(0% at 50% 50%);
    background-color: rgba(0 0 0 / 15%);
  }
  to{
    clip-path: circle(100.0% at 50% 50%);
    background-color: rgba(0 0 0 / 15%);
  }
`