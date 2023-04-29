import React from "react";
import { useState } from 'react';
import { Card, Grid, Typography, Box, Collapse, MobileStepper, Button, List, ListItem, Link, SvgIcon } from "@mui/material";

import money from '../../images/money.webp'
import salaryCalculator from '../../images/salaryCalculator.webp'
import salaryInfo from '../../images/salaryInfo.webp'
import ratePay from '../../images/ratePay.webp'
import deductPay from '../../images/deductPay.webp'
import countPay from '../../images/countPay.webp'
import { ReactComponent as Polygon } from '../../images/polygon.svg'
import { ReactComponent as Polygon2 } from '../../images/polygon2.svg'
import { ReactComponent as Polygon3 } from '../../images/polygon3.svg'
import  ReactGA from "react-ga4";

const steps = [
    {
        labelEnglish: "Understand your salary",
        labelIndian: "আপনার বেতন সংক্রান্ত তথ্য বুঝে নিন",
        image: money,
        descriptionEnglish: "Your boss must pay you salary every month, latest by the 7th of the next month. Your boss must send you payslip when you get your salary. You can find your salary details in your IPA.",
        descriptionIndian: "আপনার বসকে প্রতি মাসে আপনাকে পরবর্তী মাসের ৭ তারিখের মধ্যে বেতন দিতে হবে। যখন আপনি আপনার বেতন পাবেন তখন আপনার বস আপনাকে অবশ্যই একটি পে স্লিপ দিবেন। আপনি আপনার আইপিএ তে আপনার বেতন সংক্রান্ত বিস্তারিত তথ্য জানতে পারবেন"
    },
    {
        labelEnglish: "IPA Salary",
        labelIndian: "আইপিএ স্যালারি",
        image: salaryInfo,
        image2: salaryCalculator,
        descriptionEnglish: "Your monthly salary is in employment details page of IPA. Deductions could include housing fees, for example.",
        descriptionIndian: "আপনার মাসিক বেতন আইপিএ এর চাকুরি সংক্রান্ত বিস্তারিত পৃষ্ঠায় রয়েছে। আপনার কর্তনের মধ্যে হাউজিং ফি অন্তর্ভুক্ত থাকতে পারে"
    },
    {
        labelEnglish: "Daily basic pay",
        labelIndian: "দৈনিক বেসিক বেতন",
        image: ratePay,
        descriptionEnglish: "Your daily basic pay is used to calculate work done on rest day/public holiday.",
        descriptionIndian: "আপনি বিশ্রামের দিন বা সরকারি ছুটির দিনে যেই কাজ করেন সেই কাজের স্যলারী হিসেব করার জন্য আপনার দৈনিক বেসিক বেতন কত সেটি জানা প্রয়োজন"
    },
    {
        labelEnglish: "Salary deductions",
        labelIndian: "বেতন কর্তন",
        image: deductPay,
        descriptionEnglishObject: {
            headerDescription: "Your boss cannot cut your IPA salary without your written permission!",
            descriptionBeginning: "Your boss is not allowed to cut salary for these cases:",
            descriptionList: ["Work pass renewal", "Medical insurance/fees", "Repatriation (send home)", "Others"],
            red: true,
            link: "https://www.mom.gov.sg/employment-practices/salary/salary-deductions#:~:text=Your%20employer%20is%20not%20allowed%20to%20make%20deductions%20to%20your%20salaries%20under%20any%20circumstances%2C%20for%20the%20following%20purposes%20as%20specified%20in%20the%20Employment%20of%20Foreign%20Manpower%20Act%3A"
        },
        descriptionIndianObject: {
            headerDescription: "আপনার বস আপনার লিখিত অনুমতি ছাড়া আপনার আইপিএ তে উল্লেখিত বেতন কমাতে পারবেন না",
            descriptionBeginning: "নিম্নলিখিত ক্ষেত্রে আপনার বসের বেতন কর্তন করার কোন অনুমতি নেইঃ",
            descriptionList: ["ওয়ার্ক পারমিট নবায়ন করা", "চিকিৎসা বীমা/ফি", "দেশে ফেরত পাঠানো বাবদ খরচ", "অন্যান্য"],
            red: true,
            link: "https://www.mom.gov.sg/employment-practices/salary/salary-deductions#:~:text=Your%20employer%20is%20not%20allowed%20to%20make%20deductions%20to%20your%20salaries%20under%20any%20circumstances%2C%20for%20the%20following%20purposes%20as%20specified%20in%20the%20Employment%20of%20Foreign%20Manpower%20Act%3A"
        }
    },
    {
        labelEnglish: "Count your salary!",
        labelIndian: "আপনার বেতনের হিসাব করুন!",
        image: countPay,
        descriptionEnglishObject: {
            headerDescription: "It is good to track how many hours and days you work every month, and if you are getting paid correct salary.",
            descriptionBeginning: "Here are some good habits to follow:",
            descriptionList: ["Keep/take photo of timecards and all payslips", "Write down your work hours every day in a diary", "Count at the end of the month if your salary and work hours are ok"]
        },
        descriptionIndianObject: {
            headerDescription: "আপনি প্রতি মাসে কত ঘন্টা এবং কত দিন কাজ করেন এবং আপনি সঠিক বেতন পাচ্ছেন কিনা তা সবসময় হিসেব করা ভাল",
            descriptionBeginning: "নিচে কিছু ভালো অভ্যাসের তালিকা দেয়া হলো। আপনি ইচ্ছে করলে সেগুলো অনুসরন করতে পারেনঃ",
            descriptionList: ["সমস্ত টাইমকার্ড এবং পে স্লিপের ছবি রাখা", "প্রতিদিন কাজের সময় একটি ডায়েরিতে লিখে রাখা", "আপনার বেতন এবং কাজের সময় ঠিক থাকলে মাসের শেষে আপনার বেতন কত হয় সেটা হিসেব করা"]
        }
    }
]

function SalaryCard() {
    //exapand button
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
        console.log('handle expand clicked')
        ReactGA.event({
            category: "salary card",
            action: "salary card clicked",
            label: "ur mom's gay"
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
            <Card sx={{ backgroundColor: 'background.card', width: '95%', margin: 'auto', borderRadius: '12px' }} onClick={handleExpandClick}>
                <Grid container direction='row' justifyContent="space-between">
                    <Grid item xs={9}>
                        <Box sx={{ flexDirection: 'column' }} ml={1} mb={1} p={1} pt={2}>
                            <Typography variant='h4' sx={{ color: "white" }}>Salary Rights</Typography>
                            <Typography variant='h4' sx={{ color: "white" }}>বেতন অধিকার</Typography>
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
                <Grid container sx={{ border: 'solid black', borderRadius: '6px' }} mt={2} justifyContent="center" alignItems="center">
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
                            <Box component="img" src={steps[activeStep].image} mt={2} sx={{ borderRadius: "6px", maxWidth: "100%", pt: 0, p:1}} />
                            {steps[activeStep].image2 ?
                                <Box component="img" src={steps[activeStep].image2} mt={2} sx={{ borderRadius: "6px", maxWidth: "100%", p: 1 }} />
                                :
                                <Box></Box>
                            }
                            {steps[activeStep].descriptionEnglish ?
                                <Grid pt={1} p={3}>
                                    <Typography variant="subtitle1">
                                        {steps[activeStep].descriptionEnglish}
                                    </Typography>
                                    <br />
                                    <Typography variant="subtitle1">
                                        {steps[activeStep].descriptionIndian}
                                    </Typography>
                                </Grid>
                                :
                                <Grid pt={1} p={3}>
                                    <Typography variant="subtitle1" mb={1}>
                                        {steps[activeStep].descriptionEnglishObject['headerDescription']}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ color: steps[activeStep].descriptionEnglishObject['red'] ? '#FF0000' : 'black' }}>
                                        {steps[activeStep].descriptionEnglishObject['descriptionBeginning']}
                                    </Typography>
                                    <Grid container alignContent="center" justifyContent="flex-start">
                                        <List sx={{ listStyleType: 'disc', pl: 3 }} disablePadding>
                                            {steps[activeStep].descriptionEnglishObject['descriptionList'].map((description, index) => {
                                                if (index === steps[activeStep].descriptionEnglishObject['descriptionList'].length - 1 && steps[activeStep].descriptionEnglishObject['link']) {
                                                    return (
                                                        <ListItem key={description} sx={{ display: 'list-item' }}>
                                                            <Link href={steps[activeStep].descriptionEnglishObject['link']} target="_blank" sx={{ color: "#0065FD", textDecoration: 'underline' }} >
                                                                <Typography variant="subtitle1">
                                                                    {description}
                                                                </Typography>
                                                            </Link>
                                                        </ListItem>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <ListItem key={description} sx={{ display: 'list-item', pb: 0 }}>
                                                            <Typography variant="subtitle1">
                                                                {description}
                                                            </Typography>
                                                        </ListItem>
                                                    )
                                                }
                                            }
                                            )}
                                        </List>
                                    </Grid>
                                    <br /><br />
                                    <Typography variant="subtitle1" mb={1}>
                                        {steps[activeStep].descriptionIndianObject['headerDescription']}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ color: steps[activeStep].descriptionEnglishObject['red'] ? '#FF0000' : 'black' }}>
                                        {steps[activeStep].descriptionIndianObject['descriptionBeginning']}
                                    </Typography>
                                    <Grid container alignContent="center" justifyContent="flex-start">
                                        <List sx={{ listStyleType: 'disc', pl: 3 }} disablePadding>
                                            {steps[activeStep].descriptionIndianObject['descriptionList'].map((description, index) => {
                                                if (index === steps[activeStep].descriptionIndianObject['descriptionList'].length - 1 && steps[activeStep].descriptionIndianObject['link']) {
                                                    return (
                                                        <ListItem key={description} sx={{ display: 'list-item' }}>
                                                            <Link href={steps[activeStep].descriptionIndianObject['link']} target="_blank" sx={{ color: "#0065FD", textDecoration: 'underline' }} >
                                                                <Typography variant="subtitle1">
                                                                    {description}
                                                                </Typography>
                                                            </Link>
                                                        </ListItem>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <ListItem key={description} sx={{ display: 'list-item', pb: 0 }}>
                                                            <Typography variant="subtitle1">
                                                                {description}
                                                            </Typography>
                                                        </ListItem>
                                                    )
                                                }
                                            }
                                            )}
                                        </List>
                                    </Grid>
                                </Grid>
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
                                        <Polygon3 sx={{fontSize:80}} />
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

export default SalaryCard
