import React from 'react';
import { Card, Typography, Box ,IconButton, Divider, Button, Table, TableRow,TableCell, TableContainer, Paper, TableBody} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const ShoppingCartWidget = () => {
  return (
    <>
    <Box sx={{ position: 'relative', width: 'max-content', marginBottom:"4vh", marginTop:"1vh" }}>
      <Card sx={{ backgroundColor: '#2A5F8F', width:140, height:20, color: 'white', p: 2, borderRadius: '10px' }}>
        <Typography fontWeight="bold" fontSize={12} >BEK Puanınız: </Typography>
      </Card>

      <Card sx={{ 
        position: 'absolute', 
        top: '50%', 
        left: '100%', 
        width: 63, 
        height: 63, 
        m: 2, 
        border: "solid 1px #2A5F8F", 
        borderRadius: "10px",
        transform: 'translateY(-77%) translateX(-50%)',
        backgroundColor: 'white', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
      }}>
        <Typography fontWeight="bold" color="#2A5F8F">100</Typography>
      </Card>
   
    </Box>
    <TableContainer component={Paper} elevation={0} style={{ borderRadius: '10px', border: '1px solid #e0e0e0' }}>
      <Table style={{ boxShadow: "none" }}>
        <TableBody>
          <TableRow style={{ background: "#F8F9FB", borderBottom: "1px solid #e0e0e0" }}>
            <TableCell style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "5px" }}>
              <Typography fontSize={13} marginLeft="5px">Sepetiniz</Typography>
              <IconButton>
                <ShoppingCartOutlinedIcon />
              </IconButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ padding: "5px" }}>
              <Typography marginBottom={1} fontWeight="bold" fontSize="10px">Toplam Sipariş Puanı: 0 Bek Puan</Typography>

              <Typography fontSize="10px">Kalan Sepet Puanı: 0</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
      
      <Button variant="contained" sx={{ mt: "5px", textTransform:"none", backgroundColor: '#DD6E23', width: '100%', borderRadius: '2px' }}>
        Siparişi Tamamla
      </Button>
    
    
    </>
  );
};

export default ShoppingCartWidget;