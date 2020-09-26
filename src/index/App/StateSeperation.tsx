import React, { FC } from 'react';
import { styled, Text } from '@atlasgroup/react-atlantic';
import { Center } from '../../shared/Center';

export interface StateSeperationProps {}
export type StateSeperationType = ReturnType<FC<StateSeperationProps>>;

const StyledTitle = styled(Text)`
    font-size: 64px;
    font-weight: 'bold';
`;

export const StateSeperation: StateSeperationType = (
    <Center justify align>
        <StyledTitle>state seperation</StyledTitle>
    </Center>
);
