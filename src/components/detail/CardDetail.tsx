import * as React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, FormControl, Grid, MenuItem, Typography } from "@mui/material"
import Image from 'next/image'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Product,{StockAndPriceInterface} from '@/interfaces/products';
import { NextPage } from 'next';
import axios from 'axios';
import Loader from '../Loader';



interface CardProductDetailInterface {
    product:Product
}

const CardDetail:NextPage<CardProductDetailInterface> = ({product}:CardProductDetailInterface) =>{
    const [sku, setSku] = React.useState(product?.skus[0].code);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isError,setIsError] = React.useState<boolean>(false);
    const [stockAndPrice,setStockAndPrice] = React.useState<StockAndPriceInterface>()

    const getProductByCode = async(skuCode:number) =>{
        setIsLoading(true)
        try {
            const {data}= await axios.get(`/api/stock-price/${skuCode}`)
            setStockAndPrice(data)
            setIsLoading(false)
            setIsError(false)
            return data
        } catch (error) {
            setIsLoading(false)
            setIsError(true)
        }
       

    }

    React.useEffect(() => {
        getProductByCode(parseInt(sku));
        const interval = setInterval(() => {
            getProductByCode(parseInt(sku));
        }, 5000);

        return () => clearInterval(interval);
    }, [sku]);

    const handleChange = (event: SelectChangeEvent) => {
        getProductByCode(parseInt(event.target.value));
        setSku(event.target.value as string);
      };

    if (isLoading){
        return <Loader></Loader>
    }

    if (isError){
        return <Typography variant="h1"> Hubo un error al intentar cargar el producto</Typography>
    }

    return(
        <>
        <Grid container columns={12} spacing={2}>
            <Grid item md={2} lg={2}></Grid>
            <Grid item  xs={12} sm={12} md={3} lg={3}>
                <Image
                    alt="corona"
                    src="/corona1.jpg"
                    // quality={100}
                    // fill
                    width={200}
                    height={200}
                    // sizes="100vw"
                    style={{
                    objectFit: 'cover',
                    }}
                />
            </Grid>
            <Divider orientation="vertical" flexItem>
            </Divider>
            <Grid item  xs={12} sm={12} md={6} lg={6} >
                    <Box sx={{display:"flex"}}>
                        <Typography sx={{marginBottom:1}}>{product?.brand}</Typography>
                        <Typography> {}</Typography>
                    </Box>
                    <Typography>Origin:  {product?.origin} |  Stock: {stockAndPrice?.stock}</Typography>
                    <Typography sx={{my:1}}>Description</Typography>
                    <Typography>{product?.information}</Typography>
                    <Box sx={{display:"flex",marginTop:2}}>
                        <Box sx={{marginRight:5,p:1,marginTop:1}}>Size:</Box>
                        <FormControl fullWidth>
                            <Select
                            sx={{width:150}}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sku}
                            onChange={handleChange}
                            >
                            {product?.skus.map((sk,index)=>(
                                <MenuItem key={index} value={sk?.code}>{sk?.name}</MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{display:"flex",marginTop:5}}>
                        <Button variant="outlined" startIcon={<LocalMallIcon />}>
                        </Button>
                        <Button sx={{marginLeft:5}} variant="contained" >
                            Add to cart
                        </Button>
                    </Box>
                   
            </Grid>
        </Grid>
        </>
    )
}

export default CardDetail