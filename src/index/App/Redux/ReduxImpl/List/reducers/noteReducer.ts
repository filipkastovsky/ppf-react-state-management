import { NoteActions } from '../../../../List/shared/NoteActions';
import { NoteActionType, NotesState } from '../../../../shared/types';

const initialState: NotesState = {
    notes: [],
};

export const noteReducer = (
    state = initialState,
    action: NoteActionType
): NotesState => {
    switch (action.type) {
        case NoteActions.CreateNote: {
            return {
                ...state,
                notes: [...state.notes, action.note],
            };
        }
        default:
            return state;
    }
};
