import { styled } from '@atlasgroup/react-atlantic';
import React, { FC } from 'react';
import { Form } from './MobxImpl/Form';
import { List } from './MobxImpl/List';

export interface AppProps {}
export type AppType = FC<AppProps>;

export const MobxImpl: AppType = () => {
    return (
        <Container>
            <Form />
            <List />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    > * {
        margin: 10px;
    }
`;
