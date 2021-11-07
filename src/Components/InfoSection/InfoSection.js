import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RoomIcon from '@mui/icons-material/Room';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';


const infoStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: {
        sm:'center',
        xs:'flex-start'
    },
    borderRadius: '5px',
    color: '#fff',
    padding: {
        md:'30px 30px',
        sm:'30px 10px',
        xs:'20px 20px'
    },
    flexDirection: {
        md: 'row',
        sm: 'column',
        xs: 'row'
    }
}

const InfoItem = ({ bgColor, title, desc, children }) => {
    return (
        <Grid item sm={4} xs={12} >
            <Box component="div" sx={{ ...infoStyle, backgroundColor: bgColor }}>
                <Box component="div">
                    {children}
                </Box>
                <Box component="div">
                    <Typography variant="h6" component="h6" sx={{
                        fontSize: '16px',
                        fontWeight: '600',
                        textAlign:{
                            sm:'center',
                            md:'left',
                            lg:'left'
                        }
                    }}>
                        {title}
                    </Typography>
                    <Typography variant="p" component="p" sx={{
                        color: '#F1FBFB',
                        fontSize: '14px'
                    }}>
                        {desc}
                    </Typography>
                </Box>
            </Box>
        </Grid>
    )
}

const InfoSection = () => {



    return (
        <Box component="div" className="info-section" sx={{
            marginTop:{
                md:'-100px',
                xs:'60px'
            }
        }}>
            <Container>
                <Grid container spacing={3}>

                    <InfoItem
                        bgColor='var(--primary-color)'
                        title="Opening Hours"
                        desc="10.00 AM to 10.00 PM"
                    >
                        <AccessTimeIcon sx={{
                            fontSize: {
                                lg: '50px',
                                md: '40px',
                                sm: '35px',
                                xs: '35px',
                            },
                            marginRight: '15px'
                        }} />
                    </InfoItem>

                    <InfoItem
                        bgColor='var(--secondary-color)'
                        title="Our Location"
                        desc="Brooklyn, NY 10036, United States"
                    >
                        <RoomIcon sx={{
                            fontSize: {
                                lg: '50px',
                                md: '40px',
                                sm: '35px',
                                xs: '35px',
                            },
                            marginRight: '15px'
                        }} />
                    </InfoItem>


                    <InfoItem
                        bgColor='var(--primary-color)'
                        title="Contact Us Now"
                        desc="+000 123 45678"
                    >
                        <PhoneInTalkIcon sx={{
                            fontSize: {
                                lg: '50px',
                                md: '40px',
                                sm: '35px',
                                xs: '35px',
                            },
                            marginRight: '15px'
                        }} />
                    </InfoItem>

                </Grid>
            </Container>
        </Box>
    );
};

export default InfoSection;