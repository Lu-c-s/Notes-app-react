import { ADD_NOTE , DELETE_NOTE , SELECT_NOTE } from '../types';
import { selectNote } from '../actions/notes';

const initialState = {
    notes: [],
    selectedNote: null,
}

const notesReducer = (state = initialState , action) => {
    console.log("action",action)
    switch(action.type){
        case ADD_NOTE:
          let newNotes = state.notes;
          newNotes.push(action.Note)
            return {
                ...state,
                notes: newNotes            
            }

        case SELECT_NOTE:
            return {
                ...state,
                selectNote: action.Note
            }

        default:
            return state;
        

    }
}

export default notesReducer