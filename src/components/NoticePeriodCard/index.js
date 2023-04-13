import React from "react";
import { useState } from 'react';
import { Card, Grid, Typography, Box, Collapse, MobileStepper, Button } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import shakeHands from '../../images/shakeHands.jpg'
import noticePerod from '../../images/noticePeriod.jpg'
import termination from '../../images/termination.jpg'

const steps = [
    {
        labelEnglish:"What is notice period?",
        labelIndian:"নোটিশ পিরিয়ড কি?",
        image: shakeHands,
        descriptionEnglish:"When you/your boss cancel your work contract, you must work for the notice period before you leave the company.",
        descriptionIndian:"যখন আপনি/আপনার বস আপনার কাজের চুক্তি বাতিল করেন, তখন আপনাকে অবশ্যই কোম্পানি ছেড়ে যাওয়ার আগে নোটিশের সময়কালের জন্য কাজ করতে হবে।",
    },
    {
        labelEnglish:"How long is notice period?",
        labelIndian:"নোটিশ পিরিয়ড কতদিন?",
        image: noticePerod,
        descriptionEnglish:"If your contract no have notice period, the notice period depends on how long you work for company.",
        descriptionIndian:"যখন আপনার বস আপনার কাজের চুক্তি বাতিল করে দেন, তখন আপনি কোম্পানি ছেড়ে যাওয়ার আগে তাকে অবশ্যই আপনাকে নোটিশ সময়ের জন্য কাজ করতে দিতে হবে।",
    },
    {
        labelEnglish:"Termination without notice",
        labelIndian:"বিজ্ঞপ্তি ছাড়াই সমাপ্তি",
        image: termination,
        descriptionEnglish:"If boss cancel your contract without notice, he must pay you “notice pay”.If you resign without notice, you must pay your boss “notice pay”. This is salary that you would have earned during the notice period.",
        descriptionIndian:"যদি বস নোটিশ ছাড়াই আপনার চুক্তি বাতিল করেন, তাহলে তাকে অবশ্যই আপনাকে 'নোটিস পে' দিতে হবে। আপনি যদি নোটিশ ছাড়াই পদত্যাগ করেন, তাহলে আপনাকে অবশ্যই আপনার বসকে 'নোটিস পে' দিতে হবে।এটি সেই বেতন যা আপনি নোটিশের সময়কালে উপার্জন করতেন।",
    }
]

function NoticePeriodCard() {

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
            <Card sx={{ color: 'primary.main', backgroundColor: 'background.cardNoticePeriod', width: '95%', margin: 'auto', borderRadius: '12px' }}>
                <Grid container direction='row' justifyContent="space-between">
                    <Grid item xs={9}>
                        <Box sx={{ flexDirection: 'column' }} ml={1} mb={1} p={1} pt={2}>
                            <Typography variant='h4'>Notice period</Typography>
                            <Typography variant='h4'>বিজ্ঞপ্তি পরিবেশন</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} align='center'>
                        <Grid container direction="column" justifyContent="center" alignItems="center" mt={1}>
                            <Grid item sx={{ color: '#6D4B38' }}>
                                :nbsp;
                            </Grid>
                            <Grid item>
                                <Button size="large">
                                    <PlayArrowIcon color="primary" expand={expanded} onClick={handleExpandClick} />
                                </Button>
                            </Grid>
                            <Grid item sx={{ color: '#6D4B38' }}>
                                :nbsp;
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
            <Collapse in={expanded} sx={{ width: '95%', margin: 'auto' }}>
                <Grid container sx={{ border: 'solid #6D4B38', borderRadius: '6px' }} mt={2} justifyContent="center" alignItems="center">
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

export default NoticePeriodCard