import { styled } from '@atlasgroup/react-atlantic';
import React, { FC } from 'react';
import { NoteType } from '../../shared/types';

export interface ListProps {
    list: NoteType[];
}
export type ListType = FC<ListProps>;

export const List: ListType = ({ list }) => {
    return (
        <div>
            {list.map(({ id, content }) => (
                <StyledDiv key={id}>{content}</StyledDiv>
            ))}
        </div>
    );
};

const StyledDiv = styled.div`
    border: 1px solid ${({ theme }) => theme.color.primary.gamma};
    width: 225px;
    padding: 8px 10px;
    border-radius: ${({ theme }) => theme.radius};
`;
