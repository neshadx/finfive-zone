import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";


export function ActiveAuctionsHeader() {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-1">Active Auctions</h2>
      <p className="text-gray-500 text-sm">
        Discover and bid on extraordinary items
      </p>
    </div>
  );
}

export function AuctionTable({ items, favorites, addToFavorites }) {
  return (
    
    <div className="bg-white shadow p-4 rounded-xl">
  <div className="overflow-hidden rounded-xl border border-black">
    <table className="w-full text-sm">
      <thead className="bg-white">
        <tr className="text-black text-left">
          <th className="py-2 px-4 border-b border-black">Items</th>
          <th className="py-2 px-4 border-b border-black">Current Bid</th>
          <th className="py-2 px-4 border-b border-black">Time Left</th>
          <th className="py-2 px-4 text-center border-b border-black">Bid Now</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          const isFavorited = favorites.some((fav) => fav.id === item.id);
          return (
            <tr key={item.id} className="hover:bg-gray-50 border-t border-black">
              <td className="py-3 px-4 flex items-center gap-3 border-black ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-10 h-10 rounded object-cover"
                />
                <span className="font-medium text-gray-800">{item.title}</span>
              </td>
              <td className="py-3 px-4 text-gray-700 border-black ">${item.currentBidPrice}</td>
              <td className="py-3 px-4 text-gray-700 border-black ">{item.timeLeft}</td>
              <td className="py-3 px-4 text-center border-black ">
                <button
                  onClick={() => addToFavorites(item)}
                  className={`text-xl transition ${
                    isFavorited
                      ? "text-red-500 cursor-not-allowed"
                      : "text-gray-400 hover:text-red-500"
                  }`}
                  disabled={isFavorited}
                >
                  
                  {isFavorited ? <FaHeart /> : <FaRegHeart />}

                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
</div>

  );
}

export function FavoriteItemsSidebar({ favorites, removeFavorite }) {
  const totalAmount = favorites.reduce(
    (sum, item) => sum + item.currentBidPrice,
    0
  );

  return (
    <div className="bg-white mt-19 rounded-xl shadow p-4 w-full max-w-xs h-full ">
      <h3 className="text-lg font-semibold mb-4 border-b border-black">
        ♡ Favorite Items
      </h3>

      {favorites.length === 0 ? (
        <div className=" text-center text-sm text-gray-500">
          <p className="font-semibold text-black mb-1">No favorites yet</p>
          <p>Click the heart icon on any item to add it to your favorites</p>
        </div>
      ) : (
        <ul className="space-y-4">
          {favorites.map((item) => (
            <li
              key={item.id}
              className=" flex items-center justify-between border-1 border-black rounded-lg"
            >
              <div className="flex items-center gap-3 m-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-10 h-10 rounded"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800 leading-tight">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    ${item.currentBidPrice} · Bids: {item.bidsCount}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFavorite(item.id)}
                className="text-gray-400 hover:text-red-500 p-2"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6 pt-4 border-t text-sm font-medium text-gray-700 flex justify-between">
        <span>Total Bids Amount</span>
        <span>${totalAmount}</span>
      </div>
    </div>
  );
}

export default function AuctionDashboard() {
  const [favorites, setFavorites] = useState([]);
  const [auctionItems, setAuctionItems] = useState([]);

  useEffect(() => {
    fetch("/data/auctionItems.json")
      .then((res) => res.json())
      .then((data) => setAuctionItems(data))
      .catch((err) => console.error("Failed to load data:", err));
  }, []);

  const addToFavorites = (item) => {
    if (!favorites.find((fav) => fav.id === item.id)) {
      setFavorites([...favorites, item]);
      toast.success(`${item.title} added to favorites!`);
    }
  };

  const removeFavorite = (id) => {
    const itemToRemove = favorites.find((item) => item.id === id);
    
    if (itemToRemove) {
      setFavorites(favorites.filter((item) => item.id !== id));
      toast.success(`${itemToRemove.title} removed from favorites!`);
    }
  };
  

  return (
    <div className="flex gap-6 p-16 bg-sky-100 min-h-screen">
      <div className="flex-1">
        <ActiveAuctionsHeader />
        <AuctionTable
          items={auctionItems}
          favorites={favorites}
          addToFavorites={addToFavorites}
        />
      </div>
      <FavoriteItemsSidebar
        favorites={favorites}
        removeFavorite={removeFavorite}
      />
      <ToastContainer position="top-right" autoClose={1000} />
    </div>
  );
}
