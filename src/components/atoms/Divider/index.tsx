import React, { FC } from 'react';
import { SxVals } from 'src/utils/NewUtil';
import styled from 'styled-components';
import { MmascoUniversalInterface } from '../../../interfaces';
// import { SxQueries } from '../../../utils';

const Wrapper = styled.hr<MmascoUniversalInterface<string>>`
    margin: 0;
    flex-shrink: 0;
    border-width: 0;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.12);
    border-bottom-width: thin;
    ${(props) => SxVals(props.sx)}
`

const Divider: FC<MmascoUniversalInterface<string>> = (props) => {
  return (
    <Wrapper {...props} variant={'hr'} />
  )
}

export default Divider