import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    flashcards: [],
    filteredFlashcards: [],
    filter: null,
  },
  reducers: {
    setFlashcards(state, action) {
      state.flashcards = action.payload;
      state.filteredFlashcards = action.payload;
    },
    setFiler(state, action) {
      state.filter = action.payload;
    },
    setFilteredCards(state, action) {
      if (state.filter === null) {
        state.filteredFlashcards = state.flashcards;
      } else {
        state.filteredFlashcards = state.flashcards.filter(
          (card) => card.tag === state.filter
        );
      }
    },
  },
});

export const cardsAction = cardSlice.actions;
export default cardSlice;
