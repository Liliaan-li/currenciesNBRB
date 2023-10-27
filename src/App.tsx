import React, {useState} from 'react';
import './App.css';
import Header from "./components/header/header";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoItem} from "@mui/x-date-pickers/internals/demo";
import {DateCalendar} from "@mui/x-date-pickers/DateCalendar";
import dayjs, {Dayjs} from "dayjs";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {useGetCurrenciesQuery} from "./services/currencies.service";
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import s from "./styles/app.module.css"

function App() {
    const date = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs(date))

    const selectedDateFormatted = selectedDate!.format('YYYY-MM-DD')

    console.log(selectedDate?.format('YYYY-MM-DD'))


    const {data: currenciesData} = useGetCurrenciesQuery(selectedDateFormatted)

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
                <div>
                    <Table>
                        <TableHead>
                            <TableRow style={{backgroundColor:'#1976d2'}}>
                                <TableCell style={{width:'100px', color:'#fff'}}>Код</TableCell>
                                <TableCell style={{width:'400px', color:'#fff'}}>Название</TableCell>
                                <TableCell style={{width:'200px', color:'#fff'}}>Курс</TableCell>
                                <TableCell style={{width:'150px', color:'#fff'}}>Единиц</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody style={{border:'1px solid rgba(224, 224, 224, 1)'}}>
                            {currenciesData && currenciesData.map(el => {
                                return (
                                    <TableRow key={el.Cur_ID}>
                                        <TableCell>{el.Cur_Abbreviation}</TableCell>
                                        <TableCell>{el.Cur_Name}</TableCell>
                                        <TableCell>{el.Cur_OfficialRate}</TableCell>
                                        <TableCell>{el.Cur_Scale}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                    {currenciesData?.length === 0 &&
                        <div style={{display: 'flex', justifyContent: 'center'}}>Данных на этот период нет</div>}
                </div>
                {/*{currenciesData?.length === 0 &&*/}
                {/*    <div style={{display: 'flex', justifyContent: 'center'}}>Данных на этот период нет</div>}*/}

                {/*{currenciesData?.length === 0 ?*/}
                {/*    <div style={{display:'flex', justifyContent:'center'}}>Данных на этот период нет</div>*/}
                {/*    : currenciesData?.map(el => {*/}
                {/*        return (*/}
                {/*            <TableBody key={el.Cur_ID}>*/}
                {/*                <TableRow>*/}
                {/*                    <TableCell>{el.Cur_Abbreviation}</TableCell>*/}
                {/*                    <TableCell>{el.Cur_Name}</TableCell>*/}
                {/*                    <TableCell>{el.Cur_OfficialRate}</TableCell>*/}
                {/*                    <TableCell>{el.Cur_Scale}</TableCell>*/}
                {/*                </TableRow>*/}
                {/*            </TableBody>*/}
                {/*        )*/}
                {/*    })}*/}
            </div>
        </div>
    );
}

export default App;
