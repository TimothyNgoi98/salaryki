import React from "react";
import { useState } from 'react';
import { Card, Grid, Typography, Box, Collapse, MobileStepper, Button, List, ListItem, Link } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import money from '../../images/money.jpg'
import salaryCalculator from '../../images/salaryCalculator.jpg'
import salaryInfo from '../../images/salaryInfo.jpg'
import ratePay from '../../images/ratePay.jpg'
import deductPay from '../../images/deductPay.jpg'
import countPay from '../../images/countPay.jpg'

const steps = [
    {
        labelEnglish: "Understand your salary",
        labelIndian: "আপনার বেতন বুঝে নিন",
        image: money,
        descriptionEnglish: "Your boss must pay you salary every month, latest by the 7th of the next month. You can find your salary details in your IPA.",
        descriptionIndian: "আপনার বসকে প্রতি মাসে আপনাকে বেতন দিতে হবে, পরবর্তী মাসের 7 তারিখের মধ্যে। আপনি আপনার IPA-তে আপনার বেতনের বিবরণ খুঁজে পেতে পারেন"
    },
    {
        labelEnglish: "IPA Salary",
        labelIndian: "আপনার বেতন বুঝে নিন",
        image: salaryInfo,
        image2: salaryCalculator,
        descriptionEnglish: "Your monthly salary is in employment details page of IPA. Deductions could include housing fees, for example.",
        descriptionIndian: "আপনার মাসিক বেতন IPA-এর কর্মসংস্থান বিবরণ পৃষ্ঠায় রয়েছে। কর্তনের মধ্যে আবাসন ফি অন্তর্ভুক্ত থাকতে পারে, উদাহরণস্বরূপ"
    },
    {
        labelEnglish: "Daily basic pay",
        labelIndian: "দৈনিক মৌলিক বেতন",
        image: ratePay,
        descriptionEnglish: "Your daily basic pay is used to calculate work done on rest day/public holiday.",
        descriptionIndian: " আপনার দৈনিক মৌলিক বেতন বিশ্রামের দিন/পাবলিক ছুটির দিনে করা কাজ গণনা করতে ব্যবহৃত হয়"
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
            headerDescription: "আপনার বস আপনার লিখিত অনুমতি ছাড়া আপনার IPA বেতন কাটতে পারবেন না!",
            descriptionBeginning: "আপনার বসকে এই ক্ষেত্রে বেতন কাটার অনুমতি নেই:",
            descriptionList: ["কাজের পাস নবায়ন", "চিকিৎসা বীমা/ফি", "প্রত্যাবাসন (বাসায় পাঠান)", "অন্যান্য"],
            red: true,
            link: "https://www.mom.gov.sg/employment-practices/salary/salary-deductions#:~:text=Your%20employer%20is%20not%20allowed%20to%20make%20deductions%20to%20your%20salaries%20under%20any%20circumstances%2C%20for%20the%20following%20purposes%20as%20specified%20in%20the%20Employment%20of%20Foreign%20Manpower%20Act%3A"
        }
        // descriptionEnglish: "Your boss cannot cut your IPA salary without your written permission! Your boss is not allowed to cut salary for these cases: Work pass renewal Medical insurance/fees Repatriation (send home) Others",
        // descriptionIndian: "আপনার বস আপনার লিখিত অনুমতি ছাড়া আপনার IPA বেতন কাটতে পারবেন না! আপনার বসকে এই ক্ষেত্রে বেতন কাটার অনুমতি নেই: কাজের পাস নবায়ন চিকিৎসা বীমা/ফি প্রত্যাবাসন (বাসায় পাঠান) অন্যান্য"
    },
    {
        labelEnglish: "Count your salary!",
        labelIndian: "আপনার বেতন গণনা!",
        image: countPay,
        descriptionEnglishObject: {
            headerDescription: "It is good to track how many hours and days you work every month, and if you are getting paid correct salary.",
            descriptionBeginning: "Here are some good habits to follow:",
            descriptionList: ["Keep/take photo of timecards and all payslips", "Write down your work hours every day in a diary", "Count at the end of the month if your salary and work hours are ok"]
        },
        descriptionIndianObject: {
            headerDescription: "আপনি প্রতি মাসে কত ঘন্টা এবং দিন কাজ করেন এবং আপনি সঠিক বেতন পাচ্ছেন কিনা তা ট্র্যাক করা ভাল।",
            descriptionBeginning: "এখানে অনুসরণ করার জন্য কিছু ভাল অভ্যাস আছে:",
            descriptionList: ["টাইমকার্ড এবং সমস্ত পেস্লিপের ছবি রাখুন/তুলুন", "প্রতিদিন আপনার কাজের সময় একটি ডায়েরিতে লিখুন", "আপনার বেতন এবং কাজের সময় ঠিক থাকলে মাসের শেষে গণনা করুন"]
        }
        // descriptionEnglish: "It is good to track how many hours and days you work every month, and if you are getting paid correct salary. Here are some good habits to follow: Keep/take photo of timecards and all payslips Write down your work hours every day in a diary Count at the end of the month if your salary and work hours are ok",
        // descriptionIndian: "আপনি প্রতি মাসে কত ঘন্টা এবং দিন কাজ করেন এবং আপনি সঠিক বেতন পাচ্ছেন কিনা তা ট্র্যাক করা ভাল। এখানে অনুসরণ করার জন্য কিছু ভাল অভ্যাস আছে: টাইমকার্ড এবং সমস্ত পেস্লিপের ছবি রাখুন/তুলুন প্রতিদিন আপনার কাজের সময় একটি ডায়েরিতে লিখুন আপনার বেতন এবং কাজের সময় ঠিক থাকলে মাসের শেষে গণনা করুন"
    }
]

