import { Grid, Paper, Box, Button } from '@mui/material';

export default function TourCard (props){

    const { trip } = props;

    return(
        <Grid item xs={3}>
            <Paper elevation={3}>
                <img className="imgCard" src="https://media.istockphoto.com/photos/fugu-fish-caught-while-fishing-in-siam-bay-picture-id187011673?s=612x612" alt="fish" />
                <Box paddingY={1} display="flex" justifyContent="center">
                    <h2>{trip.tourName}</h2>
                </Box>
                <Box>
                    <p>Cost: </p>
                </Box>
            </Paper>
        </Grid>
    )
}
