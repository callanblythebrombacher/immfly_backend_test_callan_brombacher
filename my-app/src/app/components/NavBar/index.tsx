import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DataArrayIcon from '@mui/icons-material/DataArray';
import HomeIcon from '@mui/icons-material/Home';
import PublicIcon from '@mui/icons-material/Public';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import {useHistory} from 'react-router-dom';

export function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const history = useHistory()

    const handleClick= (value)=>{
        let valued = value
        if ( valued === 0) {
            history.push("/")
        } else if ( valued === 1) {
            history.push("/simple-array")
        } else if ( valued === 2) {
            history.push("/countries")
        } else if ( valued === 3) {
            history.push("/reverse")
        } else {
            console.log()
        }
    }
    return (
        <Box sx={{ width: "100vw", position: "fixed", bottom: "0"}}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                   setValue(newValue)
                    handleClick(newValue)
                }}
            >
                <BottomNavigationAction label="HomePage" icon={<HomeIcon />} />
                <BottomNavigationAction label="SimpleArray" icon={<DataArrayIcon />} />
                <BottomNavigationAction label="Countries" icon={<PublicIcon />} />
                <BottomNavigationAction value={3} label="Reverse Word" icon={<SwapHorizIcon />}/>
            </BottomNavigation>
        </Box>
    );
}