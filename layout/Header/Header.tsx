import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { Collapse, ListItemIcon, Paper, ThemeProvider, Tooltip, createTheme } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import assest from '@/json/assest';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Brightness4, Brightness7, ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';

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
    // { name: "API Network", path: "/apinetwork" }
]
const settings = ['Settings', 'Learning Center', 'Support Center', 'Privacy Policy', 'Terms', '@getpostman'];
const profileset = ['Profile', 'Dashboard', 'Logout'];

export default function Header(props: Props) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
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

    const [dark, setDark] = React.useState(false);

    const darkTheme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: dark ? 'dark' : 'light',
                },
            }),
        [dark]
    );

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ mx: 2, my: 2, color: '#ebba34', fontWeight: 'bold' }}>
                POSTMAN
            </Typography>
            <Divider />
            <List>
                {routeComponents.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <Link style={{ textDecoration: 'none' }} href={item?.path}>
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

            <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <CssBaseline />
                <AppBar component="nav" sx={{ backgroundColor: 'whitesmoke', }}>
                    <Toolbar>

                        <Box sx={{ flexGrow: 0 }}>

                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ display: { sm: 'none' } }}
                            >
                                <img src={assest.logo} alt="" height={50} />

                                {/* <MenuIcon sx={{ color: 'black' }} /> */}
                            </IconButton>
                            
                            
                            <Box sx={{ display: { xs: 'none', sm: 'block' }, }}>
                            
                                {routeComponents.map((item, i) => (
                                    <Link href={item?.path}><Button key={i} sx={{ color: '#000', textTransform: 'none', '&:hover': { backgroundColor: 'lightgray' } }}>
                                        {item?.name}
                                    </Button></Link>
                                ))}
                                <IconButton onClick={handleClick} sx={{ p: 0 }}>

                                    <Link style={{ textDecoration: 'none' }} href={'/apinetwork'}>
                                        <Typography textAlign="center" sx={{ color: 'black', fontSize: '15px', ml: 1, }}>API Network</Typography>
                                    </Link>
                                    {open ? <ExpandLess /> : <ExpandMore />}

                                </IconButton>

                                {/* <ListItemButton onClick={handleClick}>

                                <ListItemText primary="Inbox" />
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText primary="Starred" />
                                    </ListItemButton>
                                </List>
                            </Collapse> */}
                            </Box>
                        </Box>

                        <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', mx:10, width: 200, textAlign: 'center', flexGrow: 1 }}
                        >

                            <InputBase
                                sx={{ margin: 'auto', flex: 1, backgroundColor: 'white', color: 'black' }}
                                placeholder="Search API"
                                inputProps={{ 'aria-label': 'search apis' }}
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>

                        </Paper>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenSettMenu} sx={{ p: 0 }}>
                                    <SettingsIcon />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElSett}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElSett)}
                                onClose={handleCloseSettMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseSettMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ ml: 1 }}>
                                    <img src={assest.profile} alt="" style={{ height: 30, float: 'right' }} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {profileset.map((item) => (
                                    <MenuItem key={item} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{item}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <IconButton onClick={() => setDark(!dark)}>
                            {dark ? <Brightness7 sx={{ color: 'black' }} /> : <Brightness4 />}
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <nav>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
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

            </Box >
        </ThemeProvider>

    );
}