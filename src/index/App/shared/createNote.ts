import { NoteType } from '../Class/shared/types';
import { NoteActions } from '../List/shared/NoteActions';

export type CreateNoteType = (
    content: string
) => { type: NoteActions.CreateNote; note: NoteType };

export const createNote: CreateNoteType = (content) => ({
    type: NoteActions.CreateNote,
    note: { id: `${Math.random()}`, content },
});
