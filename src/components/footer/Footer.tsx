import { Box, IconButton } from "@mui/material"
import {footerBox} from "./styles"
import HomeIcon from '@mui/icons-material/Home';
import NotesIcon from '@mui/icons-material/Notes';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SettingsIcon from '@mui/icons-material/Settings';

const Footer = () => {

    return(
        <>
        <Box sx={footerBox}>
            <IconButton sx={{ p: 0}}>
                <HomeIcon  color="primary" fontSize='large'/>
            </IconButton>
            <IconButton sx={{ p: 0}}>
                <NotesIcon  color="primary" fontSize='large'/>
            </IconButton>
            <IconButton sx={{ p: 0}}>
                <LocalMallIcon  color="primary" fontSize='large'/>
            </IconButton>
            <IconButton sx={{ p: 0}}>
                <SettingsIcon  color="primary" fontSize='large'/>
            </IconButton>
        </Box>
        </>
    )
}

export default Footer