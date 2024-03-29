import React from 'react'
import { Grid, Typography  } from '@mui/material'


function TitleBar() {
    return (
        <Grid container direction="row" alignItems="flex-end" justifyContent="center" bgcolor={'background.title'} >
            <Grid item color={'primary.main'}> 
                <Typography variant="h4" pt={3} pb={1} sx = {{fontWeight:"bold"}}>
                    SalaryKi
                </Typography>
            </Grid>
        </Grid>
    )
}

export default TitleBar