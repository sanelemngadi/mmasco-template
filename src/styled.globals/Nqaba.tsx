import React, { FC } from 'react';
import { MmascoUniversalInterface } from 'src/interfaces';
import { SxQueries } from 'src/utils';
import styled from 'styled-components';


const BnB = styled.div<MmascoUniversalInterface<string>>`
  ${SxQueries}
`

export const Nqabanqaba: FC<MmascoUniversalInterface<string>> = (props) => {
  return (
    <BnB
      sx={props.sx}
      as={props.component !== undefined ? props.component : "div"}
    >
      {props.children}
    </BnB>
  )
}

export default Nqabanqaba;
