import React from 'react'
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { useRouter } from 'next/router';

const CustomButton = styled(Button)({
   marginBottom: "10px",
   borderColor: 'grey',
   color: 'grey',
  // width: '100%',
   borderRadius: "10px",
   display: 'flex',
   textTransform: 'none',
   height:"4.3vh",
   whiteSpace: 'nowrap',
});

function ReturnHomePageButton(...props) {
    const router = useRouter();

  return (
    <CustomButton onClick={()=>{ router.push('/') }} variant='outlined' startIcon={<ArrowBackIosNewRoundedIcon/>}> Ana Ekrana Dön</CustomButton>
  )
}

export default ReturnHomePageButton