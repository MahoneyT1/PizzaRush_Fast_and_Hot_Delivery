// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Data from "../data";
// import { Link } from "react-router-dom";
// import Headings from "../components/Headings";
// import { TbCurrencyNaira } from "react-icons/tb";
// import { BsCurrencyDollar } from "react-icons/bs";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// const MenuPage = ({ addProductToCart,fetchPizzas, pizzas }) => {




 

  




//   // Animation Variants
//   const imageVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { duration: 1, ease: "easeOut" },
//     },
//   };

//   const textVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { duration: 1, ease: "easeOut", delay: 0.5 }, 
//     },
//   };

//   console.log(pizzas)

//   return (
//     <div>
//       <div className="container">
//         <Headings heading={"Starters"} />
        

//         <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          
//             {pizzas.length > 0 ? (
//               pizzas.map((item) => (
//             <div key={item.id} className="item mb-4">
//               {/* =======PRODUCT IMAGE STARTS HERE======= */}
//               <motion.div
//                 className="item-image rounded d-flex align-items-center justify-content-center"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ amount: 0.2 }}
//                 variants={imageVariants}
//               >
//                 <img src={`http://localhost:8000${item.image}`} loading="lazy" alt="" />
//               </motion.div>

//               {/* =======PRODUCT CONTENT STARTS HERE======= */}
//               <motion.div
//                 className="item-details pt-2"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ amount: 0.2 }}
//                 variants={textVariants}
//               >
//                 <Link to={`/shop/${item.name}`} className="fw-bolder nav-link">
//                   {item.name}
//                 </Link>
//                 <div className="price d-flex align-items-center my-2 gap-3">
//                   <small>{item.ingredients}</small>
//                 </div>
//                 <button
//                   onClick={() => addProductToCart(item)}
//                   className="button2 p-1 px-3 text-white"
//                 >
//                   Add To Cart ${item.price}
//                 </button>
//               </motion.div>
//             </div> ))
//           ) : (
//             <p>Loading pizzas...</p>
//           )}
//         </div>

//         <Headings heading={"Classic Pizza"} />

//         <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
//           {Data.map((item) => (
//             <div key={item.id} className="item mb-4">
//               {/* =======PRODUCT IMAGE STARTS HERE======= */}
//               <motion.div
//                 className="item-image rounded d-flex align-items-center justify-content-center"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ amount: 0.2 }}
//                 variants={imageVariants}
//               >
//                 <img src={item.image} loading="lazy" alt="" />
//               </motion.div>

//               {/* =======PRODUCT CONTENT STARTS HERE======= */}
//               <motion.div
//                 className="item-details pt-2"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ amount: 0.2 }}
//                 variants={textVariants}
//               >
//                 <Link to={`/shop/${item.name}`} className="fw-bolder nav-link">
//                   {item.name}
//                 </Link>
//                 <div className="price d-flex align-items-center my-2 gap-3">
//                   <small>{item.description}</small>
//                 </div>
//                 <button
//                   onClick={() => addProductToCart(item)}
//                   className="button2 p-1 px-3 text-white"
//                 >
//                   Add To Cart <TbCurrencyNaira size={20} /> {item.price}
//                 </button>
//               </motion.div>
//             </div>
//           ))}
//         </div>
//       </div>


//       <Toaster />
//     </div>
//   );
// };

// export default MenuPage;



import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Headings from "../components/Headings";
import { TbCurrencyNaira } from "react-icons/tb";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const MenuPage = ({ addProductToCart, pizzas }) => {

  // Group pizzas by description_type (i.e., "Vegetarian", "Starters")
  const groupByDescriptionType = (pizzas) => {
    return pizzas.reduce((acc, pizza) => {
      const { description_type } = pizza; // Group by description_type
      if (!acc[description_type]) {
        acc[description_type] = [];
      }
      acc[description_type].push(pizza);
      return acc;
    }, {});
  };

  // Grouped pizzas by description_type
  const groupedPizzas = groupByDescriptionType(pizzas);

  // Animation Variants
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  return (
    <div>
      <div className="container">



      {pizzas.length > 0 ? (
        <>
          {/* Loop through each group (e.g., "Starters", "Vegetarian") */}
        {Object.keys(groupedPizzas).map((type) => (
          <div key={type}>
            {/* Display the type (e.g., "Starters", "Vegetarian") as a heading */}
            <Headings heading={type} />

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
              {/* Loop through pizzas in each group (type) */}
              {groupedPizzas[type].map((item) => (
                <div key={item.id} className="item mb-4">
                  {/* =======PRODUCT IMAGE STARTS HERE======= */}
                  <motion.div
                    className="item-image rounded d-flex align-items-center justify-content-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    variants={imageVariants}
                  >
                    <img
                      src={`http://localhost:8000${item.image}`} // Replace with actual image URL
                      loading="lazy"
                      alt={item.name}
                    />
                  </motion.div>

                  {/* =======PRODUCT CONTENT STARTS HERE======= */}
                  <motion.div
                    className="item-details pt-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    variants={textVariants}
                  >
                    <Link to={`/shop/${item.name}`} className="fw-bolder nav-link">
                      {item.name}
                    </Link>
                    <div className="price d-flex align-items-center my-2 gap-3">
                      <small>{item.ingredients}</small>
                    </div>
                    <button
                      onClick={() => addProductToCart(item)}
                      className="button2 p-1 px-3 text-white"
                    >
                      Add To Cart <TbCurrencyNaira size={20} /> {item.price}
                    </button>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        ))}
        </>
      ) :(
        <div className="loading-p">
          <p>Loading pizzas...</p>
        </div>
       )}
        
      </div>

      <Toaster />
    </div>
  );
};

export default MenuPage;
