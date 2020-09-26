import React, { FC } from 'react';
import { styled, Text } from '@atlasgroup/react-atlantic';
import { Center } from '../../shared/Center';

export interface SomeRealSolutionsProps {}
export type SomeRealSolutionsType = ReturnType<FC<SomeRealSolutionsProps>>;

const StyledTitle = styled(Text)`
    font-size: 64px;
    font-weight: 'bold';
`;

export const SomeRealSolutions: SomeRealSolutionsType = (
    <Center justify align>
        <StyledTitle>easy scalable solutions</StyledTitle>
    </Center>
);
