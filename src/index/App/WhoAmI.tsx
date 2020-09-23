import React, { FC } from 'react';
import { styled, Text } from '@atlasgroup/react-atlantic';
import ts from './WhoAmI/typescript_logo.svg';
import tatry1 from './WhoAmI/tatry1.jpg';
import tatry2 from './WhoAmI/tatry2.jpg';
import mcr2020 from './WhoAmI/mcr2020.jpg';
import react from './shared/react-icon.svg';
import { Center } from '../../shared/Center';
import { Column } from './shared/Column';
import { Appear } from '../../shared/Appear';
import { Container } from '../../shared/Container';

export interface WhoAmIProps {}
export type WhoAmIType = ReturnType<FC<WhoAmIProps>>;

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

const StyledTsLogo = styled.img.attrs({
    src: ts,
})`
    width: 35px;
    margin: 0 25px 0 0;
`;

const StyledReactLogo = styled.img.attrs({
    src: react,
})`
    width: 60px;
    margin: 0 10px 0 10px;
`;

const StyledImg0 = styled.img.attrs({
    src: tatry2,
})`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin: 0 0 0 0px;
`;
const StyledImg1 = styled.img.attrs({
    src: tatry1,
})`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin: -100px -300px 0 0;
`;

const StyledImg2 = styled.img.attrs({
    src: mcr2020,
})`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin: -100px 0 0 0;
`;

export const WhoAmI: WhoAmIType = (
    <Container>
        <Column>
            <StyledTitle>whoami</StyledTitle>
            <Center>
                <Column>
                    <Appear elementNum={0}>
                        <StyledText>
                            <Center>
                                <StyledTsLogo /> + <StyledReactLogo />= ❤️
                            </Center>
                        </StyledText>
                    </Appear>
                    <Appear elementNum={1}>
                        <StyledText>
                            <Center>Nothing is impossible 💪</Center>
                        </StyledText>
                    </Appear>
                    <Appear elementNum={4}>
                        <StyledText>
                            <Center>There is never enough coffee ☕</Center>
                        </StyledText>
                    </Appear>
                    <Appear elementNum={5}>
                        <StyledText>
                            <Center>Dark mode everything 🌙</Center>
                        </StyledText>
                    </Appear>
                    <Appear elementNum={7}>
                        <StyledText>
                            <Center>A guy who 🏃 a lot </Center>
                        </StyledText>
                    </Appear>
                </Column>
            </Center>
        </Column>

        <Center justify direction="column">
            <Appear elementNum={2}>
                <StyledImg0 />
            </Appear>
            <Appear elementNum={3}>
                <StyledImg1 />
            </Appear>
            <Appear elementNum={6}>
                <StyledImg2 />
            </Appear>
        </Center>
    </Container>
);
