import React from "react";
import { Grid, Link, Typography } from "@mui/material";

function NotFound() {
    return (
        <>
            <Grid container>
                <Typography variant="h4">
                    You are lost. Click
                    <Link href="/" sx={{ color: "#0065FD", textDecoration: 'underline', pb: 1 }}>
                        here
                    </Link>
                    to go back!
                </Typography>

            </Grid>
        </>
    )
}

export default NotFound