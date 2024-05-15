import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Drawer,
    Button
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/logo.png';
import '../styles/styles.css'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Header = (props) => {
    const ColorButton = styled(Button)(({ theme }) => ({
        color: '#FFFFFF',
        borderRadius: '4em',
        '&:hover': {
            backgroundColor: '#27FCFC',
            color: '#212121'
        },
        '&.active': {
            backgroundColor: '#27FCFC',
            color: '#212121'
        },
    }));

    const links = [
        { id: 1, route: 'HOME', url: '/' },
        { id: 2, route: 'ABOUT', url: '/about' },
        { id: 3, route: 'SERVICES', url: '/' },
        { id: 4, route: 'CONTACT', url: '/' },
    ];

    const [state, setState] = useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {links.map((link) => (
                    <ListItem button key={link.id} component={RouterLink} to={link.url}>
                        <ListItemText primary={link.route} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const theme = useTheme();
    const phoneView = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box>
            <AppBar
                elevation={0}
                className='app-bar'
                // sx={{
                //     backgroundColor: `rgba(33, 33, 33, 0)`,
                //     animation: 'shrink linear forwards',
                //     animationTimeline: scroll()
                // }}
            >
                <Box width={'100%'} height={'6px'} backgroundColor={'#80FFFF'} className='scroll-watcher'></Box>
                <Toolbar className='toolBar'>
                    <img src={Logo}
                        className='logo'
                        style={{
                            // height: '23vh',
                            marginTop: '2em',
                            position: 'absolute',
                            left: phoneView ? '50%' : '1em',
                            top: 0,
                            transform: phoneView ? 'translate(-50%, 0)' : 'translate(0, 0)'
                        }}
                    ></img>

                    <Box></Box>

                    {phoneView ? (
                        <Box width={phoneView ? 100 : 200}>
                            <IconButton
                                size="large"
                                edge="end"
                                color="inherit"
                                aria-label="menu"
                                onClick={toggleDrawer('right', true)}
                            >
                                <MenuIcon className='menuIcon' fontSize="" style={{ fill: '#80FFFF' }} />
                            </IconButton>

                            <Drawer
                                anchor="right"
                                open={state['right']}
                                onClose={toggleDrawer('right', false)}
                            >
                                {list('right')}
                            </Drawer>
                        </Box>
                    ) : <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            flexGrow: '0.05',
                            height: '100%',
                            alignItems: 'center',
                            borderSpacing: '2em',
                        }}
                    >
                        {links.map((link) => (
                            <ColorButton variant="text" key={link.id} component={RouterLink} to={link.url} className={`header-button ${link.id == 1 ? 'active' : ''}`}>
                                {link.route}
                            </ColorButton>
                        ))}
                    </Box>}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;