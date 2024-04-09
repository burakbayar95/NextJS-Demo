import React, {  useState } from 'react';
import { Card, CardContent, Typography, Button, Grid, Divider, Paper, Pagination, TextField, IconButton ,ThemeProvider, createTheme,InputAdornment} from '@mui/material';
import { styled } from '@mui/material/styles';
import ReturnHomePageButton from './components/ReturnHomePageButton';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';
import Header from './components/Header';
import PointAndBasket from './components/PointAndBasket';


const CustomPaper = styled(Paper)({
    padding: '20px',
    backgroundColor: '#fff',
    minHeight: '100vh',
    margin: '0 10vw',
});

const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            marginBottom: "10px",
            display: 'flex',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderRadius: '10px',
                
              },
            },
          },
        },
      },
    },
  });
  



  const CustomTextField = styled(TextField)({
    paddingBottom: "10px",
    '& .MuiInputLabel-root.Mui-focused': {
        color: 'grey',
      },
    '& .MuiOutlinedInput-root': {
        paddingBottom:"5px" , 
        paddingTop:"5px",

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


const PER_PAGE = 12;




const ProductCard = ({ product }) => {
    return (
        <>
        <Card>
            <CardContent>
                <Paper sx={{ height: "30vh", display: 'flex', alignItems: 'center', justifyContent: 'center', background: "grey" }}>
                    <Typography variant="h5">PLACEHOLDER</Typography>
                </Paper>
                <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.brand}
                </Typography>
                <Typography fontWeight="600" variant="body2" component="div">
                    Çekilişte Verilecek Ürün Sayısı: {product.stock} Adet
                </Typography>
            </CardContent>
        </Card>
        </>
    );
}
const SearchBar = ({ setSearchQuery }) => (
    <form onSubmit={(e) => e.preventDefault()} style={{ marginBottom: '10px' ,width:"100%", paddingLeft:"20px"}}>
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
            <Header/>
       
           <div style={{display:"flex", alignContent:"space-between"}}>
           <ReturnHomePageButton onClick={() => { router.push("/") }} variant="contained" color="primary"/>
    
            <SearchBar setSearchQuery={setSearchQuery} />
           </div>
          
   

            <Divider style={{margin:"10px 0"}}/>

                <Grid container spacing={2}>
                    <Grid item xs={10} >
                    <Grid container spacing={2}>
                    {currentPageProducts.map((product,index) => {
                        return(
                        <Grid item key={index + "product_"} xs={12} sm={6} md={4} lg={4}>
                            <ProductCard product={product} />
                        </Grid>
                        )
                    })}
                    </Grid>
                    </Grid>
                    <Grid item xs={2}>
                        <PointAndBasket/>
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
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()

    return {
        props: {
            products: data.products || [],
        },
    }
}


export default Products
