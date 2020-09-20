import { Button, ButtonProps, Input, styled } from '@atlasgroup/react-atlantic';
import React, { FC, FormEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNote } from '../../shared/createNote';

export interface FormProps {}
export type FormType = FC<FormProps>;

export const Form: FormType = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState<string>('');

    const handleChange = useCallback(
        (e: FormEvent<HTMLInputElement>) => {
            setValue(e.currentTarget.value);
        },
        [setValue]
    );

    const handleClick = useCallback(() => {
        value && dispatch(createNote(value));
    }, [value, dispatch]);

    return (
        <div>
            <Input value={value} onChange={handleChange} />
            <StyledButton onClick={handleClick} type="primary">
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
