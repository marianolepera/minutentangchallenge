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

const Header = ()=> {
    const router = useRouter();

    return (
      <>
        <AppBar sx={{boxShadow:"none",background: "transparent"}} position="static">
        <Container maxWidth="xl" >
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1}}>
                    <IconButton sx={{ p: 1,marginRight:2 }} onClick={() => router.back()}>
                    <ArrowBackIcon sx={{color:"black"}} fontSize='large'/>
                    </IconButton>
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
          </Toolbar>
        </Container>
        </AppBar>
      </>
    );
  }

  export default Header;
  