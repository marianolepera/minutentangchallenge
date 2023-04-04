import React from "react"
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import {titleMinu,estilos} from "./styles"
import { Avatar, Typography } from "@mui/material";
import Link from "next/link";

const NavBar = ()=> {
    return (
      <>
        <AppBar sx={{boxShadow:"none",background: "transparent"}} position="static">
        <Container maxWidth="xl" >
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1,display: { xs: 'none', md: 'flex' }}}>
              <Box sx={{display:"flex",
                ":hover":{
                transform: "scale(1.2)",
                transition: "all 0.45s ease-in-out",
                cursor: "pointer"
            } }}>
              <Link href="/" passHref>
                <Typography
                      sx={titleMinu}
                  >
                      MINUTENTAG CHALLENGE
                  </Typography>
              </Link>
              </Box>
            </Box>
            <Box sx={{ flexGrow: 0,display:"flex" }}>
              
              <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
                <IconButton sx={{ p: 1,marginRight:2 }}>
                  <MenuIcon sx={{color:"black"}} fontSize='large'/>
                </IconButton>
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/Michael1.svg" />
                </IconButton>
              </Box>
            </Box>
            {/* MOBILE  VIEW STARTS */}
            <Box sx={{  flexGrow:1,display: { xs: 'flex', md: 'none' } }}>
              <IconButton sx={{ p: 0 }}>
                  <MenuIcon sx={{color:"black"}} fontSize='large'/>
              </IconButton>
            </Box>
            <Box sx={{display: { xs: 'flex', md: 'none' } }}>
              <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/Michael1.svg" />
              </IconButton>
            </Box>
            {/* MOBILE VIEW ENDS */}
          </Toolbar>
        </Container>
        </AppBar>
      </>
    );
  }

  export default NavBar;
  