import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { Box, Button,Typography,useTheme } from '@mui/material';
import Product from '@/interfaces/products';
import { CardActionArea } from '@mui/material';
import { NextPage } from 'next'
import Link from 'next/link';
// import Link from 'next/link';

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
        // [theme.breakpoints.down('md')]: {width:"155px",height:"300px"},
        [theme.breakpoints.down('md')]: {width:"220px",},
      }

    const cardImage={
        backgroundRepeat: 'no-repeat',
        backgroundPosition:"center center",
        backgroundSize:"100% 100%",
        // width:"auto",
        backgroundImage: `url("${product?.image}")`,
        alignItems: "center",
        justifyContent: "center",
        height:350,
        maxHeight:"100%",
        objectFit:"cover"

    }
    // let getUrlLink = (): string => `/${product?.id}-${product?.brand.replace(' ', '-')}`;

  return (
    <>
    <Link 
        style={{textDecoration:"none"}} 
        href={{
            pathname:`/${product?.id}-${product?.brand.replace(' ', '-')}`,
            // query:{
            //     productId:product?.id,
            //     productBrand:product?.brand,
            //     }
            }}
        // as={"/"+ art._id} 
        passHref>
    <Card sx={cardSX}>
      {/* <CardActionArea > */}
      
        <Typography sx={{p:1}}> {product?.brand}</Typography>
        <CardMedia
            sx={cardImage}
        />
        <CardActions disableSpacing sx={{padding:0,justifyContent:"space-between",marginTop:2}} >
            <Box sx={{marginLeft:2}}> $ 26.87</Box>
            <Button variant="outlined">Agregar</Button>
        </CardActions>
        
      {/* </CardActionArea> */}
    </Card>
    </Link>
    </>
  );
}

export default CardProduct 
