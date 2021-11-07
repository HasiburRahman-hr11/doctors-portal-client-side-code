import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import contactBg from '../../images/appointment-bg.png';

const sectionStyle = {
    background: `linear-gradient(rgba(58, 66, 86 , 0.9),rgba(58, 66, 86 , 0.9)) , url(${contactBg})`,
    backgroundRepeat: 'no-repeat'
}


const ContactSection = () => {
    return (
        <Box component="div" className="contact-section" id="contact" style={sectionStyle} sx={{
            marginTop: {
                md: '100px',
                xs: '80px'
            },
            padding: '50px 0'
        }}>

            <Container fixed>
                <Box component="div" className="section-header" sx={{
                    marginBottom: '50px'
                }}>
                    <Typography variant="h5" component="h5">
                        CONTACT US

                    </Typography>
                    <Typography variant="h2" component="h2" sx={{
                        color: '#fff !important'
                    }}>
                        Let's have a talk
                    </Typography>
                </Box>

                <Box component="div" sx={{
                    maxWidth:'500px',
                    margin:'0 auto'
                }}>
                    <form component="div" action="" className="contact-form">
                        <Box component="div" className="input-group">
                            <input
                                type="text"
                                className="contact-input"
                                placeholder="Your Name*"
                                required
                            />
                        </Box>
                        <Box component="div" className="input-group">
                            <input
                                type="email"
                                className="contact-input"
                                placeholder="Email Address*"
                                required
                            />
                        </Box>
                        <Box component="div" className="input-group">
                            <input
                                type="text"
                                className="contact-input"
                                placeholder="Subject*"
                                required
                            />
                        </Box>
                        <Box component="div" className="input-group">
                            <textarea
                                className="contact-input"
                                placeholder="Your Message*"
                                required
                            />
                        </Box>
                        <Box component="div" sx={{textAlign:'center'}}>
                            <button type="submit" className="btn btn-primary">SUBMIT</button>
                        </Box>

                    </form>
                </Box>
            </Container>

        </Box>
    );
};

export default ContactSection;