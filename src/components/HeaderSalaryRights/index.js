import React from "react";
import { Paper, Grid, Box, Typography } from "@mui/material";
import man1 from '../../images/man1.jpg'
import SalaryCard from "../SalaryCard";

function HeaderSalaryRights() {
    return (
        <Grid container pt={4} justifyContent='center' sx={{ maxWidth: '85%', margin: 'auto' }}>
            <Paper sx={{ width: '100%', height: 'auto', borderRadius: '8px' }} elevation={4}>
                <Grid container alignItems='center' p={2} pl = {0}>
                    <Grid item xs={4}>
                        <Grid container justifyContent="center" alignItems="flex-start">
                            <Box component="img" src={man1} sx={{
                                height: { xs: '100%', sm: "85%", md: "75%", lg: "65%", xl: "50%" },
                                width: { xs: '50%', sm: "45%", md: "35%", lg: "25%", xl: "20%" },
                            }} />
                        {/* <img src={man1} alt="hello" style = {{height: '100%', width:'100%', objectFit: 'cover', backgroundSize: 'contain', paddingLeft:2}}/> */}
                        </Grid>
                    </Grid>
                    <Grid item xs={8}>
                        <Box sx={{ flexDirection: 'column' }}>
                            <Typography variant='h6'>
                                Understand your rights with <Box fontWeight='bold' display='inline-block'>SalaryKi</Box>
                            </Typography>
                            <br/>
                            <Typography variant='h6'>
                                <Box fontWeight='bold' display='inline-block'>SalaryKi </Box> এর সাথে আপনার বেতনের অধিকারগুলি বুঝুন।
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <SalaryCard/>
            </Paper>
        </Grid>
    )
}

export default HeaderSalaryRights