function SalaryCard() {
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
            <Card sx={{ backgroundColor: 'background.card', width: '95%', margin: 'auto', borderRadius: '12px' }} expand={expanded} onClick={handleExpandClick}>
                <Grid container direction='row' justifyContent="space-between">
                    <Grid item xs={9}>
                        <Box sx={{ flexDirection: 'column' }} ml={1} mb={1} p={1} pt={2}>
                            <Typography variant='h4' sx={{ color: "white" }}>Salary Rights</Typography>
                            <Typography variant='h4' sx={{ color: "white" }}>বেতন অধিকার</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} align='center'>
                        <Grid container direction="column" justifyContent="center" alignItems="center" mt={1}>
                            <Grid item>
                                :nbsp;
                            </Grid>
                            <Grid item>
                                <Button size="large">
                                    <PlayArrowIcon color="primary" sx={{ transform: expanded ? 'rotate(90deg)' : 'none' }} />
                                </Button>
                            </Grid>
                            <Grid item>
                                :nbsp;
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
                            <Box component="img" src={steps[activeStep].image} mt={2} sx={{ borderRadius: "6px" }} />
                            {steps[activeStep].image2 ?
                                <Box component="img" src={steps[activeStep].image2} mt={2} sx={{ borderRadius: "6px" }} />
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
                                    <Typography variant="subtitle1" sx={{color: steps[activeStep].descriptionEnglishObject['red'] ? '#FF0000': 'black' }}>
                                        {steps[activeStep].descriptionEnglishObject['descriptionBeginning']}
                                    </Typography>
                                    <Grid container alignContent="center" justifyContent="flex-start">
                                        <List sx={{ listStyleType: 'disc', pl: 3 }} disablePadding>
                                            {steps[activeStep].descriptionEnglishObject['descriptionList'].map((description, index) => {
                                                if (index === steps[activeStep].descriptionEnglishObject['descriptionList'].length - 1 && steps[activeStep].descriptionEnglishObject['link']) {
                                                    return (
                                                        <ListItem key={description} sx={{ display: 'list-item' }}>
                                                            <Link href = {steps[activeStep].descriptionEnglishObject['link']} target="_blank" sx ={{color:"#0065FD", textDecoration: 'underline'}} >
                                                                {description}
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
                                    <Typography variant="subtitle1" sx={{color: steps[activeStep].descriptionEnglishObject['red'] ? '#FF0000': 'black' }}>
                                        {steps[activeStep].descriptionIndianObject['descriptionBeginning']}
                                    </Typography>
                                    <Grid container alignContent="center" justifyContent="flex-start">
                                        <List sx={{ listStyleType: 'disc', pl: 3}} disablePadding>
                                            {steps[activeStep].descriptionIndianObject['descriptionList'].map((description, index) => {
                                                    if (index === steps[activeStep].descriptionIndianObject['descriptionList'].length - 1 && steps[activeStep].descriptionIndianObject['link']) {
                                                        return (
                                                            <ListItem key={description} sx={{ display: 'list-item' }}>
                                                                <Link href = {steps[activeStep].descriptionIndianObject['link']} target="_blank" sx ={{color:"#0065FD", textDecoration: 'underline'}} >
                                                                    {description}
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

export default SalaryCard
