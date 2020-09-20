import React, { FC } from 'react';
import { styled, Text } from '@atlasgroup/react-atlantic';
import { Center } from './shared/Center';

import { Appear } from './shared/Appear';
import { Container } from '../../shared/Container';
import reducer from './ReduxIntro/reducer.png';
import action from './ReduxIntro/action.png';
import reduxLogo from './ReduxIntro/redux-logo.png';
import { Column } from './shared/Column';

export interface ReduxIntroProps {}
export type ReduxIntroType = FC<ReduxIntroProps>;

export const ReduxIntro: ReduxIntroType = () => {
    return (
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
};

const StyledTitle = styled(Text)`
    font-size: 64px;
    font-weight: 'bold';
    color: ${({ theme }) => theme.color.text.beta};
`;

const StyledReducerImg = styled.img.attrs({
    src: reducer,
})`
    width: 400px;
    border-radius: ${({ theme }) => theme.radius};
`;

const StyledActionImg = styled.img.attrs({
    src: action,
})`
    width: 400px;
    border-radius: ${({ theme }) => theme.radius};
`;

const StyledReduxLogo = styled.img.attrs({
    src: reduxLogo,
})`
    width: 100px;
    margin: 0 0 0 40px;
`;
