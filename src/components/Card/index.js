import React from "react";
import { Card, Grid, Typography, Box } from "@mui/material";
const Card1 = () => {
    return(
        <Grid container pt={2} pb = {1}>
            <Card sx={{backgroundColor:'background.card', width:'95%', margin:'auto'}}>
                <Grid item xs={8}>
                    <Box sx={{flexDirection:'column'}} ml = {1} p={1}>
                        <Typography variant='subtitle1'>Salary Rights</Typography>
                        <Typography variant='subtitle1'>বেতন অধিকার</Typography>
                    </Box>
                </Grid>
            </Card>
        </Grid>
    )
}

export default Card1
