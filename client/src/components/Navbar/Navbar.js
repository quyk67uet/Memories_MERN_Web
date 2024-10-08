import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AppBar, Avatar, Button, Typography, Toolbar } from '@mui/material'
import useStyles from "./styles";
import memories from "../../images/memories.jpg";
import { googleLogout } from '@react-oauth/google';
import { useDispatch } from "react-redux";
import decode from 'jwt-decode';
import * as actionType from '../../constants/actionTypes';

const Navbar = () => {
    const classes = useStyles();
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();


    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        navigate('/auth');
        googleLogout();
        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;

        if(token) {
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Link to="/" className={classes.heading}>
                    <Typography variant="h2" align="center">Memories</Typography>
                </Link>
                <img className={classes.image} src={memories} alt="icon" height="60"/>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}> Logout</Button>
                    </div>
                ) : (
                    <Link to="/auth" className={classes.link}>
                        <Button variant="contained" color="primary">Sign In</Button>
                    </Link>
                )}   
            </Toolbar> 
      </AppBar>
    );
};

export default Navbar;
