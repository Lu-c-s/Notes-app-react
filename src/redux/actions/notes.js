import { ADD_NOTE , DELETE_NOTE , SELECT_NOTE } from '../types';

export const addNote = Note => ({
    type: ADD_NOTE,
    Note
})

export const deleteNote = Note => ({
    type: DELETE_NOTE,
    Note
})

export const selectNote = Note => ({
    type: SELECT_NOTE,
    Note
})