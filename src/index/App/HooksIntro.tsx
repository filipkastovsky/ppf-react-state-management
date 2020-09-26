import React, { FC } from 'react';
import { styled, Text } from '@atlasgroup/react-atlantic';
import { Center } from '../../shared/Center';
import { Column } from './shared/Column';
import useStateImg from './HooksIntro/useState.png';
import useReducerImg from './HooksIntro/useReducer.png';

export interface HooksIntroProps {}
export type HooksIntroType = ReturnType<FC<HooksIntroProps>>;

const StyledTitle = styled(Text)`
    font-size: 64px;
    font-weight: 'bold';
    color: ${({ theme }) => theme.color.text.beta};
`;

const StyledUseState = styled.img.attrs({
    src: useStateImg,
})`
    width: 600px;
    border-radius: ${({ theme }) => theme.radius};
`;
const StyledUseReducer = styled.img.attrs({
    src: useReducerImg,
})`
    width: 600px;
    margin: 0 0 0 40px;
    border-radius: ${({ theme }) => theme.radius};
`;

export const HooksIntro: HooksIntroType = (
    <Column>
        <StyledTitle>
            <Center>React Hooks 🥂👏</Center>
        </StyledTitle>

        <Center>
            <StyledUseState />
            <StyledUseReducer />
        </Center>
    </Column>
);
