import React, { FC } from 'react';
import { styled, Text } from '@atlasgroup/react-atlantic';
import { Center } from '../../shared/Center';

import { Appear } from '../../shared/Appear';
import { Container } from '../../shared/Container';
import reducer from './ReduxIntro/reducer.png';
import action from './ReduxIntro/action.png';
import reduxLogo from './ReduxIntro/redux-logo.png';
import { Column } from './shared/Column';

export interface ReduxIntroProps {}
export type ReduxIntroType = ReturnType<FC<ReduxIntroProps>>;

const StyledTitle = styled(Text)`
    font-size: 64px;
    font-weight: 'bold';
    color: ${({ theme }) => theme.color.text.beta};
`;

const StyledReducerImg = styled.img.attrs({
    src: reducer,
})`
    width: 600px;
    border-radius: ${({ theme }) => theme.radius};
`;

const StyledActionImg = styled.img.attrs({
    src: action,
})`
    width: 600px;
    border-radius: ${({ theme }) => theme.radius};
`;

const StyledReduxLogo = styled.img.attrs({
    src: reduxLogo,
})`
    width: 100px;
    margin: 0 0 0 40px;
`;

export const ReduxIntro: ReduxIntroType = (
    <Container>
        <Center>
            <StyledTitle>
                <Center>
                    Redux <StyledReduxLogo />
                </Center>
            </StyledTitle>
        </Center>
        <Center>
            <Column>
                <Appear elementNum={0}>
                    <StyledReducerImg />
                </Appear>
                <Appear elementNum={1}>
                    <StyledActionImg />
                </Appear>
            </Column>
        </Center>
    </Container>
);
