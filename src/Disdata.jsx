import React, { useEffect, useState } from 'react'

export const Disdata = () => {
    const [data,setdata] = useState([]);
    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(y=>y.json())
        .then(y=>{
            setdata(y);
        })
    },[])
  return (
    <div>
        {
            data.map((v)=>{
                return(
                <div>{v.title}</div>
                )
            })
        }
    </div>
  )
}
