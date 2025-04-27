import React from "react";

const Banner = () => {
  return (
    <div className="bg-[url(/src/assets/banner.jpg)] h-[730px] bg-cover bg-center bg-no-repeat">
      <div className=" text-white ">
        <div className="pt-[255px] pl-[130px]">
          <h3 className="text-5xl font-bold font-sora">
            Global Treasure Trove | Rare Finds & <br /> Luxury Auctions Online
          </h3>
          <p className="text-xl opacity-80 mt-6 font-sora">
          Discover rare masterpieces, vintage treasures, and luxury collectibles through <br/>{" "}
          exclusive global online auction experiences.
          </p>
          <button className="btn btn-primary bg-white text-black rounded-full mt-6 px-10 font-sora">
            Explore Auctions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
