import React, { FC } from 'react';
import { styled, Text } from '@atlasgroup/react-atlantic';
import { Center } from './shared/Center';

import { Appear } from './shared/Appear';
import { Container } from '../../shared/Container';
import google from './LetsGoogle/google-redux.jpg';

export interface LetsGoogleProps {}
export type LetsGoogleType = FC<LetsGoogleProps>;

export const LetsGoogle: LetsGoogleType = () => {
    return (
        <Container>
            <Center>
                <StyledTitle>Lets google!</StyledTitle>
            </Center>
            <Center>
                <Appear elementNum={0}>
                    <StyledImg />
                </Appear>
            </Center>
        </Container>
    );
};

const StyledTitle = styled(Text)`
    font-size: 64px;
    font-weight: 'bold';
    color: ${({ theme }) => theme.color.text.beta};
`;

const StyledImg = styled.img.attrs({
    src: google,
})`
    width: 600px;
    border-radius: ${({ theme }) => theme.radius};
`;
