import React from "react"
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useRouter } from "next/router";
// import Link from "next/link";

const Header = ()=> {
    const router = useRouter();

    return (
      <>
        <AppBar sx={{boxShadow:"none",background: "transparent"}} position="static">
        <Container maxWidth="xl" >
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1}}>
                {/* <Link href="/" passHref> */}
                    <IconButton sx={{ p: 1,marginRight:2 }} onClick={() => router.back()}>
                    <ArrowBackIcon sx={{color:"black"}} fontSize='large'/>
                    </IconButton>
                {/* </Link> */}
            </Box>
            <Box sx={{ flexGrow: 1,}} >
                <Box sx={{color:"black"}}>Detail</Box>
            </Box>
            <Box sx={{ flexGrow: 0,display:"flex" }}>
              
              <Box >
                <IconButton sx={{ p: 1,marginRight:2 }}>
                  <MoreHorizIcon sx={{color:"black"}} fontSize='large'/>
                </IconButton>
              </Box>
            </Box>
            {/* MOBILE  VIEW STARTS */}
            {/* <Box sx={{  flexGrow:1,display: { xs: 'flex', md: 'none' } }}>
              <IconButton sx={{ p: 0 }}>
                  <MenuIcon sx={{color:"black"}} fontSize='large'/>
              </IconButton>
            </Box>
            <Box sx={{display: { xs: 'flex', md: 'none' } }}>
              <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/Michael1.svg" />
              </IconButton>
            </Box> */}
            {/* MOBILE VIEW ENDS */}
          </Toolbar>
        </Container>
        </AppBar>
      </>
    );
  }

  export default Header;
  