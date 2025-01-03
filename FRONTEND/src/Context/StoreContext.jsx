import { createContext, useEffect, useState } from "react";
export const StoreContext = createContext(null)
import axios from 'axios';
const StoreContextProvider = (props) => {
  const [food_list, setFoodList] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const url = 'https://tomato-food-app-p191.onrender.com';
  const [token, setToken] = useState("");
  const addToCart = async (itemId) =>{
    if(!cartItems[itemId]){
      setCartItems((prev)=>({...prev,[itemId]:1}))
    }
    else{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    if(token){
      await axios.post(url + "/api/cart/add", {itemId},{headers:{token}})
    }
  }
  const removeFromCart= async (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]: prev[itemId]-1}))
    if(token){
      await axios.post(url + "/api/cart/remove", {itemId},{headers:{token}})
    }
  }

  const getTotalCartAmount = ()=>{
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo = food_list.find((product)=>product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  }
//Prevents the user from logging out when the page is refreshed as token is stored in local storage and is used to set the token state
const fetchFoodList = async()=>{
  const response = await axios.get(`${url}/api/food/list`);
  setFoodList(response.data.data);
}

const loadCartData = async (token) =>{
  const response = await axios.post(url +"/api/cart/get",{},{headers:{token}});
  setCartItems(response.data.cartData);
}
  useEffect(()=>{
    async function loadData(){
      await fetchFoodList();
      if(localStorage.getItem('token')){
        setToken(localStorage.getItem('token'));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  },[])

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken
  }
  return(
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;
