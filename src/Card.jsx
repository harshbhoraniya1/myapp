import React, { useEffect, useState } from 'react'

export default function Card() {
    const [data,setdata] = useState([])
    useEffect(()=>{
        fetch("https://www.course-api.com/react-tours-project")
        .then(y=>y.json())
        .then(y=>{
            setdata(y);
        })
    },[])
  return (
    <div > {
        data.map((v)=>{
            return(
                <div className='container'>
                    <div>
                        <img className='photo' src={v.image} alt="" />
                    </div>
                    <div>
                    <h3>Name:{v.name}</h3>
                    </div>
                
            </div>
            )
        })
    }</div>
  )
}
