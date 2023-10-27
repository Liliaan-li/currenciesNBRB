import {RootState} from "./store";

export const selectCurrency = (state: RootState) => state.currenciesData.currencyToDate
