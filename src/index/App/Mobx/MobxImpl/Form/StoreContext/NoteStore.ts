import { NoteType } from '../../../../shared/types';
import { action, observable } from 'mobx';

export class NoteStore {
    @observable list: NoteType[] = [];
    @action addNote(content: string) {
        this.list.push({ id: `${Math.random()}`, content });
    }
}
