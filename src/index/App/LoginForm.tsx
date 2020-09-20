import React, { FC } from 'react';
import { styled } from '@atlasgroup/react-atlantic';
import { Center } from './shared/Center';
import loginForm from './LoginForm/login-form.jpg';

export interface LoginFormProps {}
export type LoginFormType = FC<LoginFormProps>;

export const LoginForm: LoginFormType = () => {
    return (
        <Center justify align>
            <StyledLoginForm />
        </Center>
    );
};

const StyledLoginForm = styled.img.attrs({
    src: loginForm,
})`
    width: 600px;
    border-radius: ${({ theme }) => theme.radius};
`;
