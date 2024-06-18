import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Products() {

    const [product,setproduct] = useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then(y=>{
        setproduct(y.data);
        })
    },[])
  return (
    <div>{
        product.filter((v)=>{
            if(v.category == "men's clothing"){
                return v;
            }
        }).map((v)=>{
            return(
                <div>{v.title}</div>
            )
        })
    }</div>
  )
}
