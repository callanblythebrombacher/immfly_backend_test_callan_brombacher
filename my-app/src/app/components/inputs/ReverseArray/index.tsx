import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {apiGet} from "./api";
import {useState} from "react";

export function ReverseString() {
    const[string, setString] = useState("")
    const[output, setOutput] = useState('')

    const handleClick = async (event) => {
        event.preventDefault();
        let data = apiGet(string)
        data = Promise.resolve(data)
        setOutput(await data)
    }

    const handleChange = (event) =>{
        setString(event.target.value)
    }


    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField value={string} onChange={handleChange} id="outlined-basic" label="Word To Reverse" variant="outlined" />
            <Button onClick={handleClick}>Submit</Button>
            <p>Output: {output}</p>
        </Box>
    );
}