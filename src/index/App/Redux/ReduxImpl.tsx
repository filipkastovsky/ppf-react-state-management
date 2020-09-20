import { styled } from '@atlasgroup/react-atlantic';
import React, { FC } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { createStore } from 'redux';
import { Form } from './ReduxImpl/Form';
import { List } from './ReduxImpl/List';

import { rootReducer } from './shared/reducers';

export interface AppProps {}
export type AppType = FC<AppProps>;

export const store = createStore(rootReducer);

export const ReduxImpl: AppType = () => {
    return (
        <StoreProvider store={store}>
            <Container>
                <Form />
                <List />
            </Container>
        </StoreProvider>
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
