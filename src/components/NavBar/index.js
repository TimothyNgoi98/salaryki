import React, { useEffect } from 'react'
import { useState } from 'react'
// import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material'
import HeaderSalaryRights from '../HeaderSalaryRights';
import EmploymentRightsSection from '../EmploymentRightsSection';
import GetHelp from '../GetHelp';
import FAQ from '../FAQ';


function NavBar() {
    // const [displayMain, setDisplayMain] = useState(true);
    // const [displayGetHelp, setDisplayGetHelp] = useState(false);
    // const [displayFAQ, setDisplayFAQ] = useState(false);
    const [activeButton, setActiveButton] = useState('Salary Rights');
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
        console.log(activeButton)
    };
    useEffect(() => {
        console.log('active button is now', activeButton)
    }, [activeButton])

    return (
        <>
            <AppBar position='static' pb={4}>
                <Toolbar disableGutters >
                    <Box  style={{ width: '100%' }} sx={{ display: 'flex', justifyContent: 'space-evenly', m: 1 }}>
                        <Button sx={{ color: "black" }} onClick={() => handleButtonClick('Salary Rights')}>
                            <Box sx={{ flexDirection: 'column' }}>
                                <Typography variant='subtitle1' align="center">Salary Rights</Typography>
                                <Typography variant='subtitle1'>বেতন অধিকার</Typography>
                            </Box>
                        </Button>
                        <Button sx={{ color: "black" }} onClick={() => handleButtonClick('Get Help')}>
                            <Box sx={{ flexDirection: 'column' }} >
                                <Typography variant='subtitle1' align="center">Get Help</Typography>
                                <Typography variant='subtitle1'>সাহায্য পান</Typography>
                            </Box>
                        </Button>
                        <Button sx={{ color: "black" }} onClick={() => handleButtonClick('FAQ')}>
                            <Box sx={{ flexDirection: 'column' }} >
                                <Typography variant='subtitle1' align="center">FAQ</Typography>
                                <Typography variant='subtitle1'>সচরাচর জিজ্ঞাস্য</Typography>
                            </Box>
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            {activeButton === 'Salary Rights' && (
                <>
                    <HeaderSalaryRights />
                    <EmploymentRightsSection />
                </>
            )}
            {activeButton === 'Get Help' && <GetHelp />}
            {activeButton === 'FAQ' && <FAQ />}
        </>
    )
}
export default NavBar