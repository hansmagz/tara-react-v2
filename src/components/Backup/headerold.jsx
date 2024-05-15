import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Link,
    Box,
    Toolbar,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Drawer,
    Button,
    Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from "react-router-dom";
// import useScrollTrigger from '@mui/material/useScrollTrigger';
// import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/logo.png';
import '../styles/styles.css'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DownloadIcon from '@mui/icons-material/Download';

const Header = (props) => {

    const ColorButton = styled(Button)(({ theme }) => ({
        color: '#FFFFFF',
        // backgroundColor: purple[500],
        // height: '2em',
        borderRadius: '4em',
        // backgroundColor: '#000000',
        '&:hover': {
            backgroundColor: '#27FCFC',
            color: '#212121'
        },
        '&.active': {
            backgroundColor: '#27FCFC',
            color: '#212121'
        },
    }));

    const [scrolled, setScrolling] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(window.scrollY / 500);
                // console.log(window.scrollY / 500);
            } else {
                setScrolling(0);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
    const logoScroll = 23 - (23 - 5) * scrolled;
    const logoMarginScroll = 2 - (2 - 0.25) * scrolled;

    return (
        <Box>
            <AppBar
                // elevation={0}
                // sx={{backgroundColor:'transparent'}}
                elevation={scrolled > 0.5 ? 4 : 0}
                sx={{
                    backgroundColor: `rgba(33, 33, 33, ${scrolled / 2 > 1 ? 1 : scrolled})`,
                    // WebkitBackdropFilter: `blur(${scrolled * 10 > 10 ? 10 : scrolled * 10}px)`,
                    // backdropFilter: `blur(${scrolled * 10 > 10 ? 10 : scrolled * 10}px)`,
                }}
            >
                <Box width={'100%'} height={'6px'} backgroundColor={'#80FFFF'}></Box>
                <Toolbar className='toolBar'>
                    {/* {phoneView ? (
                        
                    ) : <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            flexGrow: '0.1',
                            height: '100%',
                            // alignSelf: 'center'
                        }}
                    >
                        {links.map((link) => (
                            // <Link
                            // // sx={{ "&:hover": { backgroundColor: "#80FFFF" } }}
                            // component={RouterLink} to={link.url} underline="none" key={link.id} className='header-item'>
                            //     <Typography className='link'>{link.route}</Typography>
                            // </Link>
                            <ColorButton variant="text" key={link.id} component={RouterLink} to={link.url} className='header-button'>
                                {link.route}
                            </ColorButton>
                        ))}
                    </Box>} */}

                    {/* <Box width={200}>
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer('left', true)}
                        >
                            <MenuIcon className='menuIcon' fontSize="" style={{ fill: '#80FFFF' }} />
                        </IconButton>

                        <Drawer
                            anchor="left"
                            open={state['left']}
                            onClose={toggleDrawer('left', false)}
                        >
                            {list('left')}
                        </Drawer>
                    </Box> */}

                    <img src={Logo}
                        style={{
                            height: (logoScroll <= 5 ? 5 : (logoScroll >= 23 ? 23 : logoScroll)) + 'vh',
                            marginTop: (logoMarginScroll <= 0.25 ? 0.25 : (logoMarginScroll >= 2 ? 2 : logoMarginScroll)) + 'em',
                            position: 'absolute',
                            left: phoneView ? '50%' : '1em',
                            top: 0,
                            transform: phoneView ? 'translate(-50%, 0)' : 'translate(0, 0)'
                        }}
                    ></img>

                    {/* <img src={Logo} className='logo'
                        style={{
                            height: (logoScroll <= 5 ? 5 : (logoScroll >= 23 ? 23 : logoScroll)) + 'vh',
                            marginTop: (logoMarginScroll <= 0.25 ? 0.25 : (logoMarginScroll >= 2 ? 2 : logoMarginScroll)) + 'em',
                            marginLeft: '50svw',
                            transform: 'translate(-50%, 0)'
                        }}
                    ></img> */}

                    {/* <Box width={phoneView ? 100 : 200} textAlign={'center'}>
                        <Link href="#" underline="none">
                        </Link>
                    </Box> */}

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
                            // alignSelf: 'start',
                            // marginTop:'0.5em'
                            // alignSelf: 'center'
                            // paddingLeft:'10em,',
                            // marginLeft:'10em',
                        }}
                    >
                        {links.map((link) => (
                            // <Link
                            // // sx={{ "&:hover": { backgroundColor: "#E3C263" } }}
                            // component={RouterLink} to={link.url} underline="none" key={link.id} className='header-item'>
                            //     <Typography className='link'>{link.route}</Typography>
                            // </Link>
                            <ColorButton variant="text" key={link.id} component={RouterLink} to={link.url} className={`header-button ${link.id == 1 ? 'active' : ''}`}>
                                {link.route}
                            </ColorButton>
                        ))}
                    </Box>}

                    {/* <Box width={phoneView ? 100 : 200} textAlign={'right'}>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ borderRadius: '24px' }}
                            endIcon={<ArrowDropDownIcon />}
                        >
                            {phoneView ? <DownloadIcon /> : <Typography fontSize={'20px'} fontWeight={'bold'} color={'black'} fontFamily={'Coolvetica'}>Download App</Typography>}
                        </Button>
                    </Box> */}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;