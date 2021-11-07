import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ToTop from '../ToTop/ToTop';

import footerBg from '../../images/footer-bg.png';

const footerStyle = {
    background: ` url(${footerBg})`,
    // backgroundRepeat: 'no-repeat'
}

const Footer = () => {
    return (
        <Box component="div" className="footer" style={footerStyle} sx={{
            paddingTop: '90px',
            paddingBottom: '50px'
        }}>
            <Container fixed>
                <Grid container spacing={3}>
                    <Grid item md={3} sm={6} xs={12}>
                        <Box component="div" className="footer-widget">
                            <Typography variant="h4" component="h4">
                                Quick Links
                            </Typography>
                            <ul>
                                <li>
                                    <Link to="#">Emergency Dental Care</Link>
                                </li>
                                <li>
                                    <Link to="#">Treatment of Personal Diseases</Link>
                                </li>
                                <li>
                                    <Link to="#">Tooth Extraction</Link>
                                </li>
                                <li>
                                    <Link to="#">Check up</Link>
                                </li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <Box component="div" className="footer-widget">
                            <Typography variant="h4" component="h4">
                                Services
                            </Typography>
                            <ul>
                                <li>
                                    <Link to="#">Emergency Dental Care</Link>
                                </li>
                                <li>
                                    <Link to="#">Treatment of Personal Diseases</Link>
                                </li>
                                <li>
                                    <Link to="#">Tooth Extraction</Link>
                                </li>
                                <li>
                                    <Link to="#">Check up</Link>
                                </li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <Box component="div" className="footer-widget">
                            <Typography variant="h4" component="h4">
                                Oral Health
                            </Typography>
                            <ul>
                                <li>
                                    <Link to="#">Emergency Dental Care</Link>
                                </li>
                                <li>
                                    <Link to="#">Treatment of Personal Diseases</Link>
                                </li>
                                <li>
                                    <Link to="#">Tooth Extraction</Link>
                                </li>
                                <li>
                                    <Link to="#">Check up</Link>
                                </li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <Box component="div" className="footer-widget">
                            <Typography variant="h4" component="h4">
                                Our Addresses
                            </Typography>
                            <Typography variant="p" component="p" sx={{
                                color: '#838A9E'
                            }}>
                                New York - 101010 Hudson Roads
                            </Typography>

                            <Box component="div" className="footer-social" sx={{
                                display: 'flex',
                                alignItems: 'center',
                                marginTop: '30px'
                            }}>
                                <Link to="#">
                                    <GoogleIcon className="social-icon" />
                                </Link>
                                <Link to="#">
                                    <TwitterIcon className="social-icon" />
                                </Link>
                                <Link to="#">
                                    <InstagramIcon className="social-icon" />
                                </Link>
                            </Box>

                            <Box component="div" sx={{
                                marginTop: '30px'
                            }}>
                                <Typography variant="p" component="p" sx={{
                                    color: '#838A9E'
                                }}>
                                    Call us now
                                </Typography>
                                <a href="tel:+010001234567" className="btn btn-primary">+01 000 123 4567</a>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Typography variant="p" component="p" sx={{
                    textAlign: 'center',
                    color: '#838A9E',
                    paddingTop: '70px'
                }}>
                    Copyright {new Date().getFullYear()} all Rights Reserved
                </Typography>
            </Container>
            <ToTop/>
        </Box>
    );
};

export default Footer;