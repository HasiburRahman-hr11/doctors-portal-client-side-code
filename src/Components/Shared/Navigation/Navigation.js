import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import './Navigation.css'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';


import useAuth from '../../../hooks/useAuth';

import logo from '../../../images/logo.png';

const Navigation = () => {

    const { user, logOutUser, isAdmin } = useAuth();

    const [sticky, setSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleUserMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleUserMenuClose = () => {
        setAnchorEl(null);
    };


    // Set Sticky Menu
    window.onscroll = (e) => {
        setSticky(window.pageYOffset > 500 ? true : false)
        return () => (window.onscroll = null)
    }


    return (
        <header className={sticky ? 'header sticky' : 'header'}>
            <Container fixed>

                <Grid container sx={{
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Grid item xs={6} md={3}>
                        <div className="header_left">
                            <Link to="/">
                                <img src={logo} alt="Logo" className="logo" />
                            </Link>
                        </div>
                    </Grid>

                    <Grid item xs={6} md={9} sx={{
                        position: 'relative'
                    }} >
                        <div className={menuOpen ? `header_right active` : 'header_right'}>
                            <CloseIcon className="menu_close" onClick={() => setMenuOpen(false)} />
                            <ul className="main-menu">
                                <li className="menu-item" onClick={() => setMenuOpen(false)}>
                                    <NavHashLink smooth activeStyle={{ color: 'var(--primary-color)' }} to="/home#hero">Home</NavHashLink>
                                </li>
                                <li className="menu-item" onClick={() => setMenuOpen(false)}>
                                    <NavHashLink smooth activeStyle={{ color: 'var(--primary-color)' }} to="/home#about">About</NavHashLink >
                                </li>
                                <li className="menu-item" onClick={() => setMenuOpen(false)}>
                                    <NavHashLink smooth activeStyle={{ color: 'var(--primary-color)' }} to="/home#services">Dental Services</NavHashLink >
                                </li>
                                <li className="menu-item" onClick={() => setMenuOpen(false)}>
                                    <NavHashLink smooth activeStyle={{ color: 'var(--primary-color)' }} to="/home#reviews">Reviews</NavHashLink >
                                </li>
                                <li className="menu-item" onClick={() => setMenuOpen(false)}>
                                    <NavHashLink smooth activeStyle={{ color: 'var(--primary-color)' }} to="/home#blog">Blog</NavHashLink >
                                </li>
                                <li className="menu-item" onClick={() => setMenuOpen(false)}>
                                    <NavHashLink smooth activeStyle={{ color: 'var(--primary-color)' }} to="/home#contact">Contact Us</NavHashLink >
                                </li>
                                {user?.email || user?.displayName ? (
                                    <li className="menu-item">
                                        <Tooltip title="Account settings">
                                            <IconButton onClick={handleUserMenuClick} size="small" sx={{ ml: 2 }}>
                                                <Avatar sx={{ width: 32, height: 32 }}>
                                                    {user?.displayName && user?.displayName?.substr(0, 1)}
                                                </Avatar>
                                            </IconButton>
                                        </Tooltip>
                                        <Menu
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleUserMenuClose}
                                            onClick={handleUserMenuClose}
                                            PaperProps={{
                                                elevation: 0,
                                                sx: {
                                                    overflow: 'visible',
                                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                    mt: 1.5,
                                                    '& .MuiAvatar-root': {
                                                        width: 32,
                                                        height: 32,
                                                        ml: -0.5,
                                                        mr: 1,
                                                    },
                                                    '&:before': {
                                                        content: '""',
                                                        display: 'block',
                                                        position: 'absolute',
                                                        top: 0,
                                                        right: 14,
                                                        width: 10,
                                                        height: 10,
                                                        bgcolor: 'background.paper',
                                                        transform: 'translateY(-50%) rotate(45deg)',
                                                        zIndex: 0,
                                                    },
                                                },
                                            }}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >
                                            <MenuItem onClick={() => setMenuOpen(false)}>
                                                <Link to="/profile" style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    width: '100%'
                                                }}>
                                                    <Avatar /> {user?.displayName && user?.displayName?.split(' ')[0]}
                                                </Link >
                                            </MenuItem>
                                            {isAdmin && (
                                                <MenuItem onClick={() => setMenuOpen(false)}>
                                                    <Link to="/admin" style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        width: '100%'
                                                    }}>
                                                        <Avatar /> Dashboard
                                                    </Link >
                                                </MenuItem>
                                            )}
                                            <Divider />


                                            <MenuItem onClick={() => {
                                                logOutUser();
                                                setMenuOpen(false)
                                            }}>
                                                <ListItemIcon>
                                                    <Logout fontSize="small" />
                                                </ListItemIcon>
                                                Logout
                                            </MenuItem>
                                        </Menu>
                                    </li>
                                ) : (
                                    <li className="menu-item">
                                        <Link to="/login">Login</Link >
                                    </li>
                                )}
                            </ul>


                            
                        </div>
                        <MenuOpenIcon className="menu_open" onClick={() => setMenuOpen(true)} />
                            <div className={menuOpen ? `header_overlay active` : 'header_overlay'} onClick={() => setMenuOpen(false)}></div>
                    </Grid>

                </Grid>





            </Container>
        </header>
    );
};

export default Navigation;