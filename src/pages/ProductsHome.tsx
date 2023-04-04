import { Box, Button, Typography } from '@mui/material'
import Navbar from "../components/navbar/NavBar"
import SearchBar from '../components/searchbar/SearchBar'
import CardProduct from '../components/card/CardProduct'
import styles from "../styles/Home.module.css"
import products from '@/constants/products'
import Grid from '@mui/material/Grid';
import Footer from '@/components/footer/Footer'
import Image from 'next/image';


const flexButtons={
  display:"flex",
  justifyContent:"space-between",
  marginTop:8
}
const nameSX={
  fontWeight:400,
  fontSize:"16px",
  lineHeight:"20.83px",
  color:"#646464",
  opacity:0.6
}

const drinkSX={
  fontWeight:700,
  fontSize:"18px",
  lineHeight:"23px",
  color:"#323232"
}
const seeAllSX={
  fontWeight:400,
  fontSize:"14px",
  lineHeight:"14px",
  color:"#646464",
  opacity:0.6
}
const ProductsHome= ()=> {
  return (
    <>
        <Navbar></Navbar>
        <Box sx={{marginLeft:2}} >
            <Typography sx={nameSX}> Hi Mr. Michael,</Typography>
            <Box sx={{display:{xs:"none",md:"flex"}}}>
              <Typography  sx={{marginRight:10}} className={styles.homeFont}> Welcome Back!</Typography>
              <SearchBar></SearchBar>
            </Box>
            <Box sx={{display:{xs:"block",md:"none"}}}>
              <Typography  sx={{marginRight:10}} className={styles.homeFont}> Welcome Back!</Typography>
              <SearchBar></SearchBar>
            </Box>
            <Box sx={flexButtons}>
              <Typography sx={drinkSX}> Drink Category</Typography>
              <Box sx={{display: { xs: 'flex', md: 'none'}}}>
                <Typography sx={seeAllSX}> See all</Typography>
              </Box>
            </Box>
            {/* MOBILE VIEW STARTS */}
            <Box sx={{display: { xs: 'flex', md: 'none',justifyContent:"space-evenly" }}}>
              <Button sx={{color:"black"}}> All</Button>
              <Button 
                variant='contained' 
                startIcon={<Image
                  priority
                  src="/Beer.svg"
                  height={20}
                  width={20}
                  alt=""
                ></Image>} 
                sx={{width:138}}> Beer</Button>
              <Button
                sx={{color:"black"}}
                startIcon={<Image
                  priority
                  src="/Wine.svg"
                  height={20}
                  width={20}
                  alt=""
                ></Image>} 
              > Wine</Button>
            </Box>
            {/* MOBILE VIEW END */}
            <Box sx={{display: { xs: 'none', md: 'flex', }}}>
              <Button sx={{color:"black"}}> All</Button>
              <Button 
                variant='contained' 
                startIcon={<Image
                  priority
                  src="/Beer.svg"
                  height={20}
                  width={20}
                  alt=""
                ></Image>} 
                sx={{width:138,marginLeft:10,marginRight:10}}> Beer</Button>
              <Button
                sx={{color:"black"}}
                startIcon={<Image
                  priority
                  src="/Wine.svg"
                  height={20}
                  width={20}
                  alt=""
                ></Image>} 
              > Wine</Button>
            </Box>
            <Box sx={flexButtons}>
              <Typography sx={drinkSX}> Popular</Typography>
              <Box sx={{display: { xs: 'flex', md: 'none'}}}>
                <Typography sx={seeAllSX}> See all</Typography>
              </Box>
            </Box>
            <Grid container spacing={{ xs: 2, md: 2,sm:0 }} columns={{ xs: 4, sm: 8, md: 12,lg:16 }}>
              {products?.map(product => (
                <Grid item xs={2} sm={4} md={4} key={product.id} >
                  <CardProduct product={product}></CardProduct>
                </Grid>
              ))}
            </Grid>
            <Footer/>
        </Box>
    </>
  )
}

export default ProductsHome;
