import React, { FC } from 'react';
import { SxVals } from 'src/utils/NewUtil';
import styled, { css } from 'styled-components';
import { MmascoUniversalInterface } from '../../../interfaces';
import { SSROnly } from "../../../styled.globals"
// import { SxQueries } from '../../../utils';

interface Props extends MmascoUniversalInterface<string> {
    type?: string,
    label?: string,
    formType: "outlined" | "contained" | "standard",
    name?: string,
    id?: string
}

const Variant = ({ formType }: { formType: "outlined" | "contained" | "standard" }) => {
    if (formType === "outlined") {
        return css`
            border: 1px solid silver;

            &:active, &:focus{
                border: 1px solid transparent;
                outline: 1px solid black;
            }
        `
    }

    if (formType === "contained") {
        return css`
            border: 1px solid silver;

            &:active, &:focus{
                border: 1px solid transparent;
                outline: 1px solid black;
            }
        `
    }
    if (formType === "standard") {
        return css`
            border: 1px solid silver;

            &:active, &:focus{
                border: 1px solid transparent;
                outline: 1px solid black;
            }
        `
    }
}
const Mmasco = styled.div<Props>`
    ${(props) => SxVals(props.sx)}
`
const Label = styled.label<{ formType: "outlined" | "contained" | "standard" }>`
    input{
        border: none;
        height: 48px;
        width: 100%;
        padding: 1rem;
        ${(props) => Variant({ formType: props.formType })}
    }

    span{
        ${SSROnly}
    }    
`


const TextField: FC<Props> = ({ sx, formType, label, type, name, id }) => {
    return (
        <Mmasco
            sx={sx}
            formType={formType} variant="div"
        >
            <Label
                htmlFor={id}
                formType={formType}
            >
                <span>{label}</span>
                <input aria-invalid="false" type={type} name={name}
                    placeholder={label} id={id} />
            </Label>
        </Mmasco>
    )
}

export default TextField