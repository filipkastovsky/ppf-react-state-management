import React, { FC } from 'react';
import { styled } from '@atlasgroup/react-atlantic';
import { Center } from '../../shared/Center';
import context from './Context/context.jpg';

export interface ContextProps {}
export type ContextType = ReturnType<FC<ContextProps>>;

const StyledContext = styled.img.attrs({
    src: context,
})`
    width: 1000px;
    border-radius: ${({ theme }) => theme.radius};
`;

export const Context: ContextType = (
    <Center align justify>
        <StyledContext />
    </Center>
);
