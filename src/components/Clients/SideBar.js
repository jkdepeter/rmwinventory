import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Badge from '@mui/material/Badge';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { GiTrousers,GiApolloCapsule, GiBeltBuckles, GiSteeltoeBoots,GiToolbox} from 'react-icons/gi'; 
import { FaVest,FaTshirt,FaBriefcase} from 'react-icons/fa'; 
import {GrRestroomMen} from 'react-icons/gr';
import {AiFillContainer} from 'react-icons/ai';
import { Propane } from '@mui/icons-material';
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

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export function MainListItems(props){
  const [productsCat0name,setProductCat0name] = React.useState("...")
  const [productsCat0count,setProductCat0count] = React.useState(1)
  const [productsCat1name,setProductCat1name] = React.useState("...")
  const [productsCat1count,setProductCat1count] = React.useState(1)
  const [productsCat2name,setProductCat2name] = React.useState("...")
  const [productsCat2count,setProductCat2count] = React.useState(1)
  const [productsCat3name,setProductCat3name] = React.useState("...")
  const [productsCat3count,setProductCat3count] = React.useState(1)
  const [productsCat4name,setProductCat4name] = React.useState("...")
  const [productsCat4count,setProductCat4count] = React.useState(1)
  const [productsCat5name,setProductCat5name] = React.useState("...")
  const [productsCat5count,setProductCat5count] = React.useState(1)
  const [productsCat6name,setProductCat6name] = React.useState("...")
  const [productsCat6count,setProductCat6count] = React.useState(1)
  const [productsCat7name,setProductCat7name] = React.useState("...")
  const [productsCat7count,setProductCat7count] = React.useState(1)
  const [productsCat8name,setProductCat8name] = React.useState("...")
  const [productsCat8count,setProductCat8count] = React.useState(1)
  const [productsCat9name,setProductCat9name] = React.useState("...")
  const [productsCat9count,setProductCat9count] = React.useState(1)
  
  const [productCat0id,setProductCat0id] = React.useState("1")
  const [productCat1id,setProductCat1id] = React.useState("1")
  const [productCat2id,setProductCat2id] = React.useState("1")
  const [productCat3id,setProductCat3id] = React.useState("1")
  const [productCat4id,setProductCat4id] = React.useState("1")
  const [productCat5id,setProductCat5id] = React.useState("1")
  const [productCat6id,setProductCat6id] = React.useState("1")
  const [productCat7id,setProductCat7id] = React.useState("1")
  const [productCat8id,setProductCat8id] = React.useState("1")
  const [productCat9id,setProductCat9id] = React.useState("1")

const [productsCatId,setProductCatId] = React.useState("1")
React.useEffect(() => {
  try {
    const api = new WooCommerceRestApi({
      url: "https://www.soul2urfeet.com.pg",
      consumerKey: "ck_f764b6e861d84415f674fac56b2feb720d237e71",
      consumerSecret: "cs_69d429a05a8d131da15bf8480b14b1014f32f76e",
      version: "wc/v3"
    });
api.get("products/categories", {
})
  .then((response) => {
    console.log("Response Status:", response.status);
    console.log("Response Datasssssss:", response.data);
    console.log("Response Data: name", response.data.name);
    console.log("Response Data: id", response.data.id);
    console.log("Total of pages:", response.headers['x-wp-totalpages']);
    console.log("Total of items:", response.headers['x-wp-total']);
    setProductCat0name(response.data[0].name) //Accessories
    setProductCat0count(response.data[0].count)
    setProductCat1name(response.data[1].name) //Bags &amp; Briefcases
    setProductCat1count(response.data[1].count)
    setProductCat2name(response.data[2].name) //Belts
    setProductCat2count(response.data[2].count)
    setProductCat3name(response.data[3].name )//Boots
    setProductCat3count(response.data[3].count)
    setProductCat4name(response.data[4].name )//Hats &amp; Caps
    setProductCat4count(response.data[4].count)
    setProductCat5name(response.data[5].name) //Jackets &amp; Vests"
    setProductCat5count(response.data[5].count)
    setProductCat6name(response.data[6].name) //Jeans &amp; Trousers
    setProductCat6count(response.data[6].count)
    setProductCat7name(response.data[7].name) //Leather Care
    setProductCat7count(response.data[7].count)
    setProductCat8name(response.data[8].name )//Mens
    setProductCat8count(response.data[8].count) 
    setProductCat9name(response.data[9].name)
    setProductCat9count(response.data[9].count)// Shirts &amp; T-Shirts
// category id
    setProductCat0id(response.data[0].id)
    setProductCat1id(response.data[1].id)
    setProductCat2id(response.data[2].id)
    setProductCat3id(response.data[3].id)
    setProductCat4id(response.data[4].id)
    setProductCat5id(response.data[5].id)
    setProductCat6id(response.data[6].id)
    setProductCat7id(response.data[7].id)
    setProductCat8id(response.data[8].id)
    setProductCat9id(response.data[9].id)
  })
  .catch((error) => {
    //console.log("Response Headers:", error.response.headers);
    console.log("Response Data:", error);
  })
  .finally(() => {
    // Always executed.
  });
  } catch (error) {console.log(error)}
}, []);
 return (
    <ThemeProvider theme={mdTheme}>
    <React.Fragment>
      <ListItemButton id={productCat0id} onClick={props.getFunc} >
        <ListItemIcon>
        <Badge badgeContent={productsCat0count} color="primary">
          <GiToolbox size={40} color='primary'/>
          </Badge>
        </ListItemIcon>
        <ListItemText primary={productsCat0name} />
      </ListItemButton>
      <ListItemButton id={productCat1id} onClick={props.getFunc}>
        <ListItemIcon>
        <Badge badgeContent={productsCat1count} color="primary">
          <FaBriefcase size={40} color='primary' />
          </Badge>
        </ListItemIcon>
        
        <ListItemText primary={productsCat1name} />
       
      </ListItemButton>
      <ListItemButton id={productCat2id} onClick={props.getFunc}>
        <ListItemIcon>
        <Badge badgeContent={productsCat2count} color="primary">
          <GiBeltBuckles size={40} color='primary' />
          </Badge>
        </ListItemIcon>
        <ListItemText primary={productsCat2name} />
       
      </ListItemButton>
      <ListItemButton id={productCat3id} onClick={props.getFunc}>
        <ListItemIcon>
        <Badge badgeContent={productsCat3count} color="primary">
          <GiSteeltoeBoots size={40} color='primary' />
          </Badge>
        </ListItemIcon>
        <ListItemText primary={productsCat3name} />
        
      </ListItemButton>
      <ListItemButton id={productCat4id} onClick={props.getFunc}> 
        <ListItemIcon>
        <Badge badgeContent={productsCat4count} color="primary">
          <GiApolloCapsule size={40} color='primary'/>
          </Badge>
        </ListItemIcon>
        <ListItemText primary={productsCat4name} />
        
      </ListItemButton>
      <ListItemButton id={productCat5id} onClick={props.getFunc} >
        <ListItemIcon>
        <Badge badgeContent={productsCat5count} color="primary">
          <FaVest size={40}  color='primary'/>
          </Badge>
        </ListItemIcon>
        <ListItemText primary={productsCat5name} />
        
      </ListItemButton>
      <ListItemButton id={productCat6id} onClick={props.getFunc}>
        <ListItemIcon>
        <Badge badgeContent={productsCat6count} color="primary">
          <GiTrousers size={40}  color='primary'/>
          </Badge>
        </ListItemIcon>
        <ListItemText primary={productsCat6name} />
        
      </ListItemButton>
      <ListItemButton id={productCat7id} onClick={props.getFunc}>
        <ListItemIcon >
        <Badge badgeContent={productsCat7count} color="primary">
          <AiFillContainer size={40}  color='primary'/>
          </Badge>
        </ListItemIcon>
        <ListItemText primary={productsCat7name} />
        
      </ListItemButton>
      <ListItemButton id={productCat8id} onClick={props.getFunc}>
        <ListItemIcon>
        <Badge badgeContent={productsCat8count} color="primary">
          <GrRestroomMen size={40}  color='primary'/>
          </Badge>
        </ListItemIcon>
        <ListItemText primary={productsCat8name} />
        
      </ListItemButton>
      <ListItemButton  id={productCat9id} onClick={props.getFunc}>
        <ListItemIcon>
        <Badge badgeContent={productsCat9count} color="primary">
          <FaTshirt size={40}  color='primary'/>
          </Badge>
        </ListItemIcon>
        <ListItemText primary={productsCat9name} />
        
      </ListItemButton>
    </React.Fragment>
    </ThemeProvider>
  );

}



export const secondaryListItems = (
  <ThemeProvider theme={mdTheme}>
  <React.Fragment>
    <ListSubheader component="div" inset>
      Locations
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <FmdGoodIcon color='primary' />
      </ListItemIcon>
      <ListItemText primary="Port Moresby" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <FmdGoodIcon  color='primary'/>
      </ListItemIcon>
      <ListItemText primary="Lae" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon> 
        <FmdGoodIcon color='primary'/>
      </ListItemIcon>
      <ListItemText primary="Goroka" />
    </ListItemButton>
  </React.Fragment>
  </ThemeProvider>
);