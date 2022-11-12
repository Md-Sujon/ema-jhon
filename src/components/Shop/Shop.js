import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart,setCart] = useState([]);



  const handleAddToCart = (SelectProduct) =>{
    // cart.push(product)
    let newCart = [];
    const Exist = cart.find(product  => product.id ===SelectProduct.id)
    if(!Exist){
      SelectProduct.quantity = 1;
     newCart = [...cart,SelectProduct];
    }else{
      const rest = cart.filter(product => product.id !== SelectProduct.id);
      Exist.quantity = Exist.quantity+1;
      newCart = [...rest, Exist]
    }
    
    setCart(newCart);
    addToDb(SelectProduct.id)
}

  useEffect(() => {
    fetch("products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

useEffect(() =>{
  const storedCart = getStoredCart()
  const saveCart = [];
   for(const id in storedCart){
    const addedProduct = products.find(product => product.id === id);
     if(addedProduct){
      const quantity = storedCart[id]
      addedProduct.quantity = quantity;
      saveCart.push(addedProduct); 
     }
    
   }
setCart(saveCart)
},[products])

  return (
    <div className="shop_container">
      <div className="product_container">
        {products.map((product) => (
          <Product 
          handleAddToCart={handleAddToCart} 
          key={product.id} 
          product={product}>

          </Product>
        ))}
      </div>

      <div className="cart_container">
        <Cart cart={cart}/>
      </div>
    </div>
  );
};

export default Shop;
