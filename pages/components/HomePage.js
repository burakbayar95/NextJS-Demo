import React from 'react'
import { MenuPaper, Paper, Grid, getAvatarGroupUtilityClass, Typography, Avatar, List, ListItem, ListItemText, Button } from '@mui/material'
//import {AddIcon} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

const CustomAvatar = styled(Avatar)({
    width: 56,
    height: 56,
    marginBottom: 4,
    textAlign: 'center',
    borderColor: '#8989d3', // Kenarlık rengi
    borderWidth: 2, // Kenarlık kalınlığı
    borderStyle: 'solid', // Kenarlık stili
    padding: 2, // İçerideki resim ile kenarlık arasındaki boşluk
    '& .MuiAvatar-img': {
      objectFit: 'cover', // İçerideki resmin kenarlığa sığdırılması
    },
});

const CustomPaper = styled(Paper)({
    padding: '20px', // İçerik ile Paper kenarları arasında boşluk
    backgroundColor: '#fff', // Beyaz arkaplan
    minHeight: '100vh', // Paper'ın minimum yüksekliğini ekranın tam boyutuna ayarla
    margin: '0 10vw', // Sağdan ve soldan boşluk ekleyin
});

const MenuButton = styled(Button)({
    borderColor: 'grey',
    color: 'grey',
    width: '100%',
    justifyContent: 'space-between', // Metin sol tarafa, ikon sağ tarafa hizalanır.
   // paddingTop: "2px",
   height:"4.5vh",
   display: 'flex',
   textTransform: 'none',



});
const CustomButton = styled(Button)({
    borderColor: 'grey',
    color: 'grey',
    width: '100%',
    borderRadius: "10px",
   // paddingTop: "2px",
   height:"4.5vh",
   display: 'flex',
   textTransform: 'none',

    //justifyContent: 'space-between', // Metin sol tarafa, ikon sağ tarafa hizalanır.

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
    { id: 16, name: 'Chair', link: "/chair" },
    { id: 17, name: 'Chair', link: "/chair" },
    { id: 18, name: 'Chair', link: "/chair" },
    { id: 19, name: 'Chair', link: "/chair" },
    { id: 20, name: 'Chair', link: "/chair" },
];

export async function getServerSideProps() {

    return { props: { products: products } }; // `products` veri setini `post` prop'u olarak geçiriyoruz.
}

export default function HomePage(products) {
    return (
        <CustomPaper elevation={3}> {/* Paper ile içeriği sarmalayıp, gölge ekledik */}

            <Grid container spacing={3} justifyContent="space-between" alignItems="center" textAlign="center">
                {stories.map((story) => (
                    <Grid item key={story.id} xs="auto" display="flex" flexDirection="column" alignItems="center">
                        <CustomAvatar>{story.name[0]}</CustomAvatar>
                        <Typography variant="caption">{story.name}</Typography>
                    </Grid>
                ))}
            </Grid>
            <Grid height="30vh"  container spacing={2}>

                <Grid  item xs={12} sm={10}>
                    {/* Burada ana içerik yer alacak */}
                    <Paper sx={{ height: "30vh", display: 'flex', alignItems: 'center', justifyContent: 'center', background: "grey" }}>
                        <Typography variant="h5">PLACEHOLDER</Typography>
                    </Paper>
                </Grid>
                <Grid  height="30vh" item xs={12} sm={2}>
                    {/* Menü */}
                    <List >
                        {/* {menuItems.map((item, index) => ( */}
                        <CustomListItem key={"menuButtonKey1"}>
                            <MenuButton variant="outlined" endIcon={<MenuIcon />}> Menü </MenuButton>
                        </CustomListItem>
                        </List>
                        <List style={{border:"solid 0.8px #c5c5c5", borderRadius:"10px"}} >
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
                    {/* Burada ana içerik yer alacak */}
                    <Paper sx={{ height: "30vh", display: 'flex', alignItems: 'center', justifyContent: 'center', background: "grey" }}>
                        <Typography variant="h5">PLACEHOLDER</Typography>
                    </Paper>
                </Grid>
                <Grid height="30vh" item xs={12} sm={3}>
                    {/* Burada ana içerik yer alacak */}
                    <Paper sx={{ height: "30vh", display: 'flex', alignItems: 'center', justifyContent: 'center', background: "grey" }}>
                        <Typography variant="h5">PLACEHOLDER</Typography>
                    </Paper>
                </Grid>
                <Grid height="30vh" item xs={12} sm={2}>
                    {/* Burada ana içerik yer alacak */}
                    <Paper sx={{ height: "16vh", display: 'flex', alignItems: 'center', justifyContent: 'center', background: "grey" }}>
                        <Typography variant="h5">PLACEHOLDER</Typography>
                    </Paper>
                </Grid>
            </Grid>

            <Grid container marginTop="2vh" spacing={2} >

                <Grid height="30vh" item xs={12} sm={7}>
                    {/* Burada ana içerik yer alacak */}
                    <Paper sx={{ height: "30vh", display: 'flex', alignItems: 'center', justifyContent: 'center', background: "grey" }}>
                        <Typography variant="h5">PLACEHOLDER</Typography>
                    </Paper>
                </Grid>
                <Grid height="30vh"  item xs={12} sm={3}>
                    {/* Burada ana içerik yer alacak */}
                    <Paper sx={{ height: "30vh", display: 'flex', alignItems: 'center', justifyContent: 'center', background: "grey" }}>
                        <Typography variant="h5">PLACEHOLDER</Typography>
                    </Paper>
                </Grid> 

            </Grid>


        </CustomPaper>



    )
}