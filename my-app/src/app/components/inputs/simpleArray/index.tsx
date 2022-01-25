import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {useState} from "react";
import {apiGet} from "./api";

export function SimpleArray() {

    const[start, setStart] = useState("")
    const[end, setEnd] = useState("")
    const[output, setOutput] = useState('')

    const handleClick = async (event) => {
        event.preventDefault();
        let data = apiGet(start, end)
        let result = JSON.parse(await data)
        setOutput(result)

    }

    const handleChangeStart = (event) =>{
        setStart(event.target.value)
    }

    const handleChangeEnd = (event) =>{
        setEnd(event.target.value)
    }

    return (
        <>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField onChange={handleChangeStart} value={start} id="outlined-basic" label="First Word" variant="outlined" />
            <TextField onChange={handleChangeEnd} value={end} id="outlined-basic" label="Second Word" variant="outlined" />
            <Button onClick={handleClick}>Submit</Button>
        </Box>
    <p>Output Array Values Concatenated in order as string: {output}</p>
        </>

    );
}