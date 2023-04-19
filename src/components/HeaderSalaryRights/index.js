import React from "react";
import { Paper, Grid, Box, Typography } from "@mui/material";
import {ReactComponent as Worker}  from '../../images/worker.svg'
import SalaryCard from "../SalaryCard";

function HeaderSalaryRights() {
    return (
        <Grid container pt={4} justifyContent='center' sx={{ maxWidth: '85%', margin: 'auto' }}>
            <Paper sx={{ width: '100%', height: 'auto', borderRadius: '8px' }} elevation={4}>
                <Grid container alignItems='center' p={2} pl={0}>
                    <Grid item xs={4}>
                        <Grid container justifyContent="center" alignItems="flex-start">
                            <Worker/>
                        </Grid>
                    </Grid>
                    <Grid item xs={8}>
                        <Box sx={{ flexDirection: 'column' }}>
                            <Typography variant='h6'>
                                Understand your rights with <Box fontWeight='bold' display='inline-block'>SalaryKi</Box>.
                            </Typography>
                            <br />
                            <Typography variant='h6'>
                                <Box fontWeight='bold' display='inline-block'>SalaryKi</Box> এর সাথে আপনার বেতনের অধিকারগুলি বুঝুন
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