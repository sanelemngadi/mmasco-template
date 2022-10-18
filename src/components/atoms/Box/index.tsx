import React, { FC, forwardRef } from 'react';
import styled from 'styled-components';
import { MmascoUniversalInterface } from '../../../interfaces';
import { SxVals } from 'src/utils/NewUtil';


const Mmasco = styled.div<MmascoUniversalInterface<string>>`
    ${(props) => SxVals(props.sx)}
`

const Box = forwardRef<HTMLDivElement, MmascoUniversalInterface<string>>((props, ref) => {

  return (
    <Mmasco {...props}
      ref={ref}
      as={props.component !== undefined ? props.component : "div"}
    >
      {props.children}
    </Mmasco>
  )
})

Box.displayName = 'Box';

export default Box;