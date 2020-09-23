import React, { FC } from 'react';
import { styled, Text } from '@atlasgroup/react-atlantic';
import { Center } from '../../shared/Center';

import { Appear } from '../../shared/Appear';
import { Container } from '../../shared/Container';
import memo from './Memo/memo.png';
import usememo from './Memo/useMemo.png';
import { Column } from './shared/Column';

export interface MemoProps {}
export type MemoType = ReturnType<FC<MemoProps>>;

const StyledTitle = styled(Text)`
    font-size: 64px;
    font-weight: 'bold';
    color: ${({ theme }) => theme.color.text.beta};
`;

const StyledMemo = styled.img.attrs({
    src: memo,
})`
    width: 400px;
    border-radius: ${({ theme }) => theme.radius};
`;
const StyledUseMemo = styled.img.attrs({
    src: usememo,
})`
    width: 400px;
    border-radius: ${({ theme }) => theme.radius};
`;

export const Memo: MemoType = (
    <Container>
        <Center>
            <StyledTitle>memoization</StyledTitle>
        </Center>
        <Center>
            <Column>
                <Appear elementNum={0}>
                    <StyledUseMemo />
                </Appear>
                <Appear elementNum={1}>
                    <StyledMemo />
                </Appear>
            </Column>
        </Center>
    </Container>
);
