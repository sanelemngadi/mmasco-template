import React, { FC } from 'react';
import { Nqaba, Props } from './styles';

const Grid: FC<Props> = (props) => {
    return (
        <Nqaba
            {...props}
        >
            {props.children}
        </Nqaba>
    )
}

export default Grid;