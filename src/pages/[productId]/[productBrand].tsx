import CardDetail from "@/components/detail/CardDetail";
import Header from "@/components/header/Header";
import products from "@/constants/products";
import Product from "@/interfaces/products";
import { NextPage, NextPageContext } from "next";
import NavBar from "@/components/navbar/NavBar";
import { Box } from "@mui/material";

export async function getServerSideProps ({query}: NextPageContext){
    const product = products.filter(
        prod => ((String(prod.id) === query.productId) && (prod.brand.toLowerCase() === query.productBrand?.toString().replace('-', ' ').toLowerCase()))
    );
    return {
        props: { 
           product:product[0] 
        }
    }
}

interface ProductDetailInterface {
    product:Product
}
const ProductDetail:NextPage<ProductDetailInterface> =({product}:ProductDetailInterface) =>{
    return(
        <>  
            <Box sx={{display: { xs: 'none', md: 'flex' }}}>
                <NavBar/>
            </Box>
            <Box sx={{display: { xs: 'flex', md: 'none' }}}>
                <Header/> 
            </Box>
            <CardDetail product={product}></CardDetail>
        </>
    )
}

export default ProductDetail