import { CreateNoteType } from './createNote';
export type NoteType = {
    id: string;
    content: string;
};

export type NotesState = {
    notes: NoteType[];
};

export type NoteActionType = ReturnType<CreateNoteType>;
