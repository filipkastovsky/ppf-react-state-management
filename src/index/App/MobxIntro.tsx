import React, { FC } from 'react';
import { styled, Text } from '@atlasgroup/react-atlantic';
import { Center } from './shared/Center';

import { Appear } from './shared/Appear';
import { Container } from '../../shared/Container';
import noteStore from './MobxIntro/note-store.png';
import mobxLogo from './MobxIntro/mobx-logo.png';
import { Column } from './shared/Column';

export interface MobxIntroProps {}
export type MobxIntroType = ReturnType<FC<MobxIntroProps>>;

const StyledTitle = styled(Text)`
    font-size: 64px;
    font-weight: 'bold';
    color: ${({ theme }) => theme.color.text.beta};
`;

const StyledImg = styled.img.attrs({
    src: noteStore,
})`
    width: 400px;
    border-radius: ${({ theme }) => theme.radius};
`;

const StyledMobxLogo = styled.img.attrs({
    src: mobxLogo,
})`
    width: 100px;
    margin: 0 0 0 40px;
`;

export const MobxIntro: MobxIntroType = (
    <Container>
        <Center>
            <StyledTitle>
                <Center>
                    Mobx <StyledMobxLogo />
                </Center>
            </StyledTitle>
        </Center>
        <Center>
            <Column>
                <Appear elementNum={0}>
                    <StyledImg />
                </Appear>
            </Column>
        </Center>
    </Container>
);
