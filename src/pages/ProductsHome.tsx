import { Box, Button, Typography } from '@mui/material'
import Navbar from "../components/navbar/NavBar"
import SearchBar from '../components/SearchBar'
import CardProduct from '../components/card/CardProduct'
import styles from "../styles/Home.module.css"
import products from '@/constants/products'
import Grid from '@mui/material/Grid';
import Footer from '@/components/footer/Footer'

const flexButtons={
  display:"flex",
  justifyContent:"space-between"
}
const ProductsHome= ()=> {
  return (
    <>
        <Navbar></Navbar>
        <Box sx={{marginLeft:2}}>
            <Typography > Hi Mr. Michael,</Typography>
            <div className={styles.homeFont}> Welcome Back!</div>
            <SearchBar></SearchBar>
            <Box sx={flexButtons}>
              <Typography> Drink Category</Typography>
              <Typography sx={{marginRight:3}}> See all</Typography>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-evenly"}}>
              <Button> All</Button>
              <Button> Beer</Button>
              <Button> Wine</Button>
            </Box>
            <Box sx={flexButtons}>
              <Typography> Popular</Typography>
              <Box sx={{marginRight:3}}> See all</Box>
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
