import React, { FC } from 'react';
import { SxVals } from 'src/utils/NewUtil';
import styled from 'styled-components';
import { MmascoUniversalInterface } from '../../../interfaces';
// import { SxQueries } from '../../../utils';

interface Props extends MmascoUniversalInterface<
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2" | "caption" | "p"
> { }

const Mmasco = styled.p<Props>`
    ${(props) => SxVals(props.sx)}
`

const Typography: FC<Props> = (props) => {
  return (
    <Mmasco
      {...props}
      as={props.variant !== undefined ? props.variant : "p"}
    >
      {props.children}
    </Mmasco>
  )
}

export default Typography;