import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled({count, page, setPage}:{count:number, page:number, setPage:(page:number)=>void}) {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    console.log(event)
  };

  return (
    <Stack spacing={2} >
      <Typography className='text-center'>Page: {page}</Typography>
      <Pagination variant='outlined'color="primary" count={count} page={page} onChange={handleChange} />
    </Stack>
  );
}
