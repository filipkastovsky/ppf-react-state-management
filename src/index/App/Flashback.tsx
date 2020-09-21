import React, { FC } from 'react';
import { styled, Text } from '@atlasgroup/react-atlantic';
import { Center } from './shared/Center';
import { Column } from './shared/Column';
import { Appear } from './shared/Appear';
import { Container } from '../../shared/Container';
import classImpl from './Flashback/class.png';

export interface FlashbackProps {}
export type FlashbackType = ReturnType<FC<FlashbackProps>>;

const StyledContainer = styled(Container)``;

const StyledTitle = styled(Text)`
    font-size: 64px;
    font-weight: 'bold';
    color: ${({ theme }) => theme.color.text.beta};
`;

const StyledImg = styled.img.attrs({
    src: classImpl,
})`
    height: 700px;
`;

export const Flashback: FlashbackType = (
    <StyledContainer>
        <Center>
            <StyledTitle>Zpátky do minulosti...</StyledTitle>
        </Center>
        <Center>
            <Column>
                <Appear elementNum={0}>
                    <StyledImg />
                </Appear>
            </Column>
        </Center>
    </StyledContainer>
);
