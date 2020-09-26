import React, { FC } from 'react';
import { styled, Text } from '@atlasgroup/react-atlantic';
import { Center } from '../../shared/Center';
import { Column } from './shared/Column';
import gql from './ApolloState/graphql.png';
import { Notes } from 'spectacle';

export interface ApolloStateProps {}
export type ApolloStateType = ReturnType<FC<ApolloStateProps>>;

const StyledTitle = styled(Text)`
    font-size: 64px;
    font-weight: 'bold';
    color: ${({ theme }) => theme.color.text.beta};
`;

const StyledContext = styled.img.attrs({
    src: gql,
})`
    width: 600px;
    border-radius: ${({ theme }) => theme.radius};
`;

export const ApolloState: ApolloStateType = (
    <Column>
        <StyledTitle>
            <Center>apollo-link-state 🚀</Center>
        </StyledTitle>

        <Center>
            <StyledContext />
        </Center>
        <Notes>State nad apollo cache</Notes>
    </Column>
);
