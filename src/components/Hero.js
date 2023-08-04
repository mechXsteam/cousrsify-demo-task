import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Artifact from "./Artifact";
import {Rating, Stack} from "@mui/material";



const defaultTheme = createTheme();

export default function Hero() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{height: '100vh'}}>
                <CssBaseline/>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={6}
                    backgroundColor= "lightBlue"
                >

                <Box
                    sx={{
                        my: 3,
                        mx: 4,

                    }}
                >
                    <Typography variant={"h2"}>Recruiting made simple: attract and retain talent</Typography>
                    <Typography sx={{my: 5}} variant={'subtitle1'}> The most complete talent relationship platform
                        for talent sourcing that takes
                        your recruiting into digital age.
                    </Typography>
                    <Button variant={'contained'}>Request a demo</Button>
                    <Stack direction={'row'}>
                        <Stack sx={{my: 4, mr: 3}}><Rating precision={0.5} value={4.5} size={"large"} readOnly/> Value
                            rated from Trust pilot</Stack>
                        <Stack sx={{my: 4}}><Typography variant={"h6"}>7K +</Typography><Typography>Trusted leading
                            employer brands</Typography></Stack>
                    </Stack>
                </Box>
            </Grid>
            <Grid item xs={12} sm={8} md={6} component={Paper} square elevation={0}>
                <Artifact/>
            </Grid>
        </Grid>
</ThemeProvider>
)
    ;
}