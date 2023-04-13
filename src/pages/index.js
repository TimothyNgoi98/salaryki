import React from "react";
import TitleBar from "../components/TitleBar";
import NavBar from '../components/NavBar';
import HeaderSalaryRights from '../components/HeaderSalaryRights';
import EmploymentRightsSection from '../components/EmploymentRightsSection';
import GetHelp from "../components/GetHelp";
import FAQ from "../components/FAQ";


function Home() {
    return(
        <>
            <TitleBar/>
            <NavBar/>
            <HeaderSalaryRights/>
            <EmploymentRightsSection/>
            <GetHelp/>
            <FAQ/>
        </>
    )
}

export default Home