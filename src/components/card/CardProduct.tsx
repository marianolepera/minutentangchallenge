import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { Box, Button,Typography,useTheme } from '@mui/material';
import Product from '@/interfaces/products';
import { NextPage } from 'next'
import Link from 'next/link';
import AddIcon from '@mui/icons-material/Add';

interface CardProdudctInterface {
    product:Product
}


const  CardProduct:NextPage<CardProdudctInterface> =({product}:CardProdudctInterface) => {
   
    const theme = useTheme();

    const cardSX={
        maxWidth: 345,
        height:"auto",
        marginTop:2,
        borderRadius:4,
        marginBottom:1,
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down('md')]: {width:"220px",},
      }

    const cardImage={
        backgroundRepeat: 'no-repeat',
        backgroundPosition:"center center",
        backgroundSize:"100% 100%",
        backgroundImage: `url("${product?.image}")`,
        alignItems: "center",
        justifyContent: "center",
        height:350,
        maxHeight:"100%",
        objectFit:"cover"
    }

    const brandtitle={
        padding:2,
        fontWeight:700,
        fontSize:"16px",
        lineHeight:"16px",
        color:"#323232"
    }

    const priceSX={
        marginLeft:2,
        fontWeight:700,
        fontSize:"16px",
        lineHeight:"16px",
        color:"#323232"
    }

  return (
    <>
    <Link 
        style={{textDecoration:"none"}} 
        href={{
            pathname:`/${product?.id}-${product?.brand.replace(' ', '-')}`,
            }}
        passHref>
    <Card sx={cardSX}>
        <Typography sx={brandtitle}> {product?.brand}</Typography>
        <CardMedia
            sx={cardImage}
        />
        <CardActions disableSpacing sx={{padding:0,justifyContent:"space-between",marginTop:2}} >
            <Typography sx={priceSX}> $ 26.87</Typography>
            <Box sx={{display: { xs: 'none', md: 'flex' }}}>
                <Button variant="contained">Agregar</Button>
            </Box>
            <Box sx={{display: { xs: 'flex', md: 'none' }}}>
                <Button variant="contained"><AddIcon></AddIcon></Button>
            </Box>
        </CardActions>
    </Card>
    </Link>
    </>
  );
}

export default CardProduct 
