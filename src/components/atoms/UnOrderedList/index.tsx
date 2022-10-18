import React, { FC } from 'react';
import { SxVals } from 'src/utils/NewUtil';
import styled from 'styled-components';
import { MmascoUniversalInterface } from '../../../interfaces';
// import { SxQueries } from '../../../utils';

const Mmasco = styled.ul<MmascoUniversalInterface<string>>`
    ${(props) => SxVals(props.sx)}
`

const UnOrderedList: FC<MmascoUniversalInterface<string>> = (props) => {
  return (
    <Mmasco {...props}
    >
      {props.children}
    </Mmasco>
  )
}

export default UnOrderedList