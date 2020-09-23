import React, { FC } from 'react';
import { styled, Text } from '@atlasgroup/react-atlantic';
import { Center } from '../../shared/Center';
import { Column } from './shared/Column';
import { Container } from '../../shared/Container';
import { ClassImpl } from './Class/ClassImpl';

export interface ClassProps {}
export type ClassType = ReturnType<FC<ClassProps>>;

const StyledContainer = styled(Container)``;

const StyledTitle = styled(Text)`
    font-size: 64px;
    font-weight: 'bold';
    color: ${({ theme }) => theme.color.text.beta};
`;

export const Class: ClassType = (
    <StyledContainer>
        <Column>
            <StyledTitle>Vanilla class 🍦</StyledTitle>
            <Center justify={false} align={false}>
                <ClassImpl />
            </Center>
        </Column>
    </StyledContainer>
);
