import React, { useState } from 'react';

import { useAddNewProduct } from 'hooks/useAddNewProducts';

import {AddProductStyles} from './styles'
import {ProductEditor} from "components/products/ProductEditor"
import { EditorFeedBack } from 'components/products/EditorFeedBack';

import ProductPlaceHolder from 'assets/images/steve-sticks-1.jpg'

const defaults={
  description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit tellus mauris 
  a diam maecenas sed enim ut sem. Eget mi proin sed libero enim sed faucibus turpis in. Vulputate ut pharetra sit amet aliquam id diam maecenas. Id interdum velit 
  laoreet id donec ultrices tincidunt arcu non. Eu non diam phasellus vestibulum. Et sollicitudin ac orci phasellus. Turpis massa sed elementum tempus egestas sed. 
  Volutpat maecenas volutpat blandit aliquam etiam erat velit. Varius vel pharetra vel turpis. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. 
  Erat velit scelerisque in dictum. Quis vel eros donec ac odio`,
  name:`Bauer`,
  price:`0.00`
}

function AddProduct ({children, ...props})  {
  const [isWriting, setIsWriting] = useState(false)
  const [productName, setProductName] = useState(defaults.name)
  const [productPrice, setProductPrice] = useState(defaults.price)
  const [productImage, setProductImage] = useState({previewImage:ProductPlaceHolder, file:null})
  const[productDescription, setProductDescription] = useState(defaults.description)
  const [loading, productLoader] = useAddNewProduct();

  function handleProductName(name){
    setProductName(name)
  }
  function handleProductPrice(price){
    setProductPrice(price)
  }
  function handleProductDescription(description){
    setProductDescription(description)
  }
  function handleSubmit(e){
    e.preventDefault();
    const productData = {
      productName,
      productDescription,
      productPrice
    }
    setIsWriting(true)
    productLoader(productData, productImage.file)
    setProductDescription(defaults.description)
    setProductImage({previewImage:ProductPlaceHolder, file:null})
    setProductName(defaults.name)
    setProductPrice(defaults.price)
  }
  if(isWriting){
    return (
      <EditorFeedBack status={loading} writeCompleted={setIsWriting}/>
    )
  } else {
    return (
      <AddProductStyles  {...props}>
        <ProductEditor 
        productName={productName} 
        handleProductName={handleProductName}
        productPrice={productPrice} 
        handleProductPrice={handleProductPrice}
        productImage={productImage} 
        setProductImage={setProductImage}
        productDescription={productDescription} 
        handleProductDescription={handleProductDescription}
        handleSubmit={handleSubmit}
        />
      </AddProductStyles>
)
  }
}

export default AddProduct