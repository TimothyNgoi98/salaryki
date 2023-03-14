import React from "react";
import { Paper, Grid, Box, Typography } from "@mui/material";
import man1 from '../../images/man1.jpg'
const HeaderSalaryRights = () => {
    return(
            <Grid container pt={4} justifyContent='center' sx={{maxWidth: '85%', margin: 'auto'}}>
                <Paper sx={{width:'100%', height: 'auto'}} elevation={16}>
                    <Grid container alignItems='center' p={2}>
                        <Grid item xs={4}>
                            <Box component="img" src={man1} alignItems='center' justifyContent='center'/>
                        </Grid>
                        <Grid item xs={7}>
                            <Box sx={{flexDirection:'column'}}>
                                <Typography variant='subtitle2'>
                                    Understand your rights with <Box fontWeight='bold' displayu='inline'>SalaryKi</Box>
                                </Typography>
                                <br/>
                                <Typography variant='subtitle2'>
                                    SalaryKi এর সাথে আপনার বেতনের অধিকারগুলি বুঝুন।
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
    )
}

export default HeaderSalaryRights