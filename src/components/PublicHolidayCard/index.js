import React from "react";
import { useState } from 'react';
import { Card, Grid, Typography, Box, Collapse, MobileStepper, Button, Link, List, ListItem, SvgIcon } from "@mui/material";
import nationalDay from '../../images/nationalDay.webp'
import phPay from '../../images/phPay.webp'
import { ReactComponent as Polygon } from '../../images/polygon.svg'
import { ReactComponent as Polygon2 } from '../../images/polygon2.svg'
import { ReactComponent as Polygon3 } from '../../images/polygon3.svg'
import ReactGA from 'react-ga4'

const steps = [
    {
        labelEnglish: "Singapore public holidays",
        labelIndian: "সিঙ্গাপুর পাবলিক ছুটি",
        image: nationalDay,
        descriptionEnglishObject: {
            headerDescription: "Singapore has 11 public holidays a year.",
            listComponent: ["You will be paid even if not working on PH!"]
        },
        descriptionIndianObject: {
            headerDescription: "সিঙ্গাপুরে এক বছরে 11 টি পাবলিক ছুটি রয়েছে।",
            listComponent: ["P.H. এ কাজ না করলেও আপনাকে বেতন দেওয়া হবে!"]
        },
        link: "https://www.mom.gov.sg/employment-practices/public-holidays-entitlement-and-pay#:~:text=The%2011%20public%20holidays",
    },
    {
        labelEnglish: "Public holiday pay",
        labelIndian: "সরকারী ছুটি বেতন",
        image: phPay,
        descriptionEnglishObject: {
            headerDescription: "If you are working on P.H., you get extra day of salary.",
            listComponent: []
        },
        descriptionIndianObject: {
            headerDescription: "আপনি যদি সরকারী ছুটিতে কাজ করেন তবে আপনাকে বেতনের অতিরিক্ত দিন দেওয়া হবে",
            listComponent: []
        },
        link: "https://www.mom.gov.sg/employment-practices/public-holidays-entitlement-and-pay#:~:text=If%20you%20work%20on%20a%20public%20holiday%2C%20by%20default%2C%20your%20employer%20should%20pay%20you%20an%20additional%20day%27s%20pay."
    }
]

function PublicHolidayCard() {

    //exapand button
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
        ReactGA.event({
            category: "public holiday card",
            action: "public holiday card clicked",
            label: "time to ph"
        })
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
            <Card sx={{ color: 'primary.main', backgroundColor: 'background.cardHoliday', width: '95%', margin: 'auto', borderRadius: '12px' }} onClick={handleExpandClick}>
                <Grid container direction='row' justifyContent="space-between">
                    <Grid item xs={9}>
                        <Box sx={{ flexDirection: 'column' }} ml={1} mb={1} p={1} pt={2}>
                            <Typography variant='h4'>Public Holiday</Typography>
                            <Typography variant='h4'>সরকারী ছুটি</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} align='center'>
                        <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
                            <Grid item sx={{ marginTop: 'auto', marginBottom: 'auto' }}>
                                <Button size="large" sx={{ transform: expanded ? 'rotate(90deg)' : 'none' }}>
                                    <Polygon />
                                </Button>
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
                                        }) :
                                        <>
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
                                {/* <Typography variant="subtitle1">
                                    {steps[activeStep].descriptionEnglish}
                                </Typography>
                                <br />
                                <Typography variant="subtitle1">
                                    {steps[activeStep].descriptionIndian}
                                </Typography> */}
                            </Grid>
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

export default PublicHolidayCard