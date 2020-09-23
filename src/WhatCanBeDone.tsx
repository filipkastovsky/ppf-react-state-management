import React, { FC } from 'react';
import { styled, Text } from '@atlasgroup/react-atlantic';
import { Center } from './shared/Center';
import { Appear } from './shared/Appear';

export interface WhatCanBeDoneProps {}
export type WhatCanBeDoneType = ReturnType<FC<WhatCanBeDoneProps>>;

const StyledText = styled(Text)`
    font-size: 32px;
    font-weight: 'bold';
`;

const StyledCenter = styled(Center)`
    justify-content: space-between;
`;

export const WhatCanBeDone: WhatCanBeDoneType = (
    <StyledCenter align>
        <Appear elementNum={0}>
            <StyledText>memoization</StyledText>
        </Appear>
        <Appear elementNum={1}>
            <StyledText>context splitting</StyledText>
        </Appear>
        <Appear elementNum={2}>
            <StyledText>selector system</StyledText>
        </Appear>
    </StyledCenter>
);
