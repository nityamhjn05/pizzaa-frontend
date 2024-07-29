import React, { useEffect, useState } from 'react'
import { Products } from '../components/Products'
import { Header } from '../../../shared/components/Header'
import { getApi } from '../../../shared/services/api-client';

export const DashBoard = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(()=>{
      getProducts();
  },[]) ; // Mounting
  const getProducts = async ()=>{
     const data = await getApi();
     console.log('Products ', data);
     setLoading(false);
     setProducts(data['Vegetarian']);
  }
  return (
    <div className='container'>
      <Header/>
      {loading?<p>Loading...</p>:<Products products = {products}/>}
      
    </div>
  )
}
