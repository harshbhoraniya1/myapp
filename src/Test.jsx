import React, { useEffect, useState } from 'react'

export default function Test() {
    const [data,setdata] = useState([])
    const[searchData,setSearchData] = useState("")
    
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
       .then(y=>y.json())
       .then(y=>{
        setdata(y);
       })
    },[])
    const sear = ()=>{
        let filtered = data.filter((v)=>{
            return v.title.toLowerCase().includes(searchData.toLowerCase())
        })
        setdata(filtered);
    };
    
  return (
    <div>
            <input type="text" onChange={
                (e)=>{
                    setSearchData(e.target.value)
                }
            }/>
            <button onClick={sear}>Search</button>
    <ul>
    {
            data.map((v)=>{
                return(
                        <li key={v.id}>
                            <p>{v.id}</p>
                            <h4>{v.title}</h4>
                            <p>{v.body}</p>
                        </li>
                )
            })
        }
        </ul>
    </div>
  )
}
