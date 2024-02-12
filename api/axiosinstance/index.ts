import React, { useMemo, useState } from 'react'
// import AppBar from '@mui/material/AppBar';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { AppBar, createTheme, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Brightness4, Brightness7, ExpandLess, ExpandMore, Home } from '@mui/icons-material';
import { ThemeProvider } from '@emotion/react';
import assest from '@/json/assest';
// import { theme } from '@/mui_theme/mui_palette';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const drawerWidth = 240;
const routeComponents = [
    { name: "Home", path: "/" },
    { name: "Workspaces", path: "/workspaces" },
    { name: "API Network", path: "/apinetwork" }
]

export default function Header(props: Props) {
    const { window } = props;
    // const [mobileOpen, setMobileOpen] = React.useState(false);

    // const handleDrawerToggle = () => {
    //     setMobileOpen((prevState) => !prevState);
    // };
    const [opentab, setOpenTab] = React.useState(false);

    const handleClick = () => {
        setOpenTab(!opentab);
    };

    const [open, setOpen] = useState(false);
    const [dark, setDark] = useState(true);

    const [anchorElSett, setAnchorElSett] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenSettMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElSett(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseSettMenu = () => {
        setAnchorElSett(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const darkTheme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: dark ? 'dark' : 'light',
                },
            }),
        [dark]
    );
    const handleDrawerOpen = () => {
        setOpen((prevState) => !prevState);
    };


    const drawer = (
        <Box onClick={handleDrawerOpen} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ mx: 2, my: 2, color: '#ebba34', fontWeight: 'bold' }}>
                Postman
            </Typography>
            <Divider />
            <List>
                {routeComponents.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <Link style={{ textDecoration: 'none' }} href={item?.path}>
                            {/* href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}> */}
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText sx={{ color: 'black' }} primary={item?.name} />
                            </ListItemButton></Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <ThemeProvider theme={darkTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position='fixed' sx={{ backgroundColor: 'whitesmoke', boxShadow: 'none' }}>

                    <Toolbar>
                        <Box sx={{ flexGrow: 0 }}>

                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerOpen}
                                sx={{
                                    mr: 2,

                                }}
                            >
                                {/* <MenuIcon sx={{ color: 'black' }} /> */}

                                <img src={assest.logo} alt="logo" height={30} />

                            </IconButton>

                            {/* <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 0, display: { xs: 'none', sm: 'block' }, fontWeight: 'bold', color: '#ebba34', mx: 1 }}
                            >
                                POSTMAN
                            </Typography> */}
                            <Box sx={{ display: { xs: 'none', sm: 'block' }, flexGrow: 1 }}>
                                {routeComponents.map((item, index) => (
                                    <Link href={item?.path}><Button key={index} sx={{ color: '#000', fontWeight: 'bold', '&:hover': { color: 'brown' } }}>
                                        {item?.name}
                                    </Button></Link>
                                ))}
                                <IconButton onClick={handleClick} sx={{ p: 0 }}>

                                    <Link style={{ textDecoration: 'none' }} href={''}>
                                        <Typography textAlign="center" sx={{ color: 'black', fontSize: '15px', ml: 1, }}>API Network</Typography>
                                    </Link>
                                    {opentab ? <ExpandLess /> : <ExpandMore />}

                                </IconButton>
                            </Box>
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <IconButton onClick={() => setDark(!dark)}>
                                {dark ? <Brightness7 sx={{ color: 'black' }} /> : <Brightness4 />}
                            </IconButton>
                        </Box>

                    </Toolbar>

                </AppBar>


                <nav>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={open}
                        onClose={handleDrawerOpen}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>
                <Box component="main" sx={{ p: 3 }}>

                </Box>
            </Box>
        </ThemeProvider >
    );
}