import React from "react";

const Banner = () => {
  return (
    <div
      className="relative h-[400px] w-full flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://i.ibb.co.com/LDRSwn41/Banner-min.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 text-white px-6 md:px-16 max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
          Bid on Unique Items from
          <br />
          Around the World
        </h1>
        <p className="mt-4 text-sm md:text-base text-gray-200">
          Discover rare collectibles, luxury goods, and vintage treasures in our
          curated auctions
        </p>
        <button className="mt-6 btn btn-outline bg-white text-black hover:bg-gray-200 rounded-full">
          Explore Auctions
        </button>
      </div>
    </div>
  );
};

export default Banner;
