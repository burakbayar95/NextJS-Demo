import React, { useState } from 'react';
import { MenuPaper, Paper, Grid, getAvatarGroupUtilityClass, Typography, Avatar, List, ListItem, ListItemText, Button, Pagination } from '@mui/material'
//import {AddIcon} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { Head } from 'next/document';
//import { getStaticProps } from 'next';



const CustomAvatar = styled(Avatar)({
    width: 56,
    height: 56,
    marginBottom: 4,
    textAlign: 'center',
    borderColor: '#8989d3',
    borderWidth: 2,
    borderStyle: 'solid',
    padding: 2,
    '& .MuiAvatar-img': {
        objectFit: 'cover',
    },
});

const CustomPaper = styled(Paper)({
    padding: '20px',
    backgroundColor: '#fff',
    minHeight: '100vh',
    margin: '0 10vw',
});

const MenuButton = styled(Button)({
    borderColor: 'grey',
    color: 'grey',
    width: '100%',
    justifyContent: 'space-between',
    // paddingTop: "2px",
    height: "4.5vh",
    display: 'flex',
    textTransform: 'none',



});
const CustomButton = styled(Button)({
    borderColor: 'grey',
    color: 'grey',
    width: '100%',
    borderRadius: "10px",
    // paddingTop: "2px",
    height: "4.5vh",
    display: 'flex',
    textTransform: 'none',

    //justifyContent: 'space-between', 

});
const CustomListItem = styled(ListItem)({

    paddingTop: "1px !important",
    paddingBottom: "1px !important",



});

const stories = [
    { id: 1, name: 'Laptop', link: "/laptop" },
    { id: 2, name: 'Smartphone', link: "/smartphone" },
    { id: 3, name: 'Hard Drive', link: "/external-hard-drive" },
    { id: 4, name: 'Camera', link: "/camera" },
    { id: 5, name: 'Headphones', link: "/headphones" },
    { id: 6, name: 'Smart Watch', link: "/smart-watch" },
    { id: 7, name: 'Keyboard', link: "/keyboard" },
    { id: 8, name: 'Mouse', link: "/mouse" },
    { id: 9, name: 'Monitor', link: "/monitor" },
    { id: 10, name: 'Tablet', link: "/tablet" },
    { id: 11, name: 'Charger', link: "/charger" },
    { id: 12, name: 'Bag', link: "/bag" },
    { id: 13, name: 'Desk', link: "/desk" },
    { id: 15, name: 'Chair', link: "/chair" },

];

//export async function getServerSideProps() {
    export async function getStaticProps() {

    return { props: { products: products } };
}

export default function HomePage(products) {
    return (
        <Head>
            <title>HomePage</title>
            <meta name="description" content="Akademi" />
            <meta property="og:title" content="Home Page" />


        </Head>,
        <CustomPaper elevation={3}>

            <Grid container spacing={3} justifyContent="space-between" alignItems="center" textAlign="center">
                {stories.map((story) => (
                    <Grid item key={story.id} xs="auto" display="flex" flexDirection="column" alignItems="center">
                        <CustomAvatar>{story.name[0]}</CustomAvatar>
                        <Typography variant="caption">{story.name}</Typography>
                    </Grid>
                ))}
            </Grid>
            <Grid height="30vh" container spacing={2}>

                <Grid item xs={12} sm={10}>
                    {/* Burada ana içerik yer alacak */}
                    <Paper sx={{ height: "30vh", display: 'flex', alignItems: 'center', justifyContent: 'center', background: "grey" }}>
                        <Typography variant="h5">PLACEHOLDER</Typography>
                    </Paper>
                </Grid>
                <Grid height="30vh" item xs={12} sm={2}>
                    {/* Menü */}
                    <List >
                        {/* {menuItems.map((item, index) => ( */}
                        <CustomListItem key={"menuButtonKey1"}>
                            <MenuButton variant="outlined" endIcon={<MenuIcon />}> Menü </MenuButton>
                        </CustomListItem>
                    </List>
                    <List style={{ border: "solid 0.8px #c5c5c5", borderRadius: "10px" }} >
                        <CustomListItem key={"menuButtonKey2"}>
                            <CustomButton variant="outlined" > Formlar </CustomButton>
                        </CustomListItem>
                        <CustomListItem key={"menuButtonKey3"}>
                            <CustomButton variant="outlined" > Araçlar </CustomButton>
                        </CustomListItem>
                        <CustomListItem key={"menuButtonKey4"}>
                            <CustomButton variant="outlined" > E-Fatura </CustomButton>
                        </CustomListItem>
                        <CustomListItem key={"menuButtonKey5"}>
                            <CustomButton variant="outlined" > Sizi Dinliyoruz </CustomButton>
                        </CustomListItem>
                        <CustomListItem key={"menuButtonKey6"}>
                            <CustomButton variant="outlined" > BEK Akademi </CustomButton>
                        </CustomListItem>
                        {/* ))} */}
                    </List>
                </Grid>
            </Grid>

            <Grid container marginTop="2vh" spacing={2}>

                <Grid height="30vh" item xs={12} sm={7}>

                    <Paper sx={{ height: "30vh", display: 'flex', alignItems: 'center', justifyContent: 'center', background: "grey" }}>
                        <Typography variant="h5">PLACEHOLDER</Typography>
                    </Paper>
                </Grid>
                <Grid height="30vh" item xs={12} sm={3}>

                    <Paper sx={{ height: "30vh", display: 'flex', alignItems: 'center', justifyContent: 'center', background: "grey" }}>
                        <Typography variant="h5">PLACEHOLDER</Typography>
                    </Paper>
                </Grid>
                <Grid height="30vh" item xs={12} sm={2}>

                    <Paper sx={{ height: "16vh", display: 'flex', alignItems: 'center', justifyContent: 'center', background: "grey" }}>
                        <Typography variant="h5">PLACEHOLDER</Typography>
                    </Paper>
                    <Link href="/products">Sayfa 2</Link><br />
                    <Link href="/basket">Sayfa 3</Link>
                </Grid>
            </Grid>

            <Grid container marginTop="2vh" spacing={2} >

                <Grid height="30vh" item xs={12} sm={7}>
                    <Paper sx={{ height: "30vh", display: 'flex', alignItems: 'center', justifyContent: 'center', background: "grey" }}>
                        <Typography variant="h5">PLACEHOLDER</Typography>
                    </Paper>
                </Grid>
                <Grid height="30vh" item xs={12} sm={3}>

                    <Paper sx={{ height: "30vh", display: 'flex', alignItems: 'center', justifyContent: 'center', background: "grey" }}>
                        <Typography variant="h5">PLACEHOLDER</Typography>
                    </Paper>
                </Grid>

            </Grid>


        </CustomPaper>

    )
}