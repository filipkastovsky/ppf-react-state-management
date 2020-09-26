import React, { FC } from 'react';
import { styled, Text } from '@atlasgroup/react-atlantic';
import { Center } from '../../shared/Center';
import { Column } from './shared/Column';
import zustand from './Zustand/zustand.jpg';

export interface ZustandProps {}
export type ZustandType = ReturnType<FC<ZustandProps>>;

const StyledTitle = styled(Text)`
    font-size: 64px;
    font-weight: 'bold';
    color: ${({ theme }) => theme.color.text.beta};
`;

const StyledContext = styled.img.attrs({
    src: zustand,
})`
    width: 600px;
    border-radius: ${({ theme }) => theme.radius};
`;

export const Zustand: ZustandType = (
    <Column>
        <StyledTitle>
            <Center>Zustand 🐻</Center>
        </StyledTitle>

        <Center>
            <StyledContext />
        </Center>
    </Column>
);
