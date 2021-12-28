import React, {useState} from 'react';
import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/ProductList'
import Footer from './components/Footer.js'
import AddItem from './components/AddItem';
function App() {
  // Product List -> array of objects
  const products = [
    {
      price: 40000,
      name: "Iphone",
      quantity: 0,
    },
    {
      price: 10000,
      name: "Realme",
      quantity: 0,
    }
  ]

  let [productlist , setProductlist] = useState(products)
  let [totalAmount, setTotalAmount] = useState(0)

  const decrementQuantity = (index) =>{
    //console.log("Running -")
    //console.log(newproductList[index]);
    let newproductList = [...productlist]
    let newTotalAmount = totalAmount;
    if (newproductList[index].quantity > 0 ){ 
      newproductList[index].quantity = newproductList[index].quantity-1
      newTotalAmount -= newproductList[index].price
    } 
    setTotalAmount(newTotalAmount)    
    setProductlist(newproductList)
  }
  
  const incrementQuantity = (index) =>{
    console.log("Running +")
    let newproductList = [...productlist]
    let newTotalAmount = totalAmount;
    newproductList[index].quantity++
    newTotalAmount += newproductList[index].price
    setTotalAmount(newTotalAmount) 
    setProductlist(newproductList)
  }

  const resetQuantity = () =>{
    let newproductList = [...productlist]
    newproductList.map((products) =>{
      products.quantity = 0
    }) 
    setProductlist(newproductList);
    setTotalAmount(0);
  }

  const removeItem = (index) =>{
    let newproductList = [...productlist]
    newproductList.splice(index,1);
    setProductlist(newproductList);
    let newTotalAmount = totalAmount;
    newTotalAmount -= newproductList[index].quantity * newproductList[index].price
    setTotalAmount(newTotalAmount);    
  }
 
  const addItem = (name, price) => {
    let newproductList = [...productlist];
    newproductList.push({
      price : price,
      name : name,
      quantity : 0,
    });
    setProductlist(newproductList);
  }
  //console.log(product);
  return (
    <>
    <Navbar/>
    <AddItem addItem = {addItem}/>
    <ProductList productlist={productlist} incrementQuantity = {incrementQuantity} decrementQuantity = {decrementQuantity} removeItem = {removeItem}/>
    <Footer totalAmount = {totalAmount} resetQuantity = {resetQuantity}/>
    </>
  );
}

export default App;
