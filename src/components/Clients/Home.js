import * as React from 'react';
import { styled, createTheme, ThemeProvider,alpha  } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar'; 
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardHeader from "@mui/material/CardHeader"
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import TablePagination from '@mui/material/TablePagination';
import TableContainer from '@mui/material/TableContainer';
import List from '@mui/material/List';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { MainListItems, secondaryListItems } from './SideBar';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Title from './Title';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import parse from 'html-react-parser';
import {auth} from "../firebase/firebase.config"
//import {signOut,onAuthStateChanged} from "firebase/auth"
import { CloseOutlined } from '@mui/icons-material';
import { color } from '@mui/system';

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


function preventDefault(event) {
  event.preventDefault();
}




function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.soul2urfeet.com.pg/">
        Soul 2 UR Feet
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme({
  palette: {
    primary: {
      light: '#b73324',
      main: '#b73324',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#b73324',
      main: '#b73324',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function DashboardContent() {

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [productId, setProductId] = React.useState("id")
  const [productName,setProductName] = React.useState("Jervis Button Down Shirt")
  const [productDescription,setProductDescription] = React.useState("<div>...</div>")
  const [productImage,setProductImage] = React.useState("https://images.pexels.com/lib/api/pexels.png")
  const [productCode, setProductCode] = React.useState("code")
  const [productPrice, setProductPrice] = React.useState("price")
  const [foption, setFoption] = React.useState('pname');
  const [value, setValue] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  const [productListsv2, setProductsv2] = React.useState([])
  const [FilteredProduct, setFilteredProduct] = React.useState([])
  const [User, setUser] = React.useState([])
  const [open, setOpen] = React.useState(true);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [productsCatId,setProductCatId] = React.useState("")
  const [count, setCount] = React.useState(1)


  const AutocompleteChange = (event)=>{
    setValue(event.target.value)
    console.log(value)
    if(inputValue !== ''){
      const filtproduct = productListsv2.filter((value)=> {
        return (Object.values(value.name).join("").toString().toLowerCase().includes(inputValue.toString().toLowerCase()) || Object.values(value.sku).toLowerCase().includes(inputValue.toLowerCase()) ) //value.name === inputValue  || value.sku === inputValue 
      })
      setFilteredProduct(filtproduct)
      setCount(filtproduct.length)
      setRowsPerPage(filtproduct.length)

    }else{
      setFilteredProduct(productListsv2)
      setCount(productListsv2.length)
    }
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeFoption = (event) => {
    setFoption(event.target.value);
  };
  const handleChangeRowsPerPage = (event) => {setRowsPerPage(parseInt(event.target.value, 10)); setPage(0);};
  const toggleDrawer = () => {setOpen(!open);};
  
  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;
  const handleOpenUserMenu = (event) => {setAnchorElUser(event.currentTarget)};
  const handleCloseUserMenu = () => {setAnchorElUser(null)};

  function getProductID(event){
    const ProductID = event.currentTarget.id
    const ProductName = event.currentTarget.cells[0].innerText
    const ProductCode =  event.currentTarget.cells[1].innerText
    const ProductPrice  = event.currentTarget.cells[4].innerText
    const ProductDesciption = event.currentTarget.cells[5].innerText

   const productIds = parseInt(ProductID )
    productListsv2.forEach((product)=>{
      try {
        if (productIds == product.id){
          console.log("product images if ",product.images[0].src)
          return setProductImage(product.images[0].src)
        } else {
         
          return  console.log("image not found")
        }
      } catch (error) {
        console.log(error)
        
      }
    })
  
    setProductId(ProductID)
    setProductName(ProductName)
    setProductDescription(ProductDesciption)
    setProductCode(ProductCode)
    setProductPrice(ProductPrice)
  }
  const GetProductCatId =e=>{
       setProductCatId(e.currentTarget.id )
       console.log("firstList Clicked",productsCatId)
   }
//  const logout = async () => {
//   await signOut(auth);
// };
 
//  function Buttons(){
//    return (
//    <Button onClick={logout}>Logout </Button>
//    )
//    }
//    function Profile(){
//     return (
//     <Button > User Profile </Button>
//     )
//     }

// const Users = [User, <Profile/>, <Buttons/>];
// onAuthStateChanged(auth, (currentUser) => {
//   try {
//     if (currentUser) {
//       setUser(currentUser.email);
//     }else{
//       console.log("user not existed")
//     }
//   } catch (error) {
//     console.log(error)
//   }
//   })

React.useEffect(() => {
  try {
    const api = new WooCommerceRestApi({
      url: "https://www.soul2urfeet.com.pg",
      consumerKey: "ck_f764b6e861d84415f674fac56b2feb720d237e71",
      consumerSecret: "cs_69d429a05a8d131da15bf8480b14b1014f32f76e",
      version: "wc/v3"
    });
    // List products
api.get("products", {
  per_page: 70, // 20 products per page
})
  .then((response) => {
    // Successful request
    setProductsv2(response.data)
    console.log("Response Status:", response.status);
    console.log("Response Headers:", response.headers);
    console.log("Response Data:", response.data);
    console.log("Response Data: name", response.data.name);
    console.log("Response Data: id", response.data.id);
    console.log("Total of pages:", response.headers['x-wp-totalpages']);
    console.log("Total of items:", response.headers['x-wp-total']);
    setCount(parseInt(response.headers['x-wp-total']))
  })
  .catch((error) => {
    // Invalid request, for 4xx and 5xx statuses
    //console.log("Response Status:", error.response.status);
    console.log("Response Headers:", error.response.headers);
    console.log("Response Data:", error.response.data);
  })
  .finally(() => {
    // Always executed.
  });


  } catch (error) {
    console.log(error)
    
  }
  
}, []);


 
  return (
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: '24px',
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: '36px',
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                RMW Lookup
              </Typography>
              {/* <Search>
	            <SearchIconWrapper>
                  <SearchIcon />
              </SearchIconWrapper>
             <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
             </Search> */}

              {/* <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>  */}
              <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Dean Peter" src='' />
              </IconButton>
            </Tooltip> */}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu} 
            >
              {/* {Users.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
                  
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
              <MainListItems getFunc={GetProductCatId}/>
              <Divider sx={{ my: 1 }} />
              {secondaryListItems}
            </List>
          </Drawer>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                    }}
                  >
                    
                  <Container sx = {{height : "max-content", overflow: "auto"}}>
                          <Typography
                            component="h6"
                            variant="h6"
                            align="left"
                            color="theme.secondary"
                            gutterBottom
                          >
                            {productName}
                          </Typography>
                          <Typography component="p" align="left" variant="p">
                           {`Produce Code  ( ${productCode} )`}
                        </Typography>
                        <Typography component="p"  align="left" variant="p" sx={{fontWeight:800}}>
                           {`sales Price ( ${productPrice} )`}
                        </Typography>
                          <Typography variant="p" align="left" color="text.primary" component="p">
                        
                          {parse(productDescription)}
                          
                          </Typography>
                  </Container>
                 
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                    }}
                  >
                        <Card component="p" align="left" variant="p" >
                          <CardMedia
                          component="img"
                          height={200}
                          image={productImage}
                          maxWidth="lg"
                          src={`${productImage}?w=50&h=50&fit=crop&auto=format`}
                          alt="Chelsea-header"/>
                          {/* <CardHeader
                          title={productName}
                          subheader={productCode}/> */}
                        </Card>
                  </Paper>
                </Grid>
                <Grid item xs={12} 
                  sx={{ p: 2, 
                  display: 'flex', 
                  flexDirection: 'row', 
                  flexWrap : 'wrap', 
                  alignContent : 'flex-end', 
                  justifyContent :"flex-end"}}>
                    <Box sx={{ minWidth: 120, marginRight : 3, height : 10}}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Search By</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={foption}
                            label="search by"
                            onChange={handleChangeFoption}
                          >
                            <MenuItem value="pname">product name</MenuItem>
                            <MenuItem value="pcode">product code</MenuItem>
                          </Select>
                      </FormControl>
                    </Box>
                    <Stack  sx={{ width: 257, marginRight : 0, height:20}}>
                        <Autocomplete
                          value={value}
                          onChange={AutocompleteChange}
                          autoSelect={true}
                          clearOnEscape={true}
                          inputValue={inputValue}
                          onInputChange={(event,newinputValue)=>{setInputValue(newinputValue)}}
                          id="free-solo-2-demo"
                          disableClearable
                          options={productListsv2.map((product) => 
                            {
                              if (foption === "pname") {
                                 return product.name
                              }else{
                                return product.sku
                              }}
                              )}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Search Product"
                              InputProps={{
                                ...params.InputProps,
                                type: 'search', 
                              }}
                            />
                          )}
                        />
                      </Stack>                 
                </Grid>
                <Grid item xs={12}>
                  <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column'}}>
                    <React.Fragment>
                        <Typography>
                        <Title > Products </Title>
                          </Typography> 
                        <TableContainer sx={{height: 400  }}>
                        <Table size="small" sx = {{height : "max-content"}} stickyHeader aria-label="sticky table">
                          <TableHead>
                            <TableRow>
                              <TableCell>Product Name</TableCell>
                              <TableCell>Product Code </TableCell>
                              <TableCell>Stock Status</TableCell>
                              <TableCell>Quantity In Stock</TableCell>
                              <TableCell align="left">Sales</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                             { (inputValue.length > 1) ? ( 
                             FilteredProduct.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((product) => {
                                return (
                                  <TableRow  color="primary" id={product.id} key={product.sku} onClick={getProductID}>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>{product.sku}</TableCell>
                                    <TableCell>{product.stock_status}</TableCell>
                                    <TableCell>{product.stock_quantity}</TableCell>
                                    <TableCell>{`K ${product.price}`}</TableCell>
                                    <TableCell sx = {{display:"none"}} >{product.description}</TableCell>
                                  </TableRow>
                                )
                              }) )
                              : (
                                productListsv2.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((product) => {
                                   return ( 
                                   <TableRow id={product.id} key={product.sku} onClick={getProductID}>
                                       <TableCell>{product.name}</TableCell>
                                       <TableCell>{product.sku}</TableCell>
                                       <TableCell>{product.stock_status}</TableCell>
                                       <TableCell>{product.stock_quantity}</TableCell>
                                       <TableCell>{`K ${product.price}`}</TableCell>
                                       <TableCell sx = {{display:"none"}}>{product.description}</TableCell>
                                     </TableRow>
                                    )
                                     } 
                                   )
                                  
                               )
                                    }
                          </TableBody>
                        </Table>
                        </TableContainer>
                        <TablePagination
                          rowsPerPageOptions={[15, 30, 35]}
                          component="div"
                          count={count}
                          page={page}
                          onPageChange={handleChangePage}
                          rowsPerPage={rowsPerPage}
                          onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                        </React.Fragment>
                  </Paper>
                </Grid>
              </Grid>
              <Copyright sx={{ pt: 4 }} />
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    
  );
}

export default function Dashboard() {
  return  <DashboardContent />;
}