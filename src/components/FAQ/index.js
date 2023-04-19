import React from "react";
import { Grid, Paper, Box, Typography, Button, Divider } from "@mui/material";

function FAQ() {
    const phoneNumber = 62977564;
    const handleClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };
    return (
        <Grid container pt={4} spacing={2} sx={{ maxWidth: '85%', margin: 'auto' }} pb={2}>
            <Paper sx={{ width: '100%', height: 'auto', borderRadius: '8px' }} elevation={4} mb={2}>
                <Grid container direction="column" justifyContent="center" alignItems="center" pt={2}>
                    <Box sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid container justifyContent="center"
                            alignItems="center">
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>FAQ</Typography>
                        </Grid>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>সচরাচর জিজ্ঞাস্য</Typography>
                    </Box>
                    <Grid container p={3} pt={2} alignItems="center" justifyContent="flex-start">
                        <Box sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                                Q: I have salary problem, but I am scared to tell my boss. I am afraid I will get more problems, or get sent back.
                            </Typography>
                            <Typography variant="subtitle1">
                                আমার বেতনের সমস্যা আছে, কিন্তু আমি আমার বসকে বলতে ভয় পাচ্ছি। আমি ভয় পাচ্ছি যে আমি আরও সমস্যা পাব, বা ফেরত পাঠানো হবে
                            </Typography>
                        </Box>
                        <Box sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'background.cardOverTime' }} mt={2}>
                            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                                A: We understand. This is quite common. Sometimes, workers wait until their work permit is almost finished before making salary claim because it can be safer. You should still talk to us at TWC2 so we can help you.
                            </Typography>
                            <Typography variant="subtitle1" mb={4}>
                                আমরা বুঝতে পেরেছি. এটি বেশ সাধারণ। কখনও কখনও, শ্রমিকরা বেতন দাবি করার আগে তাদের ওয়ার্ক পারমিট প্রায় শেষ না হওয়া পর্যন্ত অপেক্ষা করে কারণ এটি নিরাপদ হতে পারে। আপনার এখনও আমাদের সাথে TWC2 এ কথা বলা উচিত যাতে আমরা আপনাকে সাহায্য করতে পারি
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid container alignItems="center" justifyContent="center" mb={1}>
                        <Divider flexItem sx={{ width: "90%", borderBottomWidth: 2, borderColor: "black" }} />
                    </Grid>
                    <Grid container p={3} pt={2} alignItems="center" justifyContent="flex-start">
                        <Box sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                                Q : I am working in new company, but previous company still have not paid me. What should I do?
                            </Typography>
                            <Typography variant="subtitle1">
                                আমি নতুন কোম্পানিতে কাজ করছি, কিন্তু আগের কোম্পানি এখনও আমাকে বেতন দেয়নি। আমার কি করা উচিৎ?
                            </Typography>
                        </Box>
                        <Box sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'background.cardOverTime', }} mt={2}>
                            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                                A: You can file a salary claim against your previous company. You must file a claim within 1 year after you were underpaid for it to be valid.
                            </Typography>
                            <Typography variant="subtitle1" mb={4}>
                                আপনি আপনার আগের কোম্পানির বিরুদ্ধে বেতন দাবি করতে পারেন। বৈধ হওয়ার জন্য আপনাকে কম বেতনের পরে 1 বছরের মধ্যে একটি দাবি দায়ের করতে হবে
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid container alignItems="center" justifyContent="center" mb={1}>
                        <Divider flexItem sx={{ width: "90%", borderBottomWidth: 2, borderColor: "black" }} />
                    </Grid>
                    <Grid container p={3} pt={2} alignItems="center" justifyContent="flex-start">
                        <Box sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                                Q: My boss want to send me back when I have salary problem. What should I do?
                            </Typography>
                            <Typography variant="subtitle1">
                                আমি নতুন কোম্পানিতে কাজ করছি, কিন্তু আগের কোম্পানি এখনও আমাকে বেতন দেয়নি। আমার কি করা উচিৎ?
                            </Typography>
                        </Box>
                        <Box sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'background.cardOverTime' }} mt={2}>
                            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                                A: Your boss cannot send you back home when you have salary problem. Come and talk to us at TWC2 and we will help you!
                            </Typography>
                            <Typography variant="subtitle1">
                                আপনার বেতন সমস্যা হলে আপনার বস আপনাকে বাড়িতে ফেরত পাঠাতে পারবেন না। আসুন TWC2 এ আমাদের সাথে কথা বলুন এবং আমরা আপনাকে সাহায্য করব।!
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid container p={3} pt={2} alignItems="center" justifyContent="center">
                        <Button variant="contained" sx={{ backgroundColor: "#61C200", color: 'white' }} onClick={handleClick}>
                            Call TWC2
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default FAQ