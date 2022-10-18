import React, { memo } from 'react';
import styled from 'styled-components';
import { projectColors } from '../../../styles/theme';


const Header = styled.h1`
    color: ${projectColors.secondary};
    text-shadow: -1px -1px 0 ${projectColors.primary}, 0 -1px 0 ${projectColors.primary}, 1px -1px 0 ${projectColors.primary}, 1px 0 0 ${projectColors.primary}, 1px 1px 0 ${projectColors.primary}, 0 1px 0 ${projectColors.primary}, -1px 1px 0 ${projectColors.primary}, -1px 0 0 ${projectColors.primary};

    text-align: center;
    margin-top: 24px;
    margin-left: 0px;
    margin-bottom: 16px;
    flex-wrap: wrap;
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.1;
    
    @media (min-width: 768px) {
        font-size: 4rem;
        
        margin-top: 24px;
        margin-left: 24px;
    }
    
    
    @media (min-width: 992px) {
        margin-top: 88px;
    }
`
const Heading = () => {
    return (
        <Header>
            Welcome to Nqabanqaba BnB
            <div></div>
        </Header>
    )
}

export default memo(Heading);