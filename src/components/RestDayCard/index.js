import React from "react";
import { useState } from 'react';
import { Card, Grid, Typography, Box, Collapse, MobileStepper, Button } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function RestDayCard() {

    //exapand button
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid container pt={2} pb={1}>
            <Card sx={{ color: 'primary.main', backgroundColor: 'background.cardRest', width: '95%', margin: 'auto', borderRadius: '12px' }}>
                <Grid container direction='row' justifyContent="space-between">
                    <Grid item xs={9}>
                        <Box sx={{ flexDirection: 'column' }} ml={1} mb={1} p={1} pt={2}>
                            <Typography variant='h4'>Rest Day</Typography>
                            <Typography variant='h4'>বিশ্রামের দিন</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} align='center'>
                        <Grid container direction="column" justifyContent="center" alignItems="center" mt={1}>
                            <Grid item sx={{ color: '#DD6610' }}>
                                :nbsp;
                            </Grid>
                            <Grid item>
                                <Button size="large">
                                    <PlayArrowIcon color="primary" expand={expanded} onClick={handleExpandClick} />
                                </Button>
                            </Grid>
                            <Grid item sx={{ color: '#DD6610' }}>
                                :nbsp;
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    )
}

export default RestDayCard