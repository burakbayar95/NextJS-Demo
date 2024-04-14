import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Grid, Divider, Paper, Pagination, TextField, IconButton, ThemeProvider, createTheme, InputAdornment, Box, } from '@mui/material';
import { styled } from '@mui/material/styles';
import ReturnHomePageButton from './components/ReturnHomePageButton';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useRouter } from 'next/router';
import Header from './components/Header';
import PointAndBasket from './components/PointAndBasket';
import Image from 'next/image'


const PER_PAGE = 12;

const CustomPaper = styled(Paper)({
  padding: '20px',
  backgroundColor: '#fff',
  minHeight: '100vh',
  margin: '0 10vw',
});

const CustomTextField = styled(TextField)({
  paddingBottom: "10px",
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'grey',
  },
  '& .MuiOutlinedInput-root': {
    paddingBottom: "5px",
    paddingTop: "5px",

    height: "40px",
    '& fieldset': {
      borderRadius: '10px',
      borderColor: 'grey',
    },
    '& .MuiInputLabel-root': {
      color: 'grey',
    },

    '&.Mui-focused fieldset': {
      borderColor: 'grey',
    },


  },
  '& .MuiInputLabel-root': {

  }
});


const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardContent>
      <div style={{ display:"flex" ,justifyContent:"center"}}> <Image src={product.image} width={250} height={250} alt={product.title} /></div>

        <Typography gutterBottom variant="h5" component="div">
        {product.title.slice(0, 20) + "..."}        </Typography>
        <Typography variant="body2" color="text.secondary">
          Paket İçeriği {product.rating.count} Adet
        </Typography>

        <Grid container alignItems="center" spacing={2}>
          <Grid item xs>
            <Typography fontWeight="600" variant="body2" component="div">
              {product.rating.rate} BEK Puan
            </Typography>
          </Grid>
          <Grid item>
            <QuantitySelector />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const SearchBar = ({ setSearchQuery }) => (
  <form onSubmit={(e) => e.preventDefault()} style={{ marginBottom: '10px', width: "100%", paddingLeft: "20px" }}>
    <CustomTextField
      id="search-bar"
      onChange={(e) => setSearchQuery(e.target.value)}
      label="Ürünlerin marka ya da ürün adı yazarak arayın"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={(e) => e.preventDefault()} aria-label="search">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      variant="outlined"
      size="small"
      fullWidth
    />
  </form>
);

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '10px',
        border: '1px solid #e0e0e0',
        '& > *': {
          m: 0.5
        }
      }}
    >
      <IconButton size="small" onClick={decrement} aria-label="remove">
        <RemoveCircleOutlineIcon fontSize="small" />
      </IconButton>
      <Typography sx={{ minWidth: '20px', textAlign: 'center', fontSize: '0.75rem' }}>
        {quantity}
      </Typography>
      <IconButton size="small" onClick={increment} aria-label="add">
        <AddCircleOutlineIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

const Products = ({ products }) => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const filteredProducts = searchQuery
    ? products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : products;
  const count = Math.ceil(filteredProducts.length / PER_PAGE);

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentPageProducts = filteredProducts.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  );

  const router = useRouter();
  return (
    <>
      <CustomPaper elevation={3}>
        <Header />

        <div style={{ display: "flex", alignContent: "space-between" }}>
          <ReturnHomePageButton onClick={() => { router.push("/") }} variant="contained" color="primary" />

          <SearchBar setSearchQuery={setSearchQuery} />
        </div>
        <Divider style={{ margin: "10px 0" }} />

        <Grid container spacing={2}>
          <Grid item xs={10} >
            <Grid container spacing={2}>
              {currentPageProducts.map((product, index) => {
                return (
                  <Grid item key={index + "product_"} xs={12} sm={6} md={4} lg={4}>
                    <ProductCard product={product} />
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <PointAndBasket />
          </Grid>
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Pagination
            count={count}
            page={page}
            onChange={handleChange}
            variant="outlined"
            color="primary"
            shape="rounded"
          />
        </div>
      </CustomPaper>
    </>
  )
}

export const getServerSideProps = async () => {
  //const res = await fetch('https://dummyjson.com/products')
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()

  return {
      props: {
          products: data || [],
      },
  }
}


export default Products
