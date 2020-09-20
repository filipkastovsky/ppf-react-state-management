import { Button, ButtonProps, Input, styled } from '@atlasgroup/react-atlantic';
import { InputProps } from '@atlasgroup/react-atlantic/lib/components/Input/view/base/types';
import React, { FC } from 'react';

export interface FormProps {
    inputProps: InputProps;
    inputHandlers?: InputProps;
    buttonProps: ButtonProps;
    buttonHandlers?: ButtonProps;
}
export type FormType = FC<FormProps>;

export const Form: FormType = ({
    inputProps,
    buttonProps,
    buttonHandlers,
    inputHandlers,
}) => {
    return (
        <div>
            <Input {...inputProps} {...inputHandlers} />
            <StyledButton type="primary" {...buttonProps} {...buttonHandlers}>
                🖊️
            </StyledButton>
        </div>
    );
};

const StyledButton = styled(Button)<ButtonProps>`
    color: ${({ theme }) => theme.color.primary.gamma};
    font-size: 20px;
    height: 34px;

    :hover {
        background: ${({ theme }) => theme.color.primary.gamma};
        color: ${({ theme }) => theme.color.primary.alpha};
    }
`;
