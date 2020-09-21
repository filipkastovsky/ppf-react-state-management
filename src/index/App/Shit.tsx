import React, { FC } from 'react';
import { styled, Text } from '@atlasgroup/react-atlantic';
import { Center } from './shared/Center';

export interface ShitProps {}
export type ShitType = ReturnType<FC<ShitProps>>;

const StyledTitle = styled(Text)`
    font-size: 248px;
    font-weight: 'bold';
`;

export const Shit: ShitType = (
    <Center justify align>
        <StyledTitle>💩</StyledTitle>
    </Center>
);
