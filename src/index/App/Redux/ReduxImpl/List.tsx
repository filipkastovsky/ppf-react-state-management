import { styled } from '@atlasgroup/react-atlantic';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from '../shared/reducers';

export interface ListProps {}
export type ListType = FC<ListProps>;

const selector = ({ noteReducer }: RootStateType) => noteReducer.notes;

export const List: ListType = () => {
    const list = useSelector(selector);

    return (
        <div>
            {list.map(({ id, content }: { id: any; content: any }) => (
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
