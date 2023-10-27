import {baseApi} from "./base-api";
import {currencyToDateType} from "../types/types";

export const CurrenciesService = baseApi.injectEndpoints({
    endpoints: builder => {
        return {
            getCurrencies: builder.query<currencyToDateType[], string | undefined>({
                query: (date) => {
                    return {
                        url: `/rates?ondate=${date}&periodicity=0`,
                    }
                },
                providesTags: ['Currencies'],
            }),
        }
    },
})
export const {useGetCurrenciesQuery} = CurrenciesService
