// import * as React from 'react';
// import TableCell from '@mui/material/TableCell';
// import TableRow from '@mui/material/TableRow';

// export default function SearchProducts(...props){
//   const [Allproducts,setAllproducts] = React.useState(props.productlist)
//   React.useEffect(() => {
//     setAllproducts(props.productlist)

// })
// console.log("type of all products",typeof(Allproducts))
// Allproducts.map((product) => {
//     if (props.inputValue===product.sku || props.inputValue===product.name) {
//      return (
//        <TableRow 
//        id={product.id}
//        key={product.sku}
//        onClick={props.getProducts}
//        >
//          <TableCell>{product.name}</TableCell>
//          <TableCell>{product.slung}</TableCell>
//          <TableCell>{product.sku}</TableCell>
//          <TableCell>{product.name}</TableCell>
//          <TableCell align="right">{`K ${product.price}`}</TableCell>
//          <TableCell sx = {{display:"none"}} align="right">{product.name}</TableCell>
//        </TableRow>
//      )
//     }
//    })

// }