import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


export default function MuiRenderCell() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos")
       .then(y=>y.json())
       .then(y=>{
        setData(y);
       })
    },[]);

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'title',
          headerName: 'Title',
          width: 150,
          editable: true,
        },
        {
          field: 'thumbnailUrl',
          headerName: 'thumbnailUrl',
          width: 150,
          editable: true,
          renderCell: (params) => <img src={params.value} />, // renderCell will render the component

        },
        {
            field: 'url',
            headerName: 'Image',
            width: 150,
            editable: true,
            renderCell: (params) => <img src={params.value} />, // renderCell will render the component
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
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </div>
  )
}
