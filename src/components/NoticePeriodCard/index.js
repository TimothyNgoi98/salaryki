import React from "react";
import { useState } from 'react';
import { Card, Grid, Typography, Box, Collapse, MobileStepper, Button, Link, List, ListItem, SvgIcon } from "@mui/material";
import shakeHands from '../../images/shakeHands.webp'
import noticePerod from '../../images/noticePeriod.webp'
import termination from '../../images/termination.webp'
import { ReactComponent as Polygon } from '../../images/polygon.svg'
import { ReactComponent as Polygon2 } from '../../images/polygon2.svg'
import { ReactComponent as Polygon3 } from '../../images/polygon3.svg'
import ReactGA from 'react-ga4'

const steps = [
    {
        labelEnglish: "What is notice period?",
        labelIndian: "নোটিশ পিরিয়ড কি?",
        image: shakeHands,
        descriptionEnglishObject: {
            headerDescription: "When you/your boss cancel your work contract, you must work for the notice period before you leave the company.",
            listComponent: []
        },
        descriptionIndianObject: {
            headerDescription: "যখন আপনি অথবা আপনার বস আপনার কাজের চুক্তি বাতিল করবেন, তখন আপনাকে অবশ্যই কোম্পানি ছেড়ে যাওয়ার আগে একটি নির্দিষ্ট সময়কালের জন্য কাজ করে যেতে হবে। এই সময়টাকেই নোটিশ পিরিয়ড বলে",
            listComponent: []
        }
    },
    {
        labelEnglish: "How long is notice period?",
        labelIndian: "নোটিশ পিরিয়ড কতদিন?",
        image: noticePerod,
        descriptionEnglishObject: {
            headerDescription: "If your contract no have notice period, the notice period depends on how long you work for company.",
            listComponent: []
        },
        descriptionIndianObject: {
            headerDescription: "যখন আপনার বস আপনার কাজের চুক্তি বাতিল করে দেন, তখন আপনি কোম্পানি ছেড়ে যাওয়ার আগে তাকে অবশ্যই আপনাকে নোটিশ সময়ের জন্য কাজ করতে দিতে হবে।",
            listComponent: []
        },
        link: "https://www.mom.gov.sg/employment-practices/termination-of-employment/termination-with-notice#:~:text=No%20notice%20period%20in%20contract"
    },
    {
        labelEnglish: "Termination without notice",
        labelIndian: "বিজ্ঞপ্তি ছাড়াই সমাপ্তি",
        image: termination,
        linkList: "https://www.mom.gov.sg/employment-practices/termination-of-employment/termination-without-notice#:~:text=This%20is%20money%20equivalent%20to%20the%20salary%20that%20you%20would%20have%20earned%20during%20the%20required%20notice%20period.",
        descriptionEnglishObject: {
            headerDescription: "If boss cancel your contract without notice, he must pay you “notice pay”.",
            headerDescription2: "If you resign without notice, you must pay your boss “notice pay”.",
            listComponent: ["This is salary that you would have earned during the notice period."]
        },
        descriptionIndianObject: {
            headerDescription: `যদি বস নোটিশ ছাড়াই আপনার চুক্তি বাতিল করেন, তাহলে তাকে অবশ্যই আপনাকে নোটিশ পিরিয়ডের সময়ের জন্য বেতন বা "নোটিস পে" দিতে হবে`,
            headerDescription2: `আর আপনি যদি নোটিশ ছাড়াই পদত্যাগ করেন, তাহলে আপনাকে অবশ্যই আপনার বসকে নোটিশ পিরিয়ডের জন্য টাকা বা "নোটিস পে" দিতে হবে`,
            listComponent: ["এটি সেই বেতন বা টাকা যা আপনি নোটিশের সময়কালে উপার্জন করতেন"]
        }
    }
]

function NoticePeriodCard() {

    //exapand button
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
        ReactGA.event({
            category: "notice period card",
            action: "notice period card clicked",
            label: "time to notice"
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
        <Grid container pt={2} pb={2}>
            <Card sx={{ color: 'primary.main', backgroundColor: 'background.cardNoticePeriod', width: '95%', margin: 'auto', borderRadius: '12px' }} onClick={handleExpandClick}>
                <Grid container direction='row' justifyContent="space-between">
                    <Grid item xs={9}>
                        <Box sx={{ flexDirection: 'column' }} ml={1} mb={1} p={1} pt={2}>
                            <Typography variant='h4'>Notice period</Typography>
                            <Typography variant='h4'>নোটিশ পিরিয়ড</Typography>
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
                                {steps[activeStep].descriptionEnglishObject['headerDescription2'] ?
                                    <>
                                        <br />
                                        <Typography variant="subtitle1" mb={1}>
                                            {steps[activeStep].descriptionEnglishObject['headerDescription2']}
                                        </Typography>
                                    </>
                                    :
                                    null
                                }
                                <List sx={{ listStyleType: 'disc', pl: 3, mb: 3 }} disablePadding>
                                    {steps[activeStep].descriptionEnglishObject['listComponent'].length !== 0 ?
                                        steps[activeStep].descriptionEnglishObject['listComponent'].map(description => {
                                            return (
                                                <ListItem key={description} sx={{ display: 'list-item', pb: 0 }}>
                                                    <Link href={steps[activeStep].linkList} target="_blank" sx={{ color: "#0065FD", textDecoration: 'underline' }}>
                                                        <Typography variant="subtitle1">
                                                            {description}
                                                        </Typography>
                                                    </Link>
                                                </ListItem>
                                            )
                                        }) : <>
                                        </>}
                                </List>
                                <Typography variant="subtitle1">
                                    {steps[activeStep].descriptionIndianObject['headerDescription']}
                                </Typography>
                                {steps[activeStep].descriptionIndianObject['headerDescription2'] ?
                                    <>
                                        <br />
                                        <Typography variant="subtitle1" mb={1}>
                                            {steps[activeStep].descriptionIndianObject['headerDescription2']}
                                        </Typography>
                                    </>
                                    :
                                    null
                                }
                                <List sx={{ listStyleType: 'disc', pl: 3, mb: 3 }} disablePadding>
                                    {steps[activeStep].descriptionIndianObject['listComponent'].length !== 0 ?
                                        steps[activeStep].descriptionIndianObject['listComponent'].map(description => {
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

export default NoticePeriodCard