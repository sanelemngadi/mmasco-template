import React, { FC } from 'react';
import { SxVals } from 'src/utils/NewUtil';
import styled from 'styled-components';
import { MmascoUniversalInterface } from '../../../interfaces';
import { SxQueries } from '../../../utils';

interface Props extends MmascoUniversalInterface<string> {
  elevation?: number,
}

const Wrapper = styled.div<Props>`
  box-shadow: ${(props) => props.elevation && "0px 2px 2px -1px rgba(0 0 0 / 14%),0px 2px 3px -2px rgba(0 0 0 / 20%),0px 3px 2px -1px rgba(0 0 0 / 12%)"};
      ${(props) => SxVals(props.sx)}
`

const Paper: FC<Props | any> = (props) => {
  return (
    <Wrapper
      {...props}
      as={props.component !== undefined ? props.component : "div"}>
      {props.children}
    </Wrapper>
  )
}

export default Paper