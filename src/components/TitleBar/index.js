import React from 'react'
import { Grid, Typography  } from '@mui/material'


const TitleBar = () => {
    return (
        <Grid container direction="row" alignItems="flex-end" justifyContent="center" bgcolor={'background.title'} >
            <Grid item color={'primary.main'}> 
                <Typography variant="h4" pt={3} pb={1}>
                    SalaryKi
                </Typography>
            </Grid>
        </Grid>
    )
}

export default TitleBar