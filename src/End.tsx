import React from 'react';
import { styled } from '@atlasgroup/react-atlantic';
import { ComponentPropsWithRef, forwardRef } from 'react';
import { Container } from './shared/Container';

type CenterProps = {
    justify: boolean;
    align: boolean;
    direction: 'row' | 'column';
} & ComponentPropsWithRef<typeof Container>;

export const End = styled(
    forwardRef<HTMLDivElement, CenterProps>(
        ({ align, justify, direction, ...props }, ref) => (
            <Container {...props} ref={ref} />
        )
    )
)<CenterProps>`
    ${({ justify }) => (justify ? 'justify-content: flex-end;' : '')}
    ${({ align = true }) => (align ? 'align-items: flex-end;' : '')}
    ${({ direction = 'row' }) => `flex-direction: ${direction};`}
`;
