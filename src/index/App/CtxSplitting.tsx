import React, { FC } from 'react';
import { styled, Text } from '@atlasgroup/react-atlantic';
import { Center } from '../../shared/Center';

import { Appear } from '../../shared/Appear';
import { Container } from '../../shared/Container';
import providerHell from '../../shared/provider-hell.png';

export interface CtxSplittingProps {}
export type CtxSplittingType = ReturnType<FC<CtxSplittingProps>>;

const StyledTitle = styled(Text)`
    font-size: 64px;
    font-weight: 'bold';
    color: ${({ theme }) => theme.color.text.beta};
`;

const StyledCtxSplitting = styled.img.attrs({
    src: providerHell,
})`
    width: 400px;
    border-radius: ${({ theme }) => theme.radius};
`;

export const CtxSplitting: CtxSplittingType = (
    <Container>
        <Center>
            <StyledTitle>ctx splitting</StyledTitle>
        </Center>
        <Center>
            <Appear elementNum={0}>
                <StyledCtxSplitting />
            </Appear>
        </Center>
    </Container>
);
