import { styled, Text } from '@atlasgroup/react-atlantic';
import React, { FC } from 'react';

import react from './shared/react-icon.svg';
import agrp from './Landing/atlas_group_logo.png';
import { Center } from '../../shared/Center';
import { Column } from './shared/Column';
import { Row } from './Landing/Row';

export interface LandingProps {}
export type LandingType = ReturnType<FC<LandingProps>>;

const StyledReactLogo = styled.img.attrs({
    src: react,
})`
    width: 100px;
    margin: 0 0 0 -15px;
`;

const StyledAgrpLogo = styled.img.attrs({
    src: agrp,
})`
    width: 250px;
    margin: 5px 0 0 15px;
`;

const StyledTitle = styled(Text)`
    font-size: 64px;
    font-weight: 'bold';
    color: ${({ theme }) => theme.color.text.beta};
`;

const StyledTitle2 = styled(Text)`
    font-size: 64px;
    font-weight: 'bold';
    color: ${({ theme }) => theme.color.text.gamma};
`;

const StyledName = styled(Text)`
    font-size: 32px;
    color: ${({ theme }) => theme.color.text.alpha};
`;
export const Landing: LandingType = (
    <Column>
        <Center>
            <Column>
                <Center>
                    <StyledTitle>The past, present and future of</StyledTitle>
                </Center>
                <Row>
                    <Center>
                        <StyledReactLogo />
                        <StyledTitle2>
                            React
                            <StyledTitle> state management</StyledTitle>
                        </StyledTitle2>
                    </Center>
                </Row>
            </Column>
        </Center>
        <StyledName>
            <Center>
                Filip Kaštovký, Frontend Dev @<StyledAgrpLogo />
            </Center>
        </StyledName>
    </Column>
);
