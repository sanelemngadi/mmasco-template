import React, { FC, useEffect } from 'react';
import { Mmasco, Props } from './styles';

const NqabaModal: FC<Props> = (props) => {
    useEffect(() => {
        if (props.open) {
            document.body.style.height = '100vh';
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.height = 'unset';
            document.body.style.overflow = 'unset';
        }
    }, [props.open]);

    return (
        <Mmasco {...props}
            aria-labelledby="Frequently asked question"
            aria-describedby="To avoid asking the same questions all over again read the frequently asked question"
        >
            {props.children}
        </Mmasco>
    )
}

export default NqabaModal;