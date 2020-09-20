import { styled } from '@atlasgroup/react-atlantic';
import React, { Component } from 'react';
import { Form, FormProps } from './ClassImpl/Form';
import { List, ListProps } from './ClassImpl/List';
import { NoteType } from './shared/types';

type AppState = {
    formProps: FormProps;
    listProps: ListProps;
};

export class ClassImpl extends Component<{}, AppState> {
    state: AppState = {
        formProps: {
            inputProps: { value: 'ahoj' },
            buttonProps: {},
        },
        listProps: { list: [] },
    };

    formHandlers: Partial<AppState['formProps']> = {
        inputHandlers: {
            onChange: (e) => {
                this.setState({
                    formProps: {
                        ...this.state.formProps,
                        inputProps: {
                            ...this.state.formProps.inputProps,
                            value: e.currentTarget.value,
                        },
                    },
                });
            },
        },
        buttonHandlers: {
            onClick: () => {
                if (this.state.formProps.inputProps.value) {
                    const newNote: NoteType = {
                        id: `${Math.random()}`,
                        content: this.state.formProps.inputProps
                            .value as string,
                    };
                    this.setState({
                        listProps: {
                            ...this.state.listProps,
                            list: [...this.state.listProps.list, newNote],
                        },
                    });
                }
            },
        },
    };

    render() {
        return (
            <Container>
                <Form {...this.state.formProps} {...this.formHandlers} />
                <List {...this.state.listProps} />
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    > * {
        margin: 10px;
    }
`;
