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
                    <Box style={{ width: '100%' }} sx={{ display: 'flex', justifyContent: 'space-evenly', m: 1 }}>
                        <Button sx={{ color: "black" }} onClick={() => handleButtonClick('Salary Rights')}>
                            <Box sx={{ flexDirection: 'column', borderBottom: activeButton === "Salary Rights" && "2px solid black" }}>
                                <Typography variant='subtitle1' sx={{ fontWeight: activeButton === 'Salary Rights' && "bold" }}>Salary Rights</Typography>
                                <Typography variant='subtitle1' sx={{ fontWeight: activeButton === 'Salary Rights' && "bold" }}>বেতন অধিকার</Typography>
                            </Box>
                        </Button>
                        <Button sx={{ color: "black" }} onClick={() => handleButtonClick('Get Help')}>
                            <Box sx={{ flexDirection: 'column', borderBottom: activeButton === "Get Help" && "2px solid black" }} >
                                <Typography variant='subtitle1' sx={{ fontWeight: activeButton === 'Get Help' && "bold" }}>Get Help</Typography>
                                <Typography variant='subtitle1' sx={{ fontWeight: activeButton === 'Get Help' && "bold" }}>সাহায্য পান</Typography>
                            </Box>
                        </Button>
                        <Button sx={{ color: "black" }} onClick={() => handleButtonClick('FAQ')}>
                            <Box sx={{ flexDirection: 'column', borderBottom: activeButton === "FAQ" && "2px solid black" }} >
                                <Typography variant='subtitle1' sx={{ fontWeight: activeButton === 'FAQ' && "bold" }}>FAQ</Typography>
                                <Typography variant='subtitle1' sx={{ fontWeight: activeButton === 'FAQ' && "bold" }}>সচরাচর জিজ্ঞাস্য</Typography>
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