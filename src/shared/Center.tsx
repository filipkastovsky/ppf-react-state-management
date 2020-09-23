import React from 'react';
import { styled } from '@atlasgroup/react-atlantic';
import { ComponentPropsWithRef, forwardRef } from 'react';
import { Container } from './Container';

type CenterProps = {
    justify: boolean;
    align: boolean;
    direction: 'row' | 'column';
} & ComponentPropsWithRef<typeof Container>;

export const Center = styled(
    forwardRef<HTMLDivElement, CenterProps>(
        ({ align, justify, direction, ...props }, ref) => (
            <Container {...props} ref={ref} />
        )
    )
)<CenterProps>`
    ${({ justify }) => (justify ? 'justify-content: center;' : '')}
    ${({ align = true }) => (align ? 'align-items: center;' : '')}
    ${({ direction = 'row' }) => `flex-direction: ${direction};`}
`;
