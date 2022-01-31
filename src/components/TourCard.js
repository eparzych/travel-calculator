import { Grid, Paper, Box, Button } from '@mui/material';
import { Link } from "react-router-dom";
import { spacing } from '@mui/system';

export default function TourCard (props){

    const { trip } = props;

    return(
        <Box component={Link} to={`/edit/${trip.id}`} style={{textDecoration: 'none'}}>
            <Paper elevation={3}>
                <img className="imgCard" src="https://media.istockphoto.com/photos/fugu-fish-caught-while-fishing-in-siam-bay-picture-id187011673?s=612x612" alt="fish" />
                <Box paddingY={1} display="flex" justifyContent="center">
                    <h2>{trip.tourName}</h2>
                </Box>
                <Box sx={{pb: 1.2, mb:1.7}} display="flex" justifyContent="center">
                    <span>Cost: {trip.totalCost}</span>
                </Box>
            </Paper>
        </Box>
    )
}
