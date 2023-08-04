import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import FeedbackIcon from '@mui/icons-material/Feedback';

const defaultTheme = createTheme();

export default function Feedback() {
    const feedbacks = [
        "“Very Class A with Class A service by anyone I dealt with at Jobster- I would highly recommend them!” Cara C., Senior Real Estate Manager, CBRE",
        "“Jobster is a great way to display our lobby directory. They provide fast, simple, straight-forward, and friendly service.” Daniella Carriglio, Real Estate Service Administrator, CBRE",
        "“Excellent service and excellent products from start to finish!!” Cynthia T.\n" +
        "Senior Property Manager, CBRE",
        "“Jobster Rocks! Their customer service team is great and they were able to resolve my problem days before my deadline. Thank you Jobster!” Kevin F, Associate Real Estate Manager, CBRE",
        "“A good looking and functional electronic directory is gracing our main lobby! Tenants are happy too as all the building information is easily displayed.” Mitzi Nandan, Vice President, JLL",
        "“Jobster is by far the best directory company I have ever worked with. The fabrication and installation went great. And the support group is awesome.” S.K.A., Special Projects Manager, Cushman Wakefield"
    ]
    const [currIndex,setCurrIndex] = React.useState(0)
    function handleInc() {
        console.log(currIndex)
        if(currIndex>feedbacks.length-1){
            setCurrIndex(0)
        } else {
            setCurrIndex(prevState => prevState + 1)
        }
    }

    function handleDec() {
        if(currIndex<1){
            setCurrIndex(feedbacks.length)
        } else {
            setCurrIndex(prevState => prevState - 1)
        }
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{height: '100vh'}}>
                <CssBaseline/>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={6}
                    sx={{
                        backgroundImage: 'url(https://img.freepik.com/free-vector/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_74855-8401.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >

                </Grid>
                <Grid item xs={12} sm={8} md={6} component={Paper} square elevation={0}>
                    <Box
                        sx={{
                            my: 10,
                            mx: 4,

                        }}
                    >
                        <Typography variant={'h1'}>Feedback</Typography>
                        <Typography variant={'h5'}>What our customer say  <FeedbackIcon fontSize={'large'}/></Typography>
                        <Box sx={{my:5, height:100}}>{feedbacks[currIndex]}</Box>
                        <Button><KeyboardArrowLeftIcon onClick={handleDec}/></Button>
                        <Button><KeyboardArrowRightIcon onClick={handleInc}/></Button>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
        ;
}