import React, { FC } from 'react';
import { styled, Text } from '@atlasgroup/react-atlantic';
import { Center } from './shared/Center';

export interface ShitProps {}
export type ShitType = FC<ShitProps>;

export const Shit: ShitType = () => {
    return (
        <Center justify align>
            <StyledTitle>💩</StyledTitle>
        </Center>
    );
};

const StyledTitle = styled(Text)`
    font-size: 248px;
    font-weight: 'bold';
`;
