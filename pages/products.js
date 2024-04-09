import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Grid, Divider, Paper, Pagination } from '@mui/material';
import { styled } from '@mui/material/styles';
import ReturnHomePageButton from './components/ReturnHomePageButton';
import { useRouter } from 'next/router';
import Header from './components/Header';


const CustomPaper = styled(Paper)({
    padding: '20px',
    backgroundColor: '#fff',
    minHeight: '100vh',
    margin: '0 10vw',
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

const Products = ({ products }) => {
    const [page, setPage] = useState(1);
    const count = Math.ceil(products.length / PER_PAGE);



    const handleChange = (event, value) => {
        setPage(value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentPageProducts = products.slice(
        (page - 1) * PER_PAGE,
        page * PER_PAGE
    );

    const router = useRouter();
    return (
        <>
            <CustomPaper elevation={3}>
                <Header />
                <Grid container display="flex" justifyContent="space-between" spacing={2}>
                    <Grid item xs={6}>
                        <ReturnHomePageButton onClick={() => { router.push("/") }} style={{ margin: "5px" }} variant="contained" color="primary" />
                    </Grid>

                    <Grid item xs={6}>
                        <Typography style={{ float: "right" }} >Sponsorlu Ürün Listesi</Typography>

                    </Grid>

                </Grid>
                <Divider style={{ margin: "10px 0" }} />

                <Grid container spacing={2}>
                    {currentPageProducts.map((product, index) => {
                        return (
                            <Grid item key={index + "product_"} xs={12} sm={6} md={4} lg={3}>
                                <ProductCard product={product} />
                            </Grid>
                        )
                    })}
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
