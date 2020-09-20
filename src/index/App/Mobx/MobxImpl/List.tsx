import { styled } from '@atlasgroup/react-atlantic';
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { useStore } from './shared/StoreContext';

export interface ListProps {}
export type ListType = FC<ListProps>;

export const List: ListType = observer(() => {
    const { noteStore } = useStore();

    return (
        <div>
            {noteStore.list.map(
                ({ id, content }: { id: any; content: any }) => (
                    <StyledDiv key={id}>{content}</StyledDiv>
                )
            )}
        </div>
    );
});

const StyledDiv = styled.div`
    border: 1px solid ${({ theme }) => theme.color.primary.gamma};
    width: 225px;
    padding: 8px 10px;
    border-radius: ${({ theme }) => theme.radius};
`;
