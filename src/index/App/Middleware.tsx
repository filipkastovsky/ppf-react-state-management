import React, { FC } from 'react';
import { styled } from '@atlasgroup/react-atlantic';
import { Center } from './shared/Center';
import middleware from './Middleware/middleware.jpg';
import saga from './Middleware/redux-saga.png';
import useSaga from './Middleware/just-use-saga.jpg';
import why from './Middleware/why.jpg';
import thunk from './Middleware/wtfthunk.jpg';
import { Appear } from './shared/Appear';

export interface MiddlewareProps {}
export type MiddlewareType = FC<MiddlewareProps>;

export const Middleware: MiddlewareType = () => {
    return (
        <Center justify align>
            <Appear elementNum={1}>
                <StyledSaga />
                <StyledUseSaga />
            </Appear>
            <StyledMiddleware />
            <Appear elementNum={0}>
                <StyledThunk />
                <StyledWhy />
            </Appear>
        </Center>
    );
};

const StyledMiddleware = styled.img.attrs({
    src: middleware,
})`
    width: 1000px;
    border-radius: ${({ theme }) => theme.radius};
`;

const StyledUseSaga = styled.img.attrs({
    src: useSaga,
})`
    left: 60%;
    position: fixed;
    width: 200px;
    border-radius: ${({ theme }) => theme.radius};
`;
const StyledSaga = styled.img.attrs({
    src: saga,
})`
    position: fixed;
    top: 25%;
    left: 62%;
    width: 300px;
    border-radius: ${({ theme }) => theme.radius};
`;
const StyledThunk = styled.img.attrs({
    src: thunk,
})`
    position: fixed;
    top: 35%;
    left: 30%;
    width: 300px;
    border-radius: ${({ theme }) => theme.radius};
`;
const StyledWhy = styled.img.attrs({
    src: why,
})`
    position: fixed;
    top: 60%;
    left: 25%;
    width: 300px;
    border-radius: ${({ theme }) => theme.radius};
`;
