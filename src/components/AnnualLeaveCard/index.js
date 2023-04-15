import React from "react";
import { useState } from 'react';
import { Card, Grid, Typography, Box, Collapse, MobileStepper, Button, Link, SvgIcon  } from "@mui/material";
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import goHoliday from '../../images/goHoliday.jpg'
import chartYears from '../../images/chartYears.jpg'
import compensationUnpaid from '../../images/compensationUnpaid.jpg'
import {ReactComponent as Polygon } from '../../images/polygon.svg'
import {ReactComponent as Polygon2 } from '../../images/polygon2.svg'
import {ReactComponent as Polygon3 } from '../../images/polygon3.svg'

const steps = [
    {
        labelEnglish: "",
        labelIndian: "",
        image: goHoliday,
        descriptionEnglish: "You have paid annual leave if you have worked for at least 3 months.",
        descriptionIndian: "আপনি যদি কমপক্ষে 3 মাস কাজ করে থাকেন তবে আপনি বার্ষিক ছুটি পরিশোধ করেছেন।",
    },
    {
        labelEnglish: "Compensation for unused leave",
        labelIndian: "অব্যবহৃত ছুটির জন্য ক্ষতিপূরণ",
        image: chartYears,
        link: "https://www.mom.gov.sg/employment-practices/leave/annual-leave/eligibility-and-entitlement#:~:text=for%203%20months.-,Entitlement,-Your%20annual%20leave",
        descriptionEnglish: "How much leave you can take depends on how many years you have worked.",
        descriptionIndian: "আপনি কতটা ছুটি নিতে পারবেন তা নির্ভর করে আপনি কত বছর কাজ করেছেন তার উপর।",
    },
    {
        labelEnglish: "Compensation for unused leave",
        labelIndian: "অব্যবহৃত ছুটির জন্য ক্ষতিপূরণ",
        image: compensationUnpaid,
        descriptionEnglish: "Your boss must pay you for unused annual leave!",
        descriptionIndian: "আপনার নিয়োগকর্তা আপনাকে অব্যবহৃত বার্ষিক ছুটির জন্য অর্থ প্রদান করতে হবে!",
    }
]

function AnnualLeaveCard() {

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
            <Card sx={{ color: 'primary.main', backgroundColor: 'background.cardAnnualLeave', width: '95%', margin: 'auto', borderRadius: '12px' }} expand={expanded} onClick={handleExpandClick}>
                <Grid container direction='row' justifyContent="space-between">
                    <Grid item xs={9}>
                        <Box sx={{ flexDirection: 'column' }} ml={1} mb={1} p={1} pt={2}>
                            <Typography variant='h4'>Annual Leave</Typography>
                            <Typography variant='h4'>বার্ষিক ছুটি</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} align='center'>
                        <Grid container direction="column" justifyContent="center" alignItems="center" mt={1}>
                            <Grid item sx={{ color: '#8A23AD' }}>
                                :nbsp;
                            </Grid>
                            <Grid item>
                                <Button size="large" sx={{ transform: expanded ? 'rotate(90deg)' : 'none' }}>
                                    <Polygon/>
                                    {/* <PlayArrowIcon color="primary" sx={{ transform: expanded ? 'rotate(90deg)' : 'none' }} /> */}
                                </Button>
                            </Grid>
                            <Grid item sx={{ color: '#8A23AD' }}>
                                :nbsp;
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
            <Collapse in={expanded} sx={{ width: '95%', margin: 'auto' }}>
                <Grid container sx={{ border: 'solid #8A23AD', borderRadius: '6px' }} mt={2} justifyContent="center" alignItems="center">
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
                            <Box component="img" src={steps[activeStep].image} mt={2} sx={{ borderRadius: "6px", maxWidth: "100%", p: 1 }} />
                            <Grid pt={1} p={3}>
                                {steps[activeStep].link ?
                                    <Link href={steps[activeStep].link} target="_blank" sx={{ color: "#0065FD", textDecoration: 'underline', mb: 1 }}>
                                        <Typography variant="subtitle1" sx={{mb:2}}>
                                            {steps[activeStep].descriptionEnglish}
                                        </Typography>
                                    </Link>
                                    :
                                    <Typography variant="subtitle1"  sx={{mb:2}}>
                                        {steps[activeStep].descriptionEnglish}
                                    </Typography>
                                }
                                <Typography variant="subtitle1">
                                    {steps[activeStep].descriptionIndian}
                                </Typography>
                            </Grid>
                            <MobileStepper
                                variant="progress"
                                steps={maxSteps}
                                position="static"
                                activeStep={activeStep}
                                sx={{ width: '100%', flexGrow: 1 }}
                                backButton={
                                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                        {activeStep === 0 ?
                                            <SvgIcon sx={{ display: 'none'}}>
                                                <Polygon3 />
                                            </SvgIcon>
                                            :
                                            <SvgIcon>
                                                <Polygon3/>    
                                            </SvgIcon>
                                        }
                                    </Button>
                                }
                                nextButton={
                                    <Button size="small" onClick={handleNext} disabled={activeStep === (maxSteps - 1)}>
                                        {activeStep === (maxSteps - 1) ?
                                            <Box sx={{ display: 'none'}}>
                                                <Polygon2/>
                                            </Box>
                                            :
                                            <Polygon2/>
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

export default AnnualLeaveCard