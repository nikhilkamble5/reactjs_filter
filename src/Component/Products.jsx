// import React from "react";

// const Products = () => {
//   const data = [
//     {
//       id: 168,
//       title: "Charger SXT RWD",
//       price: 32999.99,
//       quantity: 3,
//       total: 98999.97,
//       discountPercentage: 13.39,
//       discountedTotal: 85743.87,
//       thumbnail:
//         "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png",
//     },
//     {
//       id: 78,
//       title: "Apple MacBook Pro 14 Inch Space Grey",
//       price: 1999.99,
//       quantity: 2,
//       total: 3999.98,
//       discountPercentage: 18.52,
//       discountedTotal: 3259.18,
//       thumbnail:
//         "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
//     },
//     {
//       id: 183,
//       title: "Green Oval Earring",
//       price: 24.99,
//       quantity: 5,
//       total: 124.94999999999999,
//       discountPercentage: 6.28,
//       discountedTotal: 117.1,
//       thumbnail:
//         "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png",
//     },
//     {
//       id: 100,
//       title: "Apple Airpods",
//       price: 129.99,
//       quantity: 5,
//       total: 649.95,
//       discountPercentage: 12.84,
//       discountedTotal: 566.5,
//       thumbnail:
//         "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
//     },
//     {
//       id: 144,
//       title: "Cricket Helmet",
//       price: 44.99,
//       quantity: 4,
//       total: 179.96,
//       discountPercentage: 11.47,
//       discountedTotal: 159.32,
//       thumbnail:
//         "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/thumbnail.png",
//     },
//     {
//       id: 124,
//       title: "iPhone X",
//       price: 899.99,
//       quantity: 4,
//       total: 3599.96,
//       discountPercentage: 8.03,
//       discountedTotal: 3310.88,
//       thumbnail:
//         "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png",
//     },
//     {
//       id: 148,
//       title: "Golf Ball",
//       price: 9.99,
//       quantity: 4,
//       total: 39.96,
//       discountPercentage: 11.24,
//       discountedTotal: 35.47,
//       thumbnail:
//         "https://cdn.dummyjson.com/products/images/sports-accessories/Golf%20Ball/thumbnail.png",
//     },
//     {
//       id: 122,
//       title: "iPhone 6",
//       price: 299.99,
//       quantity: 3,
//       total: 899.97,
//       discountPercentage: 19.64,
//       discountedTotal: 723.22,
//       thumbnail:
//         "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/thumbnail.png",
//     },
//     {
//       id: 110,
//       title: "Selfie Lamp with iPhone",
//       price: 14.99,
//       quantity: 5,
//       total: 74.95,
//       discountPercentage: 19.87,
//       discountedTotal: 60.06,
//       thumbnail:
//         "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Lamp%20with%20iPhone/thumbnail.png",
//     },
//   ];
//   return (
//     <div>
//       {data.map((product) => {
//         <div className="container">
//           return (
//           <div className="cart">
//             <div>
//               <img src={product.thumbnail} alt="" style={{ width: "50%" }} />
//             </div>
//             <div>
//               <p>{product.title}</p>
//               <p>{product.price}</p>
//             </div>
//           </div>
//           );
//         </div>;
//       })}
//     </div>
//   );
// };

// export default Products;


// import React from "react";
// import "./Products.css";
// import { useState } from "react";
// import Data from "./Data";
// import { useEffect } from "react";
// const Products = () => {
 

//   const [productItem, setProductItem] = useState([]);

//  const handleFilter=()=>{
//   const filterItem= productItem.filter((item)=>{
//         return(
//           item.price>30
//         )
//   })
//   setProductItem(filterItem)
//  }


//  useEffect(()=>{
//   fetch('https://fakestoreapi.com/products/category/jewelery')
//             .then(res=>res.json())
//             .then(data=>setProductItem(data))
//  },[])
//   return (
//     <div>
//       <p className="filter" onClick={handleFilter}>Filter By Price</p>
//     <div className="cart">
//       {productItem.map((product) => {
//         return (
//           <div className="product" key={product.id}>
//             <div className="product-image">
//               {/* <img src={product.thumbnail} alt="" style={{ width: "50%" }} /> */}
//               <img src={product.image} alt="" style={{ width: "50%" }} />

//             </div>
//             <div className="product-details">
//               <p className="product-title">{product.title}</p>
//               <p className="product-price">{product.price}</p>
//             </div>
//             <button>Add</button>
//           </div>
//         );
//       })}
//     </div>
//     </div>
//   );
// };

// export default Products;


// import React, { useState, useEffect } from "react";
// import "./Products.css";
// import Data from "./Data"; // Assuming this is where your initial data is stored

// const Products = () => {
//   const [productItem, setProductItem] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [selectedFilter, setSelectedFilter] = useState("all");

//   // Fetch initial products from an API or local data (Data.js)
//   useEffect(() => {
//     // Example fetch from a local data file (Data.js)
//     setProductItem(Data); // Replace with actual fetch logic if using an API
//   }, []);

//   // Function to filter products based on selected dropdown option
//   // const handleFilterChange = (event) => {
//   //   const filterValue = event.target.value;
//   //   setSelectedFilter(filterValue);

//     const handleOnChange =()=>{
//       const filtervalue=data.current.value
//     }

//     let filteredItems = [];
//     switch (filterValue) {
//       case "over30":
//         filteredItems = productItem.filter((item) => item.price > 30);
//         break;
//       case "over300":
//         filteredItems = productItem.filter((item) => item.price > 300);
//         break;
//       case "over500":
//         filteredItems = productItem.filter((item) => item.price > 500);
//         break;
//       default:
//         filteredItems = productItem;
//         break;
//     }

//     setFilteredProducts(filteredItems);
//   };

//   // Render based on filteredProducts state
//   const productsToDisplay = filteredProducts.length > 0 ? filteredProducts : productItem;

//   return (
//     <div>
//       {/* <div className="filters">
//         <select className="filter" value={selectedFilter} onChange={handleFilterChange}>
//           <option value="all">All Products</option>
//           <option value="over30">Price > 30</option>
//           <option value="over300">Price > 300</option>
//           <option value="over500">Price > 500</option>
//         </select>
//       </div> */}
//       <h1 className="fw-bolder display-4 py-5">
//           Hello Please Select One from Following
//         </h1>

//         <select
//           className="form-select w-50 mb-5"
        
//           onChange={() => handleOnChange()}
//         >
//           <option>--Select--</option>
//           <option>price > 30</option>
//           <option>price > 300</option>
//           <option>price >1000</option>
//         </select>

//       <div className="cart">
//         {productsToDisplay.map((product) => (
//           <div className="product" key={product.id}>
//             <div className="product-image">
//               <img src={product.thumbnail} alt="" style={{ width: "50%" }} />
//             </div>
//             <div className="product-details">
//               <p className="product-title">{product.title}</p>
//               <p className="product-price">{product.price}</p>
//             </div>
//             <button>Add</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;


import React, { useState, useEffect } from "react";
import "./Products.css";
import Data from "./Data"; // Assuming this is where your initial data is stored
import { useRef } from "react";

const Products = () => {
  const [productItem, setProductItem] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const selectRef=useRef(null)
  
  useEffect(() => {
    // Fetch initial products from an API or local data (Data.js)
    setProductItem(Data); // Replace with actual fetch logic if using an API
  }, []);

  const handleOnChange = () => {
    // Assuming `data` is a ref or state holding the select value
    const filterValue = selectRef.current.value; // Adjust based on your implementation
    let filteredItems = [];

    switch (filterValue) {
      case "over30":
        filteredItems = productItem.filter((item) => item.price > 30);
        break;
      case "over300":
        filteredItems = productItem.filter((item) => item.price > 300);
        break;
      case "over500":
        filteredItems = productItem.filter((item) => item.price > 500);
        break;
      default:
        filteredItems = productItem;
        break;
    }

    setFilteredProducts(filteredItems);
  };

  const productsToDisplay = filteredProducts.length > 0 ? filteredProducts : productItem;

  return (
    <div>
      {/* <h1 className="fw-bolder display-4 py-5">Hello Please Select One from Following</h1> */}
      
      {/* Assuming `data` is defined as a ref or state for the select input */}
      <select className="form-select w-50 mx-auto mb-5 my-3 " onChange={handleOnChange} ref={selectRef}>
        
        <option>--Select--</option>
        <option value="over30">Price > 30</option>
        <option value="over300">Price > 300</option>
        <option value="over500">Price > 500</option>
      </select>

      <div className="cart">
        {productsToDisplay.map((product) => (
          <div className="product" key={product.id}>
            <div className="product-image">
              <img src={product.thumbnail} alt="" style={{ width: "50%" }} />
            </div>
            <div className="product-details">
              <p className="product-title">{product.title}</p>
              <p className="product-price">{product.price}</p>
            </div>
            <button>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
