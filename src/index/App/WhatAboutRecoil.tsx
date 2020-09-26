import React, { FC } from 'react';
import { styled, Text } from '@atlasgroup/react-atlantic';
import { Center } from '../../shared/Center';

export interface WhatAboutRecoilProps {}
export type WhatAboutRecoilType = ReturnType<FC<WhatAboutRecoilProps>>;

const StyledTitle = styled(Text)`
    font-size: 64px;
    font-weight: 'bold';
`;

export const WhatAboutRecoil: WhatAboutRecoilType = (
    <Center justify align>
        <StyledTitle>what about recoil?</StyledTitle>
    </Center>
);
