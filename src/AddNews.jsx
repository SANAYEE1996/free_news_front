import { useState, useEffect } from "react";
import { Button, Grid } from "@mui/material";


function AddNews(){



    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography component="h1" variant="h5">기사 작성</Typography>
                </Grid>
            </Grid>
            <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField variant="outlined" required fullWidth id="email" label="email" name="email" autoComplete="email" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="outlined" required fullWidth id="password" label="password" name="password" autoComplete="password" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" fullWidth variant="contained" color="primary">Login</Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default AddNews;