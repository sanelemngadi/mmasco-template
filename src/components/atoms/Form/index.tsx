import React, { FC } from 'react';
import { SxVals } from 'src/utils/NewUtil';
import styled from 'styled-components';
import { MmascoUniversalInterface } from '../../../interfaces';
// import { SxQueries } from '../../../utils';

interface Props extends MmascoUniversalInterface<string> {
  target?: string,
  action?: string,
}

const Wrapper = styled.form<Props>`
    ${(props) => SxVals(props.sx)}
`

const Form: FC<Props> = (props) => {
  return (
    <Wrapper {...props}
    >
      {props.children}
    </Wrapper>
  )
}

export default Form