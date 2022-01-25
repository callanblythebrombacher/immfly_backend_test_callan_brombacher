import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {Button, TextField } from '@mui/material';
import {apiGet} from "./api";





function createData(
    code: string,
    country: string,
    vat: number,
) {
    return { code,country,vat };
}


export function CountriesTable() {


    const [orderBy, setOrderBy] = React.useState('');
    const [search, setSearch] = React.useState('');
    const [countries, setCountries] = React.useState([{"country":"Austria","code":"AT","vat":20},{"country":"Belgium","code":"BE","vat":21},{"country":"Bulgaria","code":"BG","vat":20},{"country":"Croatia","code":"HR","vat":25},{"country":"Cyprus","code":"CY","vat":19},{"country":"Czech Republic","code":"CZ","vat":21},{"country":"Denmark","code":"DK","vat":25},{"country":"Estonia","code":"EE","vat":20},{"country":"Finland","code":"FI","vat":24},{"country":"France","code":"FR","vat":20},{"country":"Germany","code":"DE","vat":19},{"country":"Greece","code":"EL","vat":24},{"country":"Hungary","code":"HU","vat":27},{"country":"Ireland","code":"IE","vat":23},{"country":"Italy","code":"IT","vat":22},{"country":"Latvia","code":"LV","vat":21},{"country":"Lithuania","code":"LT","vat":21},{"country":"Luxembourg","code":"LU","vat":17},{"country":"Malta","code":"MT","vat":18},{"country":"Netherlands","code":"NL","vat":21},{"country":"Poland","code":"PO","vat":23},{"country":"Portugal","code":"PT","vat":23},{"country":"Romania","code":"RO","vat":20},{"country":"Slovakia","code":"SK","vat":20},{"country":"Slovenia","code":"SI","vat":22},{"country":"Spain","code":"ES","vat":21},{"country":"Sweden","code":"SW","vat":25},{"country":"United Kingdom","code":"GB","vat":20}])


    let rows = countries.map((country) =>{
          return createData(country['code'], country['country'], country['vat'] )
    })





    const handleChangeOrder = async (event: SelectChangeEvent) => {
        await setOrderBy(event.target.value as string);
    };

    const handleSearch = async (event) => {
        event.preventDefault();
        let data = apiGet("countries/", orderBy, search )
        let array = JSON.parse(await data)
        await setCountries(await array)
        console.log(search)
        rows = countries.map((country) =>{
            return createData(country['code'], country['country'], country['vat'] )
        })
    };

    const handleChangeSearch = (event)=>{
        event.preventDefault();
        console.log(orderBy)
        setSearch(event.target.value as string)
    };

    return (
        <div id="country">
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Sort By Vat </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={orderBy}
                        label="Sort by Vat"
                        onChange={handleChangeOrder}
                        required
                    >
                        <MenuItem value={"ascending"}>Ascending</MenuItem>
                        <MenuItem value={'descending'}>Descending</MenuItem>
                    </Select>
                    <TextField onChange={handleChangeSearch} value={search} label="Search Countries Containing Keyword" type="text"  required/>
                </FormControl>
                <Button type="submit"  onClick={handleSearch}>Submit</Button>
            </Box>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Code</TableCell>
                        <TableCell align="right">Country</TableCell>
                        <TableCell align="right">Vat</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row,index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="right">{row["code"]}</TableCell>
                            <TableCell align="right">{row['country']}</TableCell>
                            <TableCell align="right">{row['vat']}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}