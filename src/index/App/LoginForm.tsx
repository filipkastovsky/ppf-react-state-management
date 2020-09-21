import React, { FC } from 'react';
import { styled } from '@atlasgroup/react-atlantic';
import { Center } from './shared/Center';
import loginForm from './LoginForm/login-form.jpg';

export interface LoginFormProps {}
export type LoginFormType = ReturnType<FC<LoginFormProps>>;

const StyledLoginForm = styled.img.attrs({
    src: loginForm,
})`
    width: 600px;
    border-radius: ${({ theme }) => theme.radius};
`;
export const LoginForm: LoginFormType = (
    <Center justify align>
        <StyledLoginForm />
    </Center>
);
