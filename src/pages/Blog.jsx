import React from 'react'
import CommonSection from './Common-Section'
import {TextField} from '@mui/material'
const Blog = () => {
  return (
    <div>
      <CommonSection title="Blog"/>
     <TextField label='Name'/>
     
    </div>
  )
}

export default Blog


// import React, { useState } from "react";

// const PAGE_SIZE = 4;

// const PaginationExample = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const startIndex = (currentPage - 1) * PAGE_SIZE;
//   const endIndex = startIndex + PAGE_SIZE;

//   const items = document.querySelectorAll(".item");
//   for (let i = 0; i < items.length; i++) {
//     const item = items[i];
//     if (i >= startIndex && i < endIndex) {
//       item.style.display = "block";
//     } else {
//       item.style.display = "none";
//     }
//   }

//   const totalPages = Math.ceil(items.length / PAGE_SIZE);

//   const renderPagination = () => {
//     const buttons = [];
//     for (let i = 1; i <= totalPages; i++) {
//       const isActive = currentPage === i;
//       buttons.push(
//         <button
//           key={i}
//           onClick={() => handlePageChange(i)}
//           disabled={isActive}
//         >
//           {i}
//         </button>
//       );
//     }
//     return buttons;
//   };

//   return (
//     <div>
//       <div className="container">
//         <div className="item">Item 1</div>
//         <div className="item">Item 2</div>
//         <div className="item">Item 3</div>
//         <div className="item">Item 4</div>
//         <div className="item">Item 5</div>
//         <div className="item">Item 6</div>
//         <div className="item">Item 7</div>
//         <div className="item">Item 8</div>
//         <div className="item">Item 9</div>
//         <div className="item">

// import React, { useState } from 'react';
// import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@material-ui/core';

// function Blog() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const handleMenuOpen = () => setMenuOpen(true);
//   const handleMenuClose = () => setMenuOpen(false);

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6">My App</Typography>
//         <Button onMouseEnter={handleMenuOpen}>Menu</Button>
//         <Menu anchorEl={menuOpen} open={Boolean(menuOpen)} onClose={handleMenuClose} onMouseLeave={handleMenuClose}>
//           <MenuItem>Item 1</MenuItem>
//           <MenuItem>Item 2</MenuItem>
//           <MenuItem>Item 3</MenuItem>
//         </Menu>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Blog;

 
// <section className='webDev2'>
//    <div className='cards'>
//    <div class="card">
//   <img src="img_avatar.png" alt="Avatar" style="width:100%"/>
//   <div class="container">
//     <h4><b>John Doe</b></h4> 
//     <p>Architect & Engineer</p> 
//   </div>
// </div>
// <div class="card">
//   <img src="img_avatar.png" alt="Avatar" style="width:100%"/>
//   <div class="container">
//     <h4><b>John Doe</b></h4> 
//     <p>Architect & Engineer</p> 
//   </div>
// </div>
// <div class="card">
//   <img src="img_avatar.png" alt="Avatar" style="width:100%"/>
//   <div class="container">
//     <h4><b>John Doe</b></h4> 
//     <p>Architect & Engineer</p> 
//   </div>
// </div>
// <div class="card">
//   <img src="img_avatar.png" alt="Avatar" style="width:100%"/>
//   <div class="container">
//     <h4><b>John Doe</b></h4> 
//     <p>Architect & Engineer</p> 
//   </div>
// </div>
// <div class="card">
//   <img src="img_avatar.png" alt="Avatar" style="width:100%"/>
//   <div class="container">
//     <h4><b>John Doe</b></h4> 
//     <p>Architect & Engineer</p> 
//   </div>
// </div>
// <div class="card">
//   {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"/> */}
//   <div class="container">
//     <h4><b>John Doe</b></h4> 
//     <p>Architect & Engineer</p> 
//   </div>
// </div>
// <div class="card">
//   <img src="img_avatar.png" alt="Avatar" style="width:100%"/>
//   <div class="container">
//     <h4><b>John Doe</b></h4> 
//     <p>Architect & Engineer</p> 
//   </div>
// </div>
// <div class="card">
//   <img src="img_avatar.png" alt="Avatar" style="width:100%"/>
//   <div class="container">
//     <h4><b>John Doe</b></h4> 
//     <p>Architect & Engineer</p> 
//   </div>
// </div>
// <div class="card">
//   <img src="img_avatar.png" alt="Avatar" style="width:100%"/>
//   <div class="container">
//     <h4><b>John Doe</b></h4> 
//     <p>Architect & Engineer</p> 
//   </div>
// </div>
//    </div>
//    <div className='details'>
// hello
//    </div>
//   </section>