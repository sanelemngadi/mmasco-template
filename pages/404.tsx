import React, { FC } from 'react';
import Link from 'next/link';
import { projectColors } from '../src/styles/theme';

import Box from '@mmasco-atoms/Box';
import Container from '@mmasco-atoms/Container';
import Typography from '@mmasco-atoms/Typography';

const Page404: FC = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: '100vh',
                position: "fixed",
                top: "0",
                left: "0",
                background: "white"
            }}
        >
            <Container maxWidth='sm'
                sx={{
                    width: "100%",
                    height: '100%',
                    display: "flex",
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: "column"
                }}
            >
                <Box
                    sx={{
                        fontSize: "48px",
                        display: "flex",
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: "red",

                        ['a']: {
                            fontSize: "32px",
                            display: "inline-flex",
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: projectColors.secondary
                        }
                    }}
                >
                    <Link href={"/"}><a>Home</a></Link>&nbsp; - &nbsp;<Typography>Error</Typography>
                </Box>
                <Typography
                    variant="h3"
                    sx={{
                        color: projectColors.tertiary,
                        marginTop: "1rem",
                        textAlign: 'center',
                    }}
                >Seems like your entered the wrong url to Nqabanqaba Page</Typography>
                <Typography
                    variant="h1"
                    sx={{
                        color: projectColors.dark,
                        marginTop: "1.5rem",
                        textAlign: 'center',
                        ['a']: {
                            color: "blueviolet"
                        }
                    }}
                >Check Out <Link href={"/our-rooms"}><a>Our Rooms</a></Link> instead</Typography>
            </Container>
        </Box>
    )
}

export default Page404;