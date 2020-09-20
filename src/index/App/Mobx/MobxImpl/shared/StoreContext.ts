import { createContext, useContext } from 'react';
import { NoteStore } from '../Form/StoreContext/NoteStore';

export const StoreContext = createContext({
    noteStore: new NoteStore(),
});

export const useStore = () => useContext(StoreContext);
export const StoreProvider = StoreContext.Provider;
