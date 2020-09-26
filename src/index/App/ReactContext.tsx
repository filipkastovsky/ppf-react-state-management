import React, { FC } from 'react';
import { styled, Text } from '@atlasgroup/react-atlantic';
import { Center } from '../../shared/Center';
import { Column } from './shared/Column';
import context from './ReactContext/context.png';

export interface ReactContextProps {}
export type ReactContextType = ReturnType<FC<ReactContextProps>>;

const StyledTitle = styled(Text)`
    font-size: 64px;
    font-weight: 'bold';
    color: ${({ theme }) => theme.color.text.beta};
`;

const StyledContext = styled.img.attrs({
    src: context,
})`
    width: 600px;
    border-radius: ${({ theme }) => theme.radius};
`;

export const ReactContext: ReactContextType = (
    <Column>
        <StyledTitle>
            <Center>New Context API 🥂👏</Center>
        </StyledTitle>

        <Center>
            <StyledContext />
        </Center>
    </Column>
);
