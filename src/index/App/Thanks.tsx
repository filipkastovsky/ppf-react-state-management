import React, { FC } from 'react';
import { styled, Text } from '@atlasgroup/react-atlantic';
import { Center } from '../../shared/Center';

export interface ThanksProps {}
export type ThanksType = ReturnType<FC<ThanksProps>>;

const StyledTitle = styled(Text)`
    font-size: 64px;
    font-weight: 'bold';
`;

export const Thanks: ThanksType = (
    <Center justify align>
        <StyledTitle>Thanks for listening 👋</StyledTitle>
    </Center>
);
