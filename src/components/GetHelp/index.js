import React from "react";
import { Grid, Paper, Box, Typography, Link} from "@mui/material";
import bestBros from '../../images/bestBros.webp'
import callMe from '../../images/callMe.webp'
import locationUnknown from '../../images/locationUnknown.webp'
import www from '../../images/www.webp'
import facebook from '../../images/facebook.webp'
import footer from '../../images/footer.webp'
import massive from '../../images/massive_journey.webp'

function GetHelp() {
    return (
        <>
            <Grid container pt={4} spacing={2} sx={{ maxWidth: '85%', margin: 'auto' }}>
                <Paper sx={{ width: '100%', height: 'auto', borderRadius: '8px' }} elevation={4} mb={2} >
                    <Grid container alignContent="center" justifyContent="center" pb={1}>
                        <Box component="img" src={massive} mt={2} sx={{ borderRadius: "6px", maxWidth: "100%", p: 1 }} />
                    </Grid>
                </Paper>
            </Grid>
            <Grid container pt={4} spacing={2} sx={{ maxWidth: '85%', margin: 'auto' }} justifyContent="center" alignContent="center">
                <Paper sx={{ width: '100%', height: 'auto', borderRadius: '8px' }} elevation={4} mb={2}>
                    <Grid container direction="column"
                        justifyContent="center"
                        alignItems="center" pt={2}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>TWC2 (Transient Workers Count Too)</Typography>
                        <Box component="img" src={bestBros} sx={{ maxWidth: '90%', borderRadius: '6px' }} p={1} mt={1} />
                        <Grid container direction='row' justifyContent="space-between" sx={{ maxWidth: '90%', mb:2, mt: 2}}>
                            <Grid container item xs={4} alignItems="center" justifyContent="flex-end">
                                <Box component="img" src={callMe} sx={{ maxWidth: '32px', maxHeight: "32px" }} mr={2} />
                            </Grid>
                            <Grid item xs={8} mb = {4}>
                                <Box sx={{ flexDirection: 'column' }}>
                                    <Typography variant='subtitle1' sx = {{fontWeight:'bold', mb:1}}>Call/WhatsApp us now</Typography>
                                    <Link href = "https://api.whatsapp.com/send?phone=6562977564" target="_blank" sx={{ color: "#0065FD", textDecoration: 'underline' }}>
                                        <Typography variant='subtitle1'>+65 6297 7564</Typography>
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid container item xs={4} alignItems="center" justifyContent="flex-end">
                                <Box component="img" src={locationUnknown} sx={{ maxWidth: '32px', maxHeight: "46px" }} mr={3} />
                            </Grid>
                            <Grid item xs={8} mb = {4}>
                            <Box sx={{ flexDirection: 'column' }}>
                                <Typography variant='subtitle1' sx = {{fontWeight:'bold', mb:1}}>TWC2 Office</Typography>
                                <Typography variant='subtitle1'>Mondays to Fridays from 9am to 5pm</Typography>
                                <Typography variant='subtitle1'>180B Bencoolen Street #09-01</Typography>
                                <Typography variant='subtitle1'>The Bencoolen</Typography>
                                <Typography variant='subtitle1'>Singapore 189648</Typography>
                            </Box>
                            </Grid>
                            <Grid container item xs={4} alignItems="center" justifyContent="flex-end" mb = {4}>
                                <Box component="img" src={www} sx={{ maxWidth: '42px', maxHeight: "42px" }} mr={2} />
                            </Grid>
                            <Grid item xs={8}>
                            <Box sx={{ flexDirection: 'column', alignItems:"center", justifyContent:"center" }}>
                                <Link href="https://twc2.org.sg/language-menu-for-qr-code/" target="_blank" sx={{ color: "#0065FD", textDecoration: 'underline' }}>
                                    <Typography variant='subtitle1'>TWC2 Website</Typography>
                                </Link>
                            </Box>
                            </Grid>
                            <Grid container item xs={4} alignItems="center" justifyContent="flex-end">
                                <Box component="img" src={facebook} sx={{ maxWidth: '42px', maxHeight: "42px" }} mr={2} />
                            </Grid>
                            <Grid item xs={8} mb = {4}>
                            <Box sx={{ flexDirection: 'column' }}>
                                <Link href="https://www.facebook.com/twc2bangla" target="_blank" sx={{ color: "#0065FD", textDecoration: 'underline' }}>
                                    <Typography variant='subtitle1'>TWC2 Facebook (Bangla)</Typography>
                                </Link>
                            </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid container pt={4} pb={2} spacing={2} sx={{ maxWidth: '85%', margin: 'auto' }}>
                <Paper sx={{ width: '100%', height: 'auto', borderRadius: '8px' }} elevation={4} mb={2}>
                    <Grid container direction="column"
                        justifyContent="center"
                        alignItems="center" pt={2}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>About SalaryKi</Typography>
                        <Grid container p={3} alignItems="center" justifyContent="center">
                            <Typography variant="subtitle1">
                                SalaryKi is a website built by Lucas, a final year student from the National University of Singapore's
                                Division of Industrial Design as part of his final year thesis. SalaryKi is the result of months of volunteering and collaboration with TWC2, and
                                aims to present important salary and employment information accessibly to migrant workers.
                            </Typography>
                            <Typography variant="subtitle1" mt={3}>
                                SalaryKi হল একটি ওয়েবসাইট। এটি ন্যাশনাল ইউনিভার্সিটি অফ সিঙ্গাপুরের ডিভিশন অফ ইন্ডাস্ট্রিয়াল ডিজাইনের মিঃ লুকাস তার শেষ বছরের থিসিসের অংশ হিসাবে 
                                তৈরি করেছেন। কয়েক মাস ধরে দেয়া স্বেচ্ছাসেবা এবং টিডব্লিউসি২ এর সাথে সহযোগিতার ফলে এই ওয়েবসাইটটি নির্মিত হয়েছে। অভিবাসী শ্রমিকদের কাছে তাদের বেতন এবং 
                                চাকুরি সংক্রান্ত তথ্য সহজভাবে উপস্থাপন করার লক্ষে এই ওয়েবসাইটটির সূচনা
                            </Typography>
                            <Box component="img" src={footer} mt={3} sx={{ maxWidth: '100%' }} />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </>
    )
}

export default GetHelp