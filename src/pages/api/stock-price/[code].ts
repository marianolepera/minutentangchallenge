import { NextApiRequest, NextApiResponse } from 'next'
import stockPrice from "../../../constants/stock-price"
import { StockAndPriceInterface } from '@/interfaces/products';

// export interface StockAndPriceInterface  {
//     stock: number
//     price: number
//   }

export interface  IdStockPriceInterface {
    [id: string]: StockAndPriceInterface;
}

const handlerStockPrice =(req:NextApiRequest,res:NextApiResponse) =>{
    if (req.method === 'GET') {
        const { code } = req.query
        if(code){
            const productStockPrice:IdStockPriceInterface = stockPrice
            const productByCodeStockPrice = productStockPrice[code.toString()];
            if(!productByCodeStockPrice){
                res.status(404).json({error:"error"});
                res.end();
            }
            res.status(200).json(productByCodeStockPrice)
        }else{
            res.status(404).json({error:"error"});
            res.end();
        }
        
    } else {
        res.status(404).json({error:"api method does not exist"});
    }

}

export default handlerStockPrice