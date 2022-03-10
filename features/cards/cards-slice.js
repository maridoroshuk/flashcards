import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "cards",
    initialState: {
        flashcards: [],
        filter: ''
    },
    reducers: {
        setFlashcards(state, action) {
            state.flashcards = action.payload
        },
        setFiler(state, action) {
            state.filter = action.payload
        },
        setFilteredCards(state, action) {
            state.flashcards = state.flashcards.filter((card) => card.tag === state.filter)
        }
    }

})

export const cardsAction = cardSlice.actions;
export default cardSlice;