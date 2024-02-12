import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Box, Button, CardActionArea, CardMedia, Container, Divider, Grid, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import assest from "@/json/assest";
// import styles from "@/styles/Home.module.css";
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ArrowRight from '@mui/icons-material/ArrowRight';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
// import Home from '@mui/icons-material/Home';
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';
import { useState } from "react";
import Link from "next/link";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const data = [
  { icon: <People />, label: 'Workspaces' },
  { icon: <Dns />, label: 'Private API Network' },
  { icon: <PermMedia />, label: 'Integrations' },
  { icon: <Public />, label: 'Reports' },
];

const FireNav = styled(List)<{ component?: React.ElementType }>({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});


const inter = Inter({ subsets: ["latin"] });

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const carddata = [
  {
    name: 'REST API Basics', image: assest.home1, text: 'Get up to speed with testing REST APIs on Postman.'
  },
  {
    name: 'Integration testing', image: assest.home2, text: 'Verify if your APIs work as expected.'
  },
  {
    name: 'API Documentaion', image: assest.home3, text: 'Create beautiful API documentation using Markdown.'
  },
  {
    name: 'API Scenario testing', image: assest.home4, text: 'Test API scenarios by iterating through a data set and triggering workflows based on responses.'
  },
  {
    name: 'Data Visuaization', image: assest.home5, text: 'Turn complex response data into an easy-to-understand visualization.'
  },
  {
    name: 'Authorization methods', image: assest.home6, text: 'Learn more about different authorization types and quickly set up auth helpers for your API in Postman...'
  }
]

export default function Home() {
  
  const [open, setOpen] = useState(false);

  return (
    <div>

      {/* <Typography color={'black'} sx={{ my: 10 }}>Home Page</Typography> */}
      <Grid container>
        <Grid item xs={3} sx={{ backgroundColor: 'whitesmoke', }} >
          <div>

            <img src={assest.homelogo} alt="" style={{ marginTop: 100, marginLeft: 40 }} />
            <Typography sx={{ fontWeight: 'bold', mx: 4 }}>Postman works best with teams</Typography>
            <p style={{ marginLeft: 30, fontSize: 12, color: 'gray' }}>
              Collaborate in real-time and establish <br /> a single source of truth for all API <br />workflows.
            </p>
            <Button variant="outlined" size="small" sx={{
              mx: 3, color: 'gray', border: '1px, black', borderBlockColor: 'black', textTransform: 'none',
              '&:hover': { backgroundColor: 'lightgray', borderBlockColor: 'black' }
            }}>
              Create Team
            </Button>
            <Divider sx={{ mx: 3, mt: 3 }} />

            <Box sx={{ display: 'flex' }}>

              <Paper elevation={0} sx={{ maxWidth: 256 }}>
                <Box
                  sx={{
                    bgcolor: open ? 'lightgray' : 'whitesmoke',
                    pb: open ? 2 : 0,
                    ml: open ? 2 : 0
                  }}
                >
                  <ListItemButton
                    alignItems="flex-start"
                    onClick={() => setOpen(!open)}
                    sx={{
                      px: 3,
                      pt: 2.5,
                      pb: open ? 0 : 2.5,
                      '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                    }}
                  >
                    <ListItemText
                      primary="WorkSpace"
                      primaryTypographyProps={{
                        fontSize: 15,
                        fontWeight: 'medium',
                        lineHeight: '20px',
                        mb: '2px',
                      }}
                      secondaryTypographyProps={{
                        noWrap: true,
                        fontSize: 12,
                        lineHeight: '16px',
                        color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                      }}
                      sx={{ my: 0 }}
                    />
                    <KeyboardArrowDown
                      sx={{
                        mr: -1,
                        opacity: 0,
                        transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                        transition: '0.2s',
                      }}
                    />
                  </ListItemButton>
                  {open &&
                    data.map((item) => (
                      <ListItemButton
                        key={item.label}
                        sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                      >
                        <ListItemIcon sx={{ color: 'inherit' }}>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={item.label}
                          primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                        />
                      </ListItemButton>
                    ))}
                </Box>
              </Paper>
            </Box>
            <Divider sx={{ mx: 3 }} />

            <List sx={{ width: '100%', }}>
              <ListItem sx={{ height: '50px' }}>

                <ListItemText secondary='What is Postman?' />
              </ListItem>
              <ListItem>
                <ListItemText secondary='Support Center' />
              </ListItem>
              <ListItem>
                <ListItemText secondary='Learning Center' />
              </ListItem>
              <ListItem>
                <ListItemText secondary='Postman Enterprise' />
              </ListItem>
              <ListItem>
                <Link href={'https://www.postman.com/downloads/'} style={{ textDecoration: 'none' }}> <ListItemText secondary='Download Postman' /></Link>
              </ListItem>
            </List>

          </div>

        </Grid>
        <Grid item xs={9} position={'sticky'}>
          <Container sx={{}}>
            <Typography sx={{ mt: 10, p: 4, fontWeight: 'bold' }}>
              Recently visited workspaces

            </Typography>
            <Divider sx={{ mx: 3 }} />
            <div style={{ marginLeft: 14 }} >
              <div style={{ float: 'left' }}>
                <Typography component={Link} href={''} sx={{ textDecoration: 'none', color: 'black', fontSize: '14px' }}>
                  <IconButton>
                    <People />
                  </IconButton>
                  My Workspace
                </Typography>
              </div>
              <img src={assest.profile} alt="" style={{ height: 30, float: 'right' }} />

            </div>

            <Typography sx={{ mt: 10, ml: 3, fontWeight: 'bold' }}>
              Discover what you can do in Postman

            </Typography>
            <p style={{ fontSize: '12px', marginLeft: '25px' }}>Explore the full potential of Postman with collection templates.</p>

            <Grid container rowSpacing={2} columnSpacing={1} sx={{ ml: 2, mt:2 }}>
              {carddata.map((i, k) => {
                return (
                  <>
                    <Grid item xs={4}>

                      <Card variant="outlined" sx={{ width: 250, height: 180 }}>
                        <CardActionArea>

                          <Box sx={{ paddingTop: 2, paddingLeft: 2, }}>
                            <img src={i.image} alt="" style={{ backgroundColor: 'lightgray' }} />

                          </Box>
                          <CardContent>

                            <Typography sx={{ fontSize: 14 }} color="h6" gutterBottom>
                              {i.name}
                            </Typography>
                            <Typography variant="h5" component="div">

                            </Typography>
                            <Typography sx={{ fontSize: 12, mb: 1.5 }} color="text.secondary">
                              {i.text}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>

                    </Grid >
                  </>
                )
              }
              )}
            </Grid>
          </Container>
        </Grid>
      </Grid >

    </div >

  );
}
