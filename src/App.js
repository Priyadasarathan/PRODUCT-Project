// import logo from './logo.svg';
// import { response } from 'express';
// import { response } from 'express';
import { Button, Toaster } from '@blueprintjs/core';
// import axios from 'axios';
// import { useCallback } from 'react';
import { useEffect, useState } from 'react';
// import {Button} from '@blueprintjs/core';
import './App.css';

const AppToster = Toaster.create({
position:"top-center"

})


function App() {

  const [product, setProduct] = useState([]);
  const [uniqueProduct, setUniqueProduct] = useState(null);
  const [quantity, setquantity] = useState(null);


  // console.log(product);
  console.log(uniqueProduct, 'unique product details');



// useEffect(()=>{
//   const getProductList =useCallback(async() =>{
//     const response= await axios.get('https://fakestoreapi.com/products');
//     console.log(response.data);
//     getProductList()
//   },[])
// },[getProductList])

  useEffect(() => {               //Runs only on the first render
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((json) => setProduct(json))
  }, [])

  // console.log(product.title, 'products')


  //  function cartPage(id){
  //   fetch(`https://fakestoreapi.com/products/${id}`)
  //     .then((response)=>response.json())
  //     .then (data=>{
  //       setUniqueProduct((product)=>{
  //         return product.find(products=>products.id===id)
  //       })
  //     })
  //  }
  function cartPage(id) {
    AppToster.show({
      message:"Are you want to buy the product",
      intent:'success',
      timeout:3000
  })                                                
    const selectedProduct = product.find(products => products.id === id);
    setUniqueProduct(selectedProduct);

  }

  function increaseQuality() {
    if(quantity<=5){
    setquantity(prev =>prev+1)
    }
  }
  function removeCart() {
    if(quantity>=2){
      setquantity(prev=>prev-1)
    }

  }
  //  cartPage((id)=>{
  //   fetch(`https://fakestoreapi.com/products${id}`)
  //     .then((response)=>response.json())
  //     .then ((json)=>setUniqueProudct(json))
  //  },[])
  return (
    <>
      <div className="App">

        {product.map(products =>
          <div key={products.id} className='products'>
            <h2>Product id:  {products.id}</h2>
            <img src={products.image} alt='images' width='200px' height='200px' />
            <h3>{products.title}</h3>
            <h2>Rs. {products.price}</h2>
            <p>{products.description}</p>

            <Button intent='success' onClick={() => cartPage(products.id)}>Buy Now</Button>
          </div>
        )}

      </div>
      {uniqueProduct && (
      <div key={uniqueProduct?.id} className='products'>
        <h2>Product id:  {uniqueProduct?.id}</h2>
        <img src={uniqueProduct?.image} alt='images' width='200px' height='200px' />
        <h3>{uniqueProduct.title}</h3>
        <h2>Rs. { uniqueProduct && uniqueProduct?.price * quantity}</h2>
        <p>{uniqueProduct.description}</p>
        <Button intent='success' onClick={() => increaseQuality()}>Add to Cart</Button>
      </div>)}
      {quantity && (
      <div className='cart'>
        <button onClick={() => removeCart()}>-</button>
        <input value={quantity} />
        <button onClick={() => increaseQuality(uniqueProduct?.id)}>+</button>
      </div>
      )}
    </>
  );
}
export default App;
