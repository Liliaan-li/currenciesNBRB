import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {currencyToDateType} from "../../types/types";

type TablePropsType = {
    currenciesData: currencyToDateType[] | undefined
}

export const CurrenciesTable = ({currenciesData}: TablePropsType) => {
    return (
        <>
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
        </>
    );
};
