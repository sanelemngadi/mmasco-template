import React, { FC } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

import { projectColors, projectFonts } from '../styles/theme';
import styled from 'styled-components';

import { CircleOnAnimation } from 'src/animations/keyframes';

interface Props {
    router: any,
    href: string,
    children?: JSX.Element,
    link: string
}

const Container = styled.div <{ active: number }>`
    color: ${({ active }) => active ? projectColors.tertiary : projectColors.primary};
`



const Anchor = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    text-decoration: none;
    color: ${projectColors.primary};
    font-family: ${projectFonts.primary};
    transition: transform 0.2s ease-in-out;

    height: 40px;
    padding: .5rem 1rem;
    font-size: 16px;
    user-select: none;
    text-transform: uppercase;
    background-color: #fff;
    border-radius: 4px;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    position: relative;
    
    &:hover{
        background-color: rgba(0, 0, 0, 0.04);
    }
    &:active{
        transform: scale(0.95);
        transition: transform 0.2s ease-in-out;
    }

    &:hover::after{
        content: '';
        display: inline-flex;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        user-select: none;
        animation: ${CircleOnAnimation} 0.5s ease-in forwards;
    }
`

const ActiveLink: FC<Props> = ({ router, href, link }) => {

    const isActive = router.pathname === href || router.asPath === href;
    return (
        <Container active={isActive ? 1 : 0}>
            <Link
                href={href}
                passHref
                prefetch={false}
            >
                <Anchor>{link}</Anchor>
            </Link>
        </Container>
    )
}

export default withRouter(ActiveLink)