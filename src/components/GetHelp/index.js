import React from "react";
import { Grid, Paper, Box, Typography } from "@mui/material";
// import salaryFlow from '../../images/salaryFlow.jpg'
import {ReactComponent as SalaryFlowSVG} from '../../images/salaryFlow2.svg'
import bestBros from '../../images/bestBros.jpg'
import callMe from '../../images/callMe.jpg'
import locationUnknown from '../../images/locationUnknown.jpg'
import www from '../../images/www.jpg'
import facebook from '../../images/facebook.jpg'
import footer from '../../images/footer.jpg'
// import {ReactComponent as BestBrosSVG} from '../../images/bestBros2.svg'

function GetHelp() {
    return (
        <>
            <Grid container pt={4} spacing={2} sx={{ maxWidth: '85%', margin: 'auto' }}>
                <Paper sx={{ width: '100%', height: 'auto', borderRadius: '8px' }} elevation={4} mb={2} >
                    <Grid container alignContent="center" justifyContent="center" pb = {1}>
                        <SalaryFlowSVG sx={{ width: '100%', height: '100%' }}/>
                        {/* <Box component="img" src={salaryFlow} sx={{ width: '100%' }} p={1} /> */}
                    </Grid>
                </Paper>
            </Grid>
            <Grid container pt={4} spacing={2} sx={{ maxWidth: '85%', margin: 'auto' }} justifyContent="center" alignContent="center">
                <Paper sx={{ width: '100%', height: 'auto', borderRadius: '8px' }} elevation={4} mb={2}>
                    <Grid container direction="column"
                        justifyContent="center"
                        alignItems="center" pt={2}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>TWC2 (Transient Workers Count Too)</Typography>
                        {/* <BestBrosSVG/> */}
                        {/* <SvgIcon component={BestBrosSVG} viewBox="0 0 100 100"/> */}
                        <Box component="img" src={bestBros} sx={{ maxWidth: '90%', borderRadius: '6px' }} p={1} mt={1} />
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignContent: 'space-around' }} mt={2} mb={1}>
                            <Box component="img" src={callMe} sx={{ maxWidth: '32px', maxHeight:"32px"}} mr={2} />
                            <Box sx={{ flexDirection: 'column' }}>
                                <Typography variant='subtitle1'>Call/WhatsApp us now</Typography>

                                <Typography variant='subtitle1'>+65 6297 7564</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignContent: 'space-around' }} mt={2} mb={1}>
                            <Box component="img" src={locationUnknown} sx={{ maxWidth: '32px', maxHeight:"46px"}} mr={2} />
                            <Box sx={{ flexDirection: 'column' }}>
                                <Typography variant='subtitle1'>TWC2 Office</Typography>
                                <Typography variant='subtitle1'>Mondays to Fridays from 9am to 5pm</Typography>
                                <Typography variant='subtitle1'>180B Bencoolen Street #09-01</Typography>
                                <Typography variant='subtitle1'>The Bencoolen</Typography>
                                <Typography variant='subtitle1'>Singapore 189648</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'space-center' }} mt={2} mb={1}>
                            <Box component="img" src={www} sx={{ maxWidth: '32px', maxHeight:"32px" }} mr={2} />
                            <Box sx={{ flexDirection: 'column', alignItems: 'center' }}>
                                <Typography variant='subtitle1'>TWC2 Website</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'space-center' }} mt={2} mb={1}>
                            <Box component="img" src={facebook} sx={{ maxWidth: '44px', maxHeight:"44px" }} mr={2} />
                            <Box sx={{ flexDirection: 'column', alignItems: 'center' }}>
                                <Typography variant='subtitle1'>TWC2 Facebook (Bangla)</Typography>
                            </Box>
                        </Box>
                        {/* <Grid container direction='row' justifyContent="space-between" sx={{ maxWidth: '90%'}}>
                            <Grid container item xs= {4} alignItems="center" justifyContent="flex-end">
                                <Box component="img" src={callMe}  p={1} mt={1}/>
                            </Grid>
                            <Grid item xs = {8}>
                                <Box sx={{ flexDirection: 'column' }}>
                                    <Typography variant='subtitle1'>Call/WhatsApp us now</Typography>
                                    <Typography variant='subtitle1'>+65 6297 7564</Typography>
                                </Box>
                            </Grid>
                        </Grid> */}
                    </Grid>
                </Paper>
            </Grid>
            <Grid container pt={4} pb = {2} spacing={2} sx={{ maxWidth: '85%', margin: 'auto' }}>
                <Paper sx={{ width: '100%', height: 'auto', borderRadius: '8px' }} elevation={4} mb={2}>
                    {/* <Grid container alignContent='center' justifyContent='center'>
                        <Box component="img" src={salaryFlow} sx={{ width: '100%' }} p={1} />
                    </Grid> */}
                    <Grid container direction="column"
                        justifyContent="center"
                        alignItems="center" pt={2}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>About SalaryKi</Typography>
                        <Grid container p = {3} alignItems="center" justifyContent="center">
                            <Typography variant="subtitle1">
                                SalaryKi is a website built by Lucas, a final year student from the National University of Singapore's 
                                Division of Industrial Design as part of his final year thesis. SalaryKi is the result of months of volunteering and collaboration with TWC2, and 
                                aims to present important salary and employment information accessibly to migrant workers.
                            </Typography>
                            <Typography variant="subtitle1" mt = {3}>
                                SalaryKi হল একটি ওয়েবসাইট যা Lucas দ্বারা নির্মিত, ন্যাশনাল ইউনিভার্সিটি অফ সিঙ্গাপুরের ডিভিশন অফ ইন্ডাস্ট্রিয়াল ডিজাইনের 
                                শেষ বর্ষের ছাত্র তার শেষ বছরের থিসিসের অংশ হিসাবে। SalaryKi হল কয়েক মাসের স্বেচ্ছাসেবী এবং TWC2 এর সাথে সহযোগিতার ফল, এবং অভিবাসী কর্মীদের কাছে 
                                গুরুত্বপূর্ণ বেতন এবং কর্মসংস্থানের তথ্য সহজলভ্যভাবে উপস্থাপন করার লক্ষ্য
                            </Typography>
                            <Box component="img" src = {footer} mt = {3} sx={{maxWidth:'100%'}}/>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </>
    )
}

export default GetHelp