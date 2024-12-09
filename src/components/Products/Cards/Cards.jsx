import React from "react";

const Cards = () => {
  return (
    <div className="text-center w-full mx-auto m-10">
      {/* header */}
      <div className="mb-10 border-b dark:border-b-gray-500 pb-3 sm:text-center flex justify-between sm:block">
        <h1 className="text-lg sm:text-2xl font-bold">All Products</h1>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0 "></section>
    </div>

    // <div className="text-center w-full mx-auto m-10">
    //   <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
    //     {result.map((data) => (
    //       <div
    //         key={data.id}
    //         className="flex flex-col items-center hover:scale-105 transition-all duration-300 shadow-md p-3 rounded-lg"
    //       >
    //         {/* image section */}
    //         <img
    //           data-aos="fade-up"
    //           src={data.img}
    //           alt={data.title}
    //           className="w-[150px] h-[250px] object-cover rounded-lg cursor-pointer"
    //         />
    //         {/* details section */}
    //         <div className="" data-aos="fade-up">
    //           <h1>{data.title}</h1>
    //           <div className="flex text-xs gap-1 items-center">
    //             <p className=" flex gap-0 text-yellow-400">
    //               {data.star}
    //               {data.star}
    //               {data.star}
    //               {data.star}
    //             </p>
    //             <p>{data.reviews}</p>
    //           </div>
    //           <p className="text-sm">${data.price}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </section>
    // </div>
  );
};

export default Cards;
