
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

export default function EmpDis({data,removeRecord}) {

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'firstName',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'lastName',
      width: 150,
      editable: true,
    },
    {
      field:"",
      width:400,
      renderCell: (params)=>
      {
        console.log(params);
       return( <>

<Button variant="outlined" >
       Edit
      </Button>
      <Button variant="outlined" onClick={()=>{

removeRecord(params.row.id)
      }}>
       Delete
      </Button>
        
        </>)
      }
    }
   
   
  ];
  return (
    <Box sx={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={data}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
    />
  </Box>
  )
}
