import React, { FC } from 'react';
import { styled, Text } from '@atlasgroup/react-atlantic';
import { Center } from '../../shared/Center';
import { Column } from './shared/Column';
import tenLinesOfBullshit from './Hooks/tenlines.jpg';
import todoctx from './Hooks/todoctx.jpg';
import { Appear } from '../../shared/Appear';

export interface HooksProps {}
export type HooksType = ReturnType<FC<HooksProps>>;

const StyledTitle = styled(Text)`
    font-size: 64px;
    font-weight: 'bold';
    color: ${({ theme }) => theme.color.text.beta};
`;

const StyledImg = styled.img.attrs({
    src: tenLinesOfBullshit,
})`
    width: 600px;
    border-radius: ${({ theme }) => theme.radius};
`;
const StyledTodoImg = styled.img.attrs({
    src: todoctx,
})`
    width: 600px;
    margin: 0 0 0 40px;
    border-radius: ${({ theme }) => theme.radius};
`;
export const Hooks: HooksType = (
    <Column>
        <StyledTitle>
            <Center>Context + useReducer = Redux??</Center>
        </StyledTitle>

        <Center>
            <Appear elementNum={0}>
                <StyledImg />
            </Appear>
            <Appear elementNum={1}>
                <StyledTodoImg />
            </Appear>
        </Center>
    </Column>
);
