import React, {useState} from 'react';
import './App.css';
import Header from "./components/header/header";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoItem} from "@mui/x-date-pickers/internals/demo";
import {DateCalendar} from "@mui/x-date-pickers/DateCalendar";
import dayjs, {Dayjs} from "dayjs";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {useGetCurrenciesQuery} from "./services/currencies.service";
import s from "./styles/app.module.css"
import {CurrenciesTable} from "./components/table";

function App() {
    const date = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`

    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs(date))

    const selectedDateFormatted = selectedDate!.format('YYYY-MM-DD')

    const {data: currenciesData} = useGetCurrenciesQuery(selectedDateFormatted)

    console.log(selectedDate?.format('YYYY-MM-DD'))
    console.log(currenciesData)

    return (
        <div className={s.container}>
            <Header date={selectedDateFormatted}/>
            <div className={s.wrapper}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoItem>
                        <DateCalendar
                            views={['year', 'month', 'day']}
                            value={selectedDate}
                            onChange={(newValue) => setSelectedDate(newValue)}
                        />
                    </DemoItem>
                </LocalizationProvider>

                <CurrenciesTable currenciesData={currenciesData}/>

            </div>
        </div>
    );
}

export default App;
