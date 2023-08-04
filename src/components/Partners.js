import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import audi from '../assets/companies/audi.png'
import bainandco from '../assets/companies/bainandco.png'
import phillips from '../assets/companies/phillips.png'
import samsung from '../assets/companies/samsung.png'
import sony from '../assets/companies/sony.png'


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


export default function Album() {
    return (
        <>
            <CssBaseline/>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Our Top Partners
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Jobster is an award winning platform trusted by leading employer brand
                        </Typography>
                    </Container>
                </Box>
                <Container sx={{py: 1}} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                sx={{height: 'auto', display: 'flex', flexDirection: 'column', padding:5}}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        // 16:9
                                        pt: '56.25%',
                                    }}
                                    image={audi}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                sx={{height: 'auto', display: 'flex', flexDirection: 'column', padding:5}}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        // 16:9
                                        pt: '56.25%',
                                    }}
                                    image={phillips}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                sx={{height: 'auto', display: 'flex', flexDirection: 'column', padding:5}}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        // 16:9
                                        pt: '56.25%',
                                    }}
                                    image={bainandco}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                sx={{height: 'auto', display: 'flex', flexDirection: 'column', padding:5}}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        // 16:9
                                        pt: '56.25%',
                                    }}
                                    image={samsung}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                sx={{height: 'auto', display: 'flex', flexDirection: 'column', padding:5}}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        // 16:9
                                        pt: '56.25%',
                                    }}
                                    image={sony}
                                />
                            </Card>
                        </Grid>

                    </Grid>
                </Container>
            </main>

        </>
    );
}