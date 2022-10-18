import React, { FC } from 'react';
import { MmascoUniversalInterface } from '../../../interfaces';
import { Nqaba } from './styles';

//this is the universal components and all the other components will inherit from this component

interface ButtonPropsInterface extends MmascoUniversalInterface<"outlined" | "contained" | "text"> {
  type?: "button" | "submit" | "reset";
}


export const Button: FC<ButtonPropsInterface> = (props) => {
  return (
    <Nqaba
      {...props}
      type={props.type !== undefined ? props.type : "button"}
      as={props.component !== undefined ? props.component : "button"}
    >
      {props.children}
    </Nqaba>
  )
}

export default Button;
