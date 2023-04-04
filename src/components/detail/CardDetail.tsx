import * as React from 'react';
import { Box, Button, Divider, FormControl, Grid, MenuItem, Typography, useTheme } from "@mui/material"
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
    const theme = useTheme();
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

    const formatMoney = (price: any): string => {
        const dollarsCents = price / 100;
        const result=dollarsCents.toFixed(2)
        return result;
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

    const modelSX={
        fontWeight:700,
        fontSize:"24px",
        lineHeight:"31px",
        color:"#0F0D23",
        marginBottom:2
    }
    const moneySX={
        color:(theme:any) => theme.palette.primary.main,
        fontWeight:700,
        fontSize:"24px",
        lineHeight:"31px",
        marginLeft:10
    }
    return(
        <>
        <Grid container columns={12} spacing={2}>
            <Grid item md={2} lg={2}></Grid>
            <Grid item  xs={12} sm={12} md={3} lg={3}>
                <Image
                    alt="corona"
                    src={`${product?.image}`}
                    width={200}
                    height={350}
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition:"center center",
                        backgroundSize:"100% 100%",
                        alignItems: "center",
                        justifyContent: "center",
                        height:"auto",
                        maxHeight:"100%",
                    }}
                />
            </Grid>
            <Divider orientation="vertical" flexItem>
            </Divider>
            <Grid item  xs={12} sm={12} md={6} lg={6} >
                    <Box sx={{display:"flex"}}>
                        <Typography sx={modelSX}>{product?.brand}</Typography>
                        <Typography sx={moneySX}>$ {formatMoney(stockAndPrice?.price)}</Typography>
                    </Box>
                    <Typography sx={{color:"#969696"}}>Origin:  {product?.origin} |  Stock: {stockAndPrice?.stock}</Typography>
                    <Typography sx={{my:1,fontWeight:700}}>Description</Typography>
                    <Typography sx={{color:"#969696"}}>{product?.information}</Typography>
                    <Box sx={{display:"flex",marginTop:2}}>
                        <Typography sx={{marginRight:5,p:1,marginTop:1,fontWeight:700}}>Size:</Typography>
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
                        <Button sx={{marginLeft:5,width:247}} variant="contained" >
                            Add to cart
                        </Button>
                    </Box>
                   
            </Grid>
        </Grid>
        </>
    )
}

export default CardDetail