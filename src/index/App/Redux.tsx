import React, { FC } from 'react';
import { styled, Text } from '@atlasgroup/react-atlantic';
import { Center } from './shared/Center';
import { Column } from './shared/Column';
import { Container } from '../../shared/Container';

import { ReduxImpl } from './Redux/ReduxImpl';

export interface ReduxProps {}
export type ReduxType = FC<ReduxProps>;

export const Redux: ReduxType = () => {
    return (
        <StyledContainer>
            <Column>
                <StyledTitle>Redux useSelector ⚛️</StyledTitle>
                <Center justify={false} align={false}>
                    <ReduxImpl />
                </Center>
            </Column>
        </StyledContainer>
    );
};

const StyledContainer = styled(Container)``;

const StyledTitle = styled(Text)`
    font-size: 64px;
    font-weight: 'bold';
    color: ${({ theme }) => theme.color.text.beta};
`;
