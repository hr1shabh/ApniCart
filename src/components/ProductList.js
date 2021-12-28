import React from 'react'
import Product from './Product'

export default function ProductList(props) {
   // console.log(props);
    return (
       props.productlist.length > 0?
       props.productlist.map((product,i)=>{
           return <Product product = {product} key={i} incrementQuantity = {props.incrementQuantity} decrementQuantity = {props.decrementQuantity} index = {i} removeItem = {props.removeItem}/>
       })
       : <h1> No Products in the Cart </h1>
    );
}
