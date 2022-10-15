import { Container, Grid, styled, Box, Typography } from "@mui/material";
import React from "react";
import idea from '../../static/idea.png';
import banana from '../../static/banana.jpeg';
import brocolli from '../../static/brocolli.png';
import lips from '../../static/lips.jpeg';

const Blog = () => {
    const StyledCard = styled(Box)(({ theme }) => ({
        display: 'flex',
        borderStyle: 'solid',
        borderColor: 'lightGray',
        borderWidth: '0.5px',
        justifyContent: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        cursor: 'pointer',
        [theme.breakpoints.up('md')]: {
            height: 500,
        },
        [theme.breakpoints.down('md')]: {
            height: 200,
        },
        '&:hover': {
            opacity: 0.8,
            boxSizing: 'borderBox',
            zIndex: 1,
            transition: `all 0.45s ease`,
        }
    }));
    const StyledTitle = styled(Box)({
        textAlign: 'center',
        background: 'white',
        height: '100px',
        width: '100%',
        marginTop: '400px'
    });
    const StyledText = styled(Typography)({
        fontFamily: 'Forum, cursive',
        //fontWeight: 'bold',
        fontSize: 30,
    })
    return <Container>
        <Grid container direction={'row'} columnSpacing={2} rowSpacing={2} marginTop='10px' marginBottom='100px'>
            <Grid item md={5} xs={6}>
                <StyledCard sx={{ backgroundImage: `url(${idea})` }}>
                    <StyledTitle sx={{ display: { xs: 'none', md: 'block' } }}>
                        <StyledText>Brain</StyledText>
                    </StyledTitle>
                </StyledCard>
            </Grid>
            <Grid item md={7} xs={6}>
                <StyledCard sx={{ backgroundImage: `url(${banana})` }}>
                    <StyledTitle sx={{ display: { xs: 'none', md: 'block' } }}>
                        <StyledText>Banana with Pink Background</StyledText>
                    </StyledTitle>
                </StyledCard>
            </Grid>
            <Grid item md={7} xs={6}>
                <StyledCard sx={{ backgroundImage: `url(${lips})` }}>
                    <StyledTitle sx={{ display: { xs: 'none', md: 'block' } }}>
                        <StyledText>Frog Lips</StyledText>
                    </StyledTitle>
                </StyledCard>
            </Grid>
            <Grid item md={5} xs={6}>
                <StyledCard sx={{ backgroundImage: `url(${brocolli})` }}>
                    <StyledTitle sx={{ display: { xs: 'none', md: 'block' } }}>
                        <StyledText>Brocolli House</StyledText>
                    </StyledTitle>
                </StyledCard>
            </Grid>
        </Grid>
    </Container >
}

export default Blog;