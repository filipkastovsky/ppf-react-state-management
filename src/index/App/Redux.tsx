import React, { FC } from 'react';
import { styled, Text } from '@atlasgroup/react-atlantic';
import { Center } from '../../shared/Center';
import { Column } from './shared/Column';
import { Container } from '../../shared/Container';
import { ReduxImpl } from './Redux/ReduxImpl';

export interface ReduxProps {}
export type ReduxType = ReturnType<FC<ReduxProps>>;

const StyledContainer = styled(Container)``;

const StyledTitle = styled(Text)`
    font-size: 64px;
    font-weight: 'bold';
    color: ${({ theme }) => theme.color.text.beta};
`;

export const Redux: ReduxType = (
    <StyledContainer>
        <Column>
            <StyledTitle>Redux ⚛️</StyledTitle>
            <Center justify={false} align={false}>
                <ReduxImpl />
            </Center>
        </Column>
    </StyledContainer>
);
