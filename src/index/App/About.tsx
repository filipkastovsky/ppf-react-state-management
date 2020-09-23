import React, { FC } from 'react';
import { styled, Text } from '@atlasgroup/react-atlantic';
import { Center } from '../../shared/Center';
import { Column } from './shared/Column';

import { Appear } from '../../shared/Appear';
import { Container } from '../../shared/Container';

export interface AboutProps {}
export type AboutType = ReturnType<FC<AboutProps>>;

const StyledTitle = styled(Text)`
    font-size: 64px;
    font-weight: 'bold';
    color: ${({ theme }) => theme.color.text.beta};
`;

const StyledText = styled(Text)`
    font-size: 32px;
    line-height: 2;
    color: ${({ theme }) => theme.color.text.alpha};
`;

const StyledTextGreen = styled(Text)`
    font-size: 32px;
    line-height: 2;
    margin: 0 15px;
    color: ${({ theme }) => theme.color.text.beta};
`;
export const About: AboutType = (
    <Container>
        <Column>
            <StyledTitle>o čem ten talk bude</StyledTitle>
            <Center>
                <Column>
                    <Appear elementNum={0}>
                        <StyledText>
                            <Center>
                                cesta vývojáře 🌴
                                <StyledTextGreen>ekosystémem</StyledTextGreen>
                                Reactu
                            </Center>
                        </StyledText>
                    </Appear>
                    <Appear elementNum={1}>
                        <StyledText>
                            <Center>
                                state at
                                <StyledTextGreen>scale</StyledTextGreen>
                                🚀
                            </Center>
                        </StyledText>
                    </Appear>
                    <Appear elementNum={2}>
                        <StyledText>
                            nejčastější
                            <StyledTextGreen>fuckupy</StyledTextGreen>☢️
                        </StyledText>
                    </Appear>
                </Column>
            </Center>
        </Column>
    </Container>
);
