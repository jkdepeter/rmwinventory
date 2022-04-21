// import * as React from 'react';
// import TableCell from '@mui/material/TableCell';
// import TableRow from '@mui/material/TableRow';

// export default function AllProducts(...props){
//   React.useEffect(() => {
//     const Allproducts = props.productlist

// })
// Allproducts.slice(props.page * props.rowsPerPage, props.page * props.rowsPerPage + props.rowsPerPage).map((product) => {
//     return ( <TableRow 
//       id={product.id}
//       key={product.sku}
//       onClick={props.getProducts}
//       >
//         <TableCell>{product.name}</TableCell>
//         <TableCell>{product.slung}</TableCell>
//         <TableCell>{product.sku}</TableCell>
//         <TableCell>{product.name}</TableCell>
//         <TableCell align="right">{`K ${product.price}`}</TableCell>
//         <TableCell sx = {{display:"none"}} align="right">{product.name}</TableCell>
//       </TableRow>
//      )
//       } 
//     )
// }