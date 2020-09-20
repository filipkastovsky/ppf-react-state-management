import React, { FC } from 'react';
import { styled } from '@atlasgroup/react-atlantic';
import { Center } from './shared/Center';
import state from './MutableState/mutable-state.png';

export interface MutableStateProps {}
export type MutableStateType = FC<MutableStateProps>;

export const MutableState: MutableStateType = () => {
    return (
        <Center justify align>
            <StyledMutableState />
        </Center>
    );
};

const StyledMutableState = styled.img.attrs({
    src: state,
})`
    width: 600px;
    border-radius: ${({ theme }) => theme.radius};
`;
