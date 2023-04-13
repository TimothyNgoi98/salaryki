import React from "react";
import { Paper, Grid, Box, Typography } from "@mui/material";
import OverTimeCard from "../OverTimeCard";
import PublicHolidayCard from "../PublicHolidayCard";
import RestDayCard from "../RestDayCard";
import AnnualLeaveCard from "../AnnualLeaveCard";
import NoticePeriodCard from "../NoticePeriodCard";

function EmploymentRightsSection() {
    return (
        <Grid container pt={4} justifyContent='center' sx={{ maxWidth: '85%', margin: 'auto' }}>
            <Paper sx={{ width: '100%', height: 'auto', borderRadius: '8px' }} elevation={4} mb = {2}>
                <Grid container alignItems='center' pr={2} pl = {2} pt ={1}>
                    <Box sx={{ flexDirection: 'column' }}>
                        <Typography variant="h6" sx={{fontWeight:"bold"}}>Employment rights</Typography>
                        <Typography variant="h6" sx={{fontWeight:"bold"}}>কর্মসংস্থান অধিকার</Typography>
                    </Box>
                </Grid>
                <OverTimeCard/>
                <PublicHolidayCard/>
                <RestDayCard/>
                <AnnualLeaveCard/>
                <NoticePeriodCard/>
            </Paper>
        </Grid>
    )
}

export default EmploymentRightsSection