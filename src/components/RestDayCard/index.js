import React from "react";
import { useState } from 'react';
import { Card, Grid, Typography, Box, Collapse, MobileStepper, Button, Link, List, ListItem, SvgIcon } from "@mui/material";
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import vibingSun from '../../images/vibingSun.jpg'
import bossAsk from '../../images/bossAsk.jpg'
import youAsk from '../../images/youAsk.jpg'
import { ReactComponent as Polygon } from '../../images/polygon.svg'
import { ReactComponent as Polygon2 } from '../../images/polygon2.svg'
import { ReactComponent as Polygon3 } from '../../images/polygon3.svg'

const steps = [
    {
        labelEnglish: "Weekly rest day",
        labelIndian: "সাপ্তাহিক বিশ্রামের দিন",
        image: vibingSun,
        descriptionEnglishObject: {
            headerDescription: "Your boss must provide 1 (unpaid) rest day per week.",
            listComponent: []
        },
        descriptionIndianObject: {
            headerDescription: "আপনার নিয়োগকর্তাকে অবশ্যই প্রতি সপ্তাহে 1টি (অপেইড) বিশ্রাম দিন প্রদান করতে হবে।",
            listComponent: []
        },
        link: "https://www.mom.gov.sg/employment-practices/hours-of-work-overtime-and-rest-days#:~:text=Your%20employer%20must%20provide%201%20rest%20day%20per%20week.",
        // descriptionEnglish: "Your boss must provide 1 (unpaid) rest day per week.",
        // descriptionIndian: "আপনার নিয়োগকর্তাকে অবশ্যই প্রতি সপ্তাহে 1টি (অপেইড) বিশ্রাম দিন প্রদান করতে হবে।",
        linkEnglish: "MOM rest day calculator",
        linkIndian: "বিশ্রামের দিন ক্যালকুলেটর"
    },
    {
        labelEnglish: "Rest day work pay",
        labelIndian: "বিশ্রাম দিনের কাজের বেতন",
        image: bossAsk,
        descriptionEnglishObject: {
            headerDescription: "If boss ask you work on rest day, boss must pay you like this.",
            listComponent: []
        },
        descriptionIndianObject: {
            headerDescription: "যদি বস আপনাকে বিশ্রামের দিনে কাজ করতে বলে, তাহলে তারা আপনাকে এইভাবে অর্থ প্রদান করবে।",
            listComponent: []
        },
        link: "https://www.mom.gov.sg/employment-practices/hours-of-work-overtime-and-rest-days#:~:text=How%20pay%20for%20work%20on%20a%20rest%20day%20is%20calculated",
        // descriptionEnglish: "If boss ask you work on rest day, boss must pay you like this.",
        // descriptionIndian: "যদি বস আপনাকে বিশ্রামের দিনে কাজ করতে বলে, তাহলে তারা আপনাকে এইভাবে অর্থ প্রদান করবে।",
    },
    {
        labelEnglish: "Rest day work pay",
        labelIndian: "বিশ্রাম দিনের কাজের বেতন",
        image: youAsk,
        descriptionEnglishObject: {
            headerDescription: "If you ask to work on rest day, boss must pay you like this.",
            listComponent: []
        },
        descriptionIndianObject: {
            headerDescription: "আপনি যদি বিশ্রামের দিনে কাজ করতে বলেন, আপনার বস আপনাকে অবশ্যই এইভাবে অর্থ প্রদান করবেন",
            listComponent: []
        },
        link: "https://www.mom.gov.sg/employment-practices/hours-of-work-overtime-and-rest-days#:~:text=How%20pay%20for%20work%20on%20a%20rest%20day%20is%20calculated",
        // descriptionEnglish: "If you ask to work on rest day, boss must pay you like this.",
        // descriptionIndian: "আপনি যদি বিশ্রামের দিনে কাজ করতে বলেন, আপনার বস আপনাকে অবশ্যই এইভাবে অর্থ প্রদান করবেন",
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
            <Card sx={{ color: 'primary.main', backgroundColor: 'background.cardRest', width: '95%', margin: 'auto', borderRadius: '12px' }} expand={expanded} onClick={handleExpandClick}>
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
                                <Button size="large" sx={{ transform: expanded ? 'rotate(90deg)' : 'none' }}>
                                    <Polygon />
                                    {/* <PlayArrowIcon color="primary" sx={{ transform: expanded ? 'rotate(90deg)' : 'none' }} /> */}
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
                            <Box component="img" src={steps[activeStep].image} mt={2} sx={{ borderRadius: "6px", maxWidth: "100%", p: 1 }} />
                            <Grid pt={1} p={3}>
                                {steps[activeStep].link ?
                                    <Link href={steps[activeStep].link} target="_blank" sx={{ color: "#0065FD", textDecoration: 'underline' }}>
                                        <Typography variant="subtitle1">
                                            {steps[activeStep].descriptionEnglishObject['headerDescription']}
                                        </Typography>
                                    </Link>
                                    :
                                    <Typography variant="subtitle1">
                                        {steps[activeStep].descriptionEnglishObject['headerDescription']}
                                    </Typography>
                                }
                                <List sx={{ listStyleType: 'disc', pl: 3, mb: 3 }} disablePadding>
                                    {steps[activeStep].descriptionEnglishObject['listComponent'].length !== 0 ?
                                        steps[activeStep].descriptionEnglishObject['listComponent'].map(description => {
                                            return (
                                                <ListItem key={description} sx={{ display: 'list-item', pb: 0 }}>
                                                    <Typography variant="subtitle1">
                                                        {description}
                                                    </Typography>
                                                </ListItem>
                                            )
                                        }) : <>
                                        </>}
                                </List>
                                <Typography variant="subtitle1">
                                    {steps[activeStep].descriptionIndianObject['headerDescription']}
                                </Typography>
                                <List sx={{ listStyleType: 'disc', pl: 3 }} disablePadding>
                                    {steps[activeStep].descriptionIndianObject['listComponent'].map(description => {
                                        return (
                                            <ListItem key={description} sx={{ display: 'list-item' }}>
                                                <Typography variant="subtitle1">
                                                    {description}
                                                </Typography>
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            </Grid>
                            {steps[activeStep].linkEnglish ?
                                <>
                                    <Link href="https://www.mom.gov.sg/employment-practices/salary/calculate-pay-for-work-on-rest-day" target="_blank" variant="text" sx={{ color: "#0065FD", textDecoration: 'underline', pb: 0 }}>
                                        <Box sx={{ flexDirection: 'column', borderTop: 1, borderColor: 'black' }} mb={2} pt={2}>
                                            <Typography variant="subtitle1">{steps[activeStep].linkEnglish}</Typography>
                                            <Typography variant="subtitle1">{steps[activeStep].linkIndian}</Typography>
                                        </Box>
                                    </Link>

                                    {/* <Typography href="https://www.mom.gov.sg/employment-practices/salary/calculate-pay-for-work-on-rest-day" target="_blank" variant="text" sx={{ color: "#0065FD", textDecoration: 'underline' }}>
                                        {steps[activeStep].linkIndian}
                                    </Typography> */}
                                </>
                                :
                                <></>
                            }
                        </Grid>
                    </Box>
                    <MobileStepper
                        variant="progress"
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        sx={{ width: '100%', flexGrow: 1, pt: 2, pb: 2 }}
                        backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                {activeStep === 0 ?
                                    <SvgIcon sx={{ display: 'none' }}>
                                        <Polygon3 />
                                    </SvgIcon>
                                    :
                                    <SvgIcon>
                                        <Polygon3 />
                                    </SvgIcon>
                                }
                            </Button>
                        }
                        nextButton={
                            <Button size="small" onClick={handleNext} disabled={activeStep === (maxSteps - 1)}>
                                {activeStep === (maxSteps - 1) ?
                                    <Box sx={{ display: 'none' }}>
                                        <Polygon2 />
                                    </Box>
                                    :
                                    <Polygon2 />
                                }
                            </Button>
                        }
                    />
                </Grid>
            </Collapse>
        </Grid>
    )
}

export default RestDayCard