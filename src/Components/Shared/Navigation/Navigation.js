import React from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import './Navigation.css'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';


import useAuth from '../../../hooks/useAuth';

const Navigation = () => {

    const { user, logOutUser, isAdmin } = useAuth();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleUserMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleUserMenuClose = () => {
        setAnchorEl(null);
    };


    return (
        <Box component="header" className="header">
            <Container fixed>
                <ul className="main-menu">
                    <li className="menu-item">
                        <NavHashLink smooth activeStyle={{ color: 'var(--primary-color)' }} to="/home#hero">Home</NavHashLink>
                    </li>
                    <li className="menu-item">
                        <NavHashLink smooth activeStyle={{ color: 'var(--primary-color)' }} to="/home#about">About</NavHashLink >
                    </li>
                    <li className="menu-item">
                        <NavHashLink smooth activeStyle={{ color: 'var(--primary-color)' }} to="/home#services">Dental Services</NavHashLink >
                    </li>
                    <li className="menu-item">
                        <NavHashLink smooth activeStyle={{ color: 'var(--primary-color)' }} to="/home#reviews">Reviews</NavHashLink >
                    </li>
                    <li className="menu-item">
                        <NavHashLink smooth activeStyle={{ color: 'var(--primary-color)' }} to="/home#blog">Blog</NavHashLink >
                    </li>
                    <li className="menu-item">
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
                                <MenuItem>
                                    <Link to="/profile" style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        width:'100%'
                                    }}>
                                        <Avatar /> {user?.displayName && user?.displayName?.split(' ')[0]}
                                    </Link >
                                </MenuItem>
                                {isAdmin && (
                                    <MenuItem>
                                        <Link to="/admin" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            width:'100%'
                                        }}>
                                            <Avatar /> Dashboard
                                        </Link >
                                    </MenuItem>
                                )}
                                <Divider />


                                <MenuItem onClick={() => logOutUser()}>
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
            </Container>
        </Box>
    );
};

export default Navigation;