import React from 'react';
import './App.css';

// List of random hotel names
const hotelNames = [
  "Grand Palace Hotel",
  "Sunrise Beach Resort",
  "City Lights Hotel",
  "Mountain View Inn",
  "Ocean Breeze Resort",
  "Luxury Stay Inn",
  "Royal Garden Hotel",
  "Silver Springs Hotel",
  "Majestic Heights",
  "The Sapphire Inn",
  "Golden Sands Resort",
  "Urban Escape Hotel"
];

const getRandomHotelName = () => {
  return hotelNames[Math.floor(Math.random() * hotelNames.length)];
};

const getRandomPrice = () => {
  return Math.floor(Math.random() * 201) + 100; // Generates random price between 100 and 300
};

const Gallery = ({ data }) => {
  return (
    <div className="gallery-container">
      {data.map((item) => (
        <div key={item.id} className="gallery-item">
          <img
            src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
            alt={item.title}
            className="gallery-image"
          />
          <div className="hotel-info">
            <h4>{getRandomHotelName()}</h4>
            <p>Price: ${getRandomPrice()}</p>
            <button className="buy-button">Book Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
