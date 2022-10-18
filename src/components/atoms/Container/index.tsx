import React, { FC, forwardRef, HTMLProps } from 'react';
import { SxVals } from 'src/utils/NewUtil';
import styled, { css } from 'styled-components';
import { MmascoUniversalInterface } from '../../../interfaces';
// import { SxQueries } from '../../../utils';

interface Props extends MmascoUniversalInterface<string> {
  maxWidth?: "sm" | "md" | "lg",
}

const contained = (maxW?: "sm" | "md" | "lg") => {
  switch (maxW) {
    case "sm":
      return css`max-width: 600px;`;
    case "md":
      return css`max-width: 900px;`;
    case "lg":
      return css`max-width: 1200px;`;
    default:
      return css`max-width: 1200px;`;
  }
}

const Mmasco = styled.div<Props>`
    margin: 0 auto;
    padding: 1px 0.5rem ;
    
    ${({ maxWidth }) => contained(maxWidth)};

    ${(props) => SxVals(props.sx)}
`

const Container = forwardRef<any, Props>((props, ref) => {
  return (
    <Mmasco {...props}
      ref={ref}
      as="div"
    >
      {props.children}
    </Mmasco>
  )
})

export default Container;