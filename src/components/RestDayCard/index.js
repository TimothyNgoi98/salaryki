import React from "react";
import { useState } from 'react';
import { Card, Grid, Typography, Box, Collapse, MobileStepper, Button } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import vibingSun from '../../images/vibingSun.jpg'
import bossAsk from '../../images/bossAsk.jpg'
import youAsk from '../../images/youAsk.jpg'


const steps = [
    {
        labelEnglish:"Weekly rest day",
        labelIndian:"সাপ্তাহিক বিশ্রামের দিন",
        image: vibingSun,
        descriptionEnglish:"Your boss must provide 1 (unpaid) rest day per week.",
        descriptionIndian:"আপনার নিয়োগকর্তাকে অবশ্যই প্রতি সপ্তাহে 1টি (অপেইড) বিশ্রাম দিন প্রদান করতে হবে।",
        linkEnglish: "MOM rest day calculator",
        linkIndian: "বিশ্রামের দিন ক্যালকুলেটর"
    },
    {
        labelEnglish:"Rest day work pay",
        labelIndian:"বিশ্রাম দিনের কাজের বেতন",
        image: bossAsk,
        descriptionEnglish:"If boss ask you work on rest day, boss must pay you like this.",
        descriptionIndian:"যদি বস আপনাকে বিশ্রামের দিনে কাজ করতে বলে, তাহলে তারা আপনাকে এইভাবে অর্থ প্রদান করবে।",
    },
    {
        labelEnglish:"Rest day work pay",
        labelIndian:"বিশ্রাম দিনের কাজের বেতন",
        image: youAsk,
        descriptionEnglish:"If you ask to work on rest day, boss must pay you like this.",
        descriptionIndian:"আপনি যদি বিশ্রামের দিনে কাজ করতে বলেন, আপনার বস আপনাকে অবশ্যই এইভাবে অর্থ প্রদান করবেন",
    }
]
function RestDayCard() {

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
            <Collapse in={expanded} sx={{ width: '95%', margin: 'auto' }}>
                <Grid container sx={{ border: 'solid #DD6610', borderRadius: '6px' }} mt={2} justifyContent="center" alignItems="center">
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

export default RestDayCard