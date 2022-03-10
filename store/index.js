import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../features/cards/cards-slice";

const store = configureStore({
    reducer: {
        cards: cardSlice.reducer
    }
})

export default store;