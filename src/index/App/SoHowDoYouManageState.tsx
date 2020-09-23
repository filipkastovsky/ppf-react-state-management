import React, { FC } from 'react';
import { styled, Text } from '@atlasgroup/react-atlantic';
import { Center } from '../../shared/Center';

export interface SoHowDoYouManageStateProps {}
export type SoHowDoYouManageStateType = ReturnType<
    FC<SoHowDoYouManageStateProps>
>;

const StyledTitle = styled(Text)`
    font-size: 64px;
    font-weight: 'bold';
`;

export const SoHowDoYouManageState: SoHowDoYouManageStateType = (
    <Center justify align>
        <StyledTitle>So how do you manage state properly?</StyledTitle>
    </Center>
);
