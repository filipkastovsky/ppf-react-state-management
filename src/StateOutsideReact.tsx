import React, { FC } from 'react';
import { styled, Text } from '@atlasgroup/react-atlantic';
import { Center } from './shared/Center';

import { Container } from './shared/Container';

export interface StateOutsideReactProps {}
export type StateOutsideReactType = ReturnType<FC<StateOutsideReactProps>>;

const StyledTitle = styled(Text)`
    font-size: 64px;
    font-weight: 'bold';
    color: ${({ theme }) => theme.color.text.beta};
`;

export const StateOutsideReact: StateOutsideReactType = (
    <Container>
        <Center>
            <StyledTitle>seperate state from React</StyledTitle>
        </Center>
    </Container>
);
