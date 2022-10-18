import React, { FC } from 'react';
import { ButtonPropsInterface, Nqaba } from './styles';


export const IconButton: FC<ButtonPropsInterface> = (props) => {
    return (
        <Nqaba
            {...props}
            as={props.component !== undefined ? props.component : "button"}
        >
            {props.children}
        </Nqaba>
    )
}

export default IconButton;
