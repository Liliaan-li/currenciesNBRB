import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {currencyToDateType} from "../types/types";

const initialState = {
    currencyToDate: [] as currencyToDateType[],
}
export const slice = createSlice({
    name: "currenciesData",
    initialState,
    reducers: {
        setCurrencies: (state, action: PayloadAction<currencyToDateType[]>) => {
            state.currencyToDate = action.payload
        }
    },
});

export const {setCurrencies} = slice.actions