import React, { useState } from 'react'
import EmpForm from './EmpForm'
import EmpDis from './EmpDis'
import { Button } from '@mui/material';

export default function Parent() {

    const [open, setOpen] = useState(false);
    const [data,setData] = useState([]);

    

    const addData = (v)=>{

            let p = [...data];
            p.push({...v,id:p.length+1});
            setData(p);

    }

    const removeRecord = (id)=>{
      console.log(id);
      console.log(data);
      let p = [...data];

      let remo = p.filter((v)=>{
      return  v.id != id;
      })

      setData(remo);

    }

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
  return (
    <div>
        
        <Button variant="outlined" onClick={handleClickOpen}>
       Add Employee
      </Button>
        <EmpForm 
        open={open}
     handleClose={handleClose} 
     addf={addData}
        />
        <EmpDis data={data} removeRecord={removeRecord}/>
    </div>
  )
}