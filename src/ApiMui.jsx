import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


export default function ApiMui() {
  const [data, setData] = useState([]);
  
  useEffect(() =>{
      fetch("https://jsonplaceholder.typicode.com/users")
     .then(y=>y.json())
     .then(y=>{
      setData(y);
     })
  },[])
  
  const columns = [
      { field: 'id', headerName: 'ID', width: 90 },
      {
        field: 'name',
        headerName: 'Full name',
        width: 150,
        editable: true,
      },
      {
        field: 'username',
        headerName: 'User Name',
        width: 150,
        editable: true,
      },
      {
        field: 'email',
        headerName: 'Email',
        width: 110,
        editable: true,
      },
      {
        field: 'address',
        headerName: 'Address',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (value, data) => `${data.address.street || ''} , ${data.address.suite || ''} , ${data.address.city || ''}, ${data.address.zipcode || ''}`,
      },
    ];
  return (
    <div>
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
    </div>
  )
}
