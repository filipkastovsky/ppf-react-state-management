import React, { FC } from 'react';
import { styled, Text } from '@atlasgroup/react-atlantic';
import { Center } from './shared/Center';
import { Column } from './shared/Column';
import { Container } from '../../shared/Container';
import { MobxImpl } from './Mobx/MobxImpl';

export interface MobxProps {}
export type MobxType = ReturnType<FC<MobxProps>>;

const StyledContainer = styled(Container)``;

const StyledTitle = styled(Text)`
    font-size: 64px;
    font-weight: 'bold';
    color: ${({ theme }) => theme.color.text.beta};
`;

export const Mobx: MobxType = (
    <StyledContainer>
        <Column>
            <StyledTitle>Mobx + Context ❤️🎇</StyledTitle>
            <Center justify={false} align={false}>
                <MobxImpl />
            </Center>
        </Column>
    </StyledContainer>
);
