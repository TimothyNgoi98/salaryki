import React from "react";
import { useState } from 'react';
import { Grid, Box, Typography, Card, Button, Collapse, MobileStepper, Link, ListItem, List, SvgIcon } from "@mui/material";
import workNight from '../../images/workNight.jpg'
import toBar from '../../images/ToBar.jpg'
import calculateOT from '../../images/calculateOT.jpg'
import rateOT from '../../images/rateOT.jpg'
import rateGuy from '../../images/rateGuy.jpg'
import { ReactComponent as Polygon } from '../../images/polygon.svg'
import { ReactComponent as Polygon2 } from '../../images/polygon2.svg'
import { ReactComponent as Polygon3 } from '../../images/polygon3.svg'
const steps = [
    {
        labelEnglish: "What is overtime?",
        labelIndian: "ওভারটাইম কি?",
        image: workNight,
        link: "https://www.mom.gov.sg/employment-practices/hours-of-work-overtime-and-rest-days#:~:text=45%20minutes%20long.-,Normal%20hours%20of%20work,-Contractual%20working%20hours",
        descriptionEnglishObject: {
            headerDescription: "According to MOM, normal work hours per week is 44 hours.",
            listComponent: ["Work more than this is overtime/OT."]
        },
        descriptionIndianObject: {
            headerDescription: "M.O.M অনুযায়ী, সপ্তাহে স্বাভাবিক কাজের সময় 44 ঘন্টা।",
            listComponent: ["এর চেয়ে বেশি কাজ করা ওভারটাইম।"]
        }
    },
    {
        labelEnglish: "Weekly schedule",
        labelIndian: "সাপ্তাহিক তালিকা",
        image: toBar,
        descriptionEnglishObject: {
            headerDescription: "This is an example of what a full week's schedule looks like.",
            listComponent: ["Mon - Fri full day working", "Saturday half day", "Sunday rest day"]
        },
        descriptionIndianObject: {
            headerDescription: "এটি একটি সপ্তাহের সময়সূচীর একটি উদাহরণ।",
            listComponent: ["সোম-শুক্র সারাদিন কাজ", "শনিবার অর্ধেক দিন", "রবিবার বিশ্রামের দিন"]
        }
    },
    {
        labelEnglish: "Overtime calculation",
        labelIndian: "ওভারটাইম গণনা",
        image: calculateOT,
        image2: rateOT,
        link: "https://www.mom.gov.sg/employment-practices/hours-of-work-overtime-and-rest-days#:~:text=must%20pay%20you-,at%20least%201.5%20times,-the%20hourly%20basic",
        descriptionEnglishObject: {
            headerDescription: "Overtime pay rate is at least 1.5x per hour.",
            listComponent: []
        },
        descriptionIndianObject: {
            headerDescription: "ওভারটাইম বেতনের হার কমপক্ষে 1.5x প্রতি ঘন্টা।",
            listComponent: []
        },
        descriptionEnglish2: "You can find your OT rate in your IPA.",
        descriptionIndian2: "আপনি আপনার IPA-তে আপনার OT রেট খুঁজে পেতে পারেন।",
        linkEnglish: "MOM OT calculator",
        linkIndian: "ওভারটাইম ক্যালকুলেটর"
    },
    {
        labelEnglish: "Check payslip",
        labelIndian: "পেস্লিপ চেক করুন",
        image: rateGuy,
        descriptionEnglishObject: {
            headerDescription: "Count your salary every month to check your payslip is correct!",
            listComponent: []
        },
        descriptionIndianObject: {
            headerDescription: "আপনার পেস্লিপ সঠিক কিনা তা নিশ্চিত করতে প্রতি মাসে আপনার বেতন গণনা করুন!",
            listComponent: []
        }
    }
]

function OverTimeCard() {

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
            <Card sx={{ color: 'primary.main', backgroundColor: 'background.cardOverTime', width: '95%', margin: 'auto', borderRadius: '12px' }} onClick={handleExpandClick} >
                <Grid container direction='row' justifyContent="space-between">
                    <Grid item xs={9}>
                        <Box sx={{ flexDirection: 'column' }} ml={1} mb={1} p={1} pt={2}>
                            <Typography variant='h4'>Overtime</Typography>
                            <Typography variant='h4'>ওভারটাইম</Typography>
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
                <Grid container sx={{ border: 'solid #3C7DE0', borderRadius: '6px' }} mt={2} justifyContent="center" alignItems="center">
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
                                {/* {steps[activeStep].link ?
                                    <Link href = {steps[activeStep].link} target="_blank" sx ={{color:"#0065FD", textDecoration: 'underline'}}>
                                        {steps[activeStep].descriptionIndianObject['headerDescription']}
                                    </Link>
                                    :
                                    <Typography variant="subtitle1">
                                        {steps[activeStep].descriptionIndianObject['headerDescription']}
                                    </Typography>
                                }
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
                                </List> */}
                            </Grid>
                            {/* <Grid pt={1} p={3}>
                                {steps[activeStep].link ?
                                    <Link href = {steps[activeStep].link} target="_blank" sx ={{color:"#0065FD", textDecoration: 'underline'}}>
                                        {steps[activeStep].descriptionIndianObject['headerDescription']}
                                    </Link>
                                    :
                                    <Typography variant="subtitle1">
                                        {steps[activeStep].descriptionIndianObject['headerDescription']}
                                    </Typography>
                                }
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
                            </Grid> */}
                            {steps[activeStep].image2 ?
                                <Box component="img" src={steps[activeStep].image2} mt={2} mb={1} sx={{ borderRadius: "6px" }} />
                                :
                                <Box></Box>
                            }
                            {steps[activeStep].descriptionEnglish2 ?
                                <>
                                    <Typography variant="subtitle1">
                                        {steps[activeStep].descriptionEnglish2}
                                    </Typography>
                                    <br />
                                    <Typography variant="subtitle1">
                                        {steps[activeStep].descriptionIndian2}
                                    </Typography>
                                </>
                                :
                                <></>
                            }
                            {steps[activeStep].linkEnglish ?
                                <>
                                    <Button href="https://www.mom.gov.sg/employment-practices/salary/calculate-overtime-pay" target="_blank" variant="text" sx={{ color: "#0065FD", textDecoration: 'underline' }}>
                                        {steps[activeStep].linkEnglish}
                                    </Button>

                                    <Typography href="https://www.mom.gov.sg/employment-practices/salary/calculate-overtime-pay" target="_blank" variant="text" sx={{ color: "#0065FD", textDecoration: 'underline' }}>
                                        {steps[activeStep].linkIndian}
                                    </Typography>
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

export default OverTimeCard