import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { projectFonts } from '../../../styles/theme';
import Box from '../Box';
import Typography from '../Typography';

interface Props {
    head: string,
    subHead: string,
}

const Wrapper = styled(Box)`
    max-width: 738px;
    margin: 1rem 0;
`
const SectionHeading: FC<Props> = ({ head, subHead }) => {
    return (
        <Wrapper>
            <Typography
                variant="h3"
                sx={{
                    padding: "0 1rem",
                    fontWeight: "500",
                    fontFamily: projectFonts.secondary,
                    fontSize: { xs: "24px", sm: "36px" },
                    textAlign: "center"
                }}
            >
                {head}
            </Typography>
            <Typography
                variant="h5"
                sx={{
                    padding: "0 1rem",
                    color: "#6A6A6A",
                    fontFamily: projectFonts.secondary,
                    fontSize: { xs: "16px", sm: "24px" },
                    textAlign: "center",
                    marginTop: { xs: "8px", md: "16px" },
                }}
            >
                {subHead}
            </Typography>
        </Wrapper >
    )
}

export default memo(SectionHeading);