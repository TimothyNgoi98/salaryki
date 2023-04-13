import React from "react";
import { useState } from 'react';
import { Card, Grid, Typography, Box, Collapse, MobileStepper, Button } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import nationalDay from '../../images/nationalDay.jpg'
import phPay from '../../images/phPay.jpg'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
    {
        labelEnglish:"Singapore public holidays",
        labelIndian:"সিঙ্গাপুর পাবলিক ছুটি",
        image: nationalDay,
        descriptionEnglish:"Singapore has 11 public holidays a year. You will be paid even if not working on PH!",
        descriptionIndian:"সিঙ্গাপুরে এক বছরে 11 টি পাবলিক ছুটি রয়েছে। P.H. এ কাজ না করলেও আপনাকে বেতন দেওয়া হবে!",
    },
    {
        labelEnglish:"Public holiday pay",
        labelIndian:"সরকারী ছুটি বেতন",
        image: phPay,
        descriptionEnglish:"If you are working on P.H., you get extra day of salary.",
        descriptionIndian:"আপনি যদি সরকারী ছুটিতে কাজ করেন তবে আপনাকে বেতনের অতিরিক্ত দিন দেওয়া হবে",
    }
]

function PublicHolidayCard() {

    //exapand button
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    //steps
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Grid container pt={2} pb={1}>
            <Card sx={{ color: 'primary.main', backgroundColor: 'background.cardHoliday', width: '95%', margin: 'auto', borderRadius: '12px' }}>
                <Grid container direction='row' justifyContent="space-between">
                    <Grid item xs={9}>
                        <Box sx={{ flexDirection: 'column' }} ml={1} mb={1} p={1} pt={2}>
                            <Typography variant='h4'>Public Holiday</Typography>
                            <Typography variant='h4'>সরকারী ছুটি</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} align='center'>
                        <Grid container direction="column" justifyContent="center" alignItems="center" mt={1}>
                            <Grid item sx={{ color: '#0AA879' }}>
                                :nbsp;
                            </Grid>
                            <Grid item>
                                <Button size="large">
                                    <PlayArrowIcon color="primary" expand={expanded} onClick={handleExpandClick} />
                                </Button>
                            </Grid>
                            <Grid item sx={{ color: '#0AA879' }}>
                                :nbsp;
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
            <Collapse in={expanded} sx={{ width: '95%', margin: 'auto' }}>
                <Grid container sx={{ border: 'solid #0AA879', borderRadius: '6px' }} mt={2} justifyContent="center" alignItems="center">
                    <Box sx={{ flexDirection: 'column' }}>
                        <Grid container
                            direction="column"
                            justifyContent="center"
                            alignItems="center">
                            <Typography variant="h6" mt={2} fontWeight="bold">
                                {steps[activeStep].labelEnglish}
                            </Typography>
                            <Typography variant="h6" fontWeight="bold">
                                {steps[activeStep].labelIndian}
                            </Typography>
                            <Box component="img" src={steps[activeStep].image} mt={2} sx={{ borderRadius: "6px" }} />
                            <Grid pt={1} p={3}>
                                <Typography variant="subtitle1">
                                    {steps[activeStep].descriptionEnglish}
                                </Typography>
                                <br />
                                <Typography variant="subtitle1">
                                    {steps[activeStep].descriptionIndian}
                                </Typography>
                            </Grid>
                            <MobileStepper
                                variant="progress"
                                steps={maxSteps}
                                position="static"
                                activeStep={activeStep}
                                sx={{ maxWidth: 800, flexGrow: 1 }}
                                backButton={
                                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                        {activeStep === 0 ?
                                            <KeyboardArrowLeft sx={{ display: 'none', color: "black" }} />
                                            :
                                            <KeyboardArrowLeft sx={{ color: "black" }} />
                                        }
                                    </Button>
                                }
                                nextButton={
                                    <Button size="small" onClick={handleNext} disabled={activeStep === (maxSteps - 1)}>
                                        {activeStep === (maxSteps - 1) ?
                                            <KeyboardArrowRight sx={{ display: 'none', color: "black" }} />
                                            :
                                            <KeyboardArrowRight sx={{ color: "black" }} />
                                        }
                                    </Button>
                                }
                            />
                        </Grid>
                    </Box>
                </Grid>
            </Collapse>
        </Grid>
    )
}

export default PublicHolidayCard