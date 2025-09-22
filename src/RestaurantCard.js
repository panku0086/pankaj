import React from 'react';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <img src="https://via.placeholder.com/150" alt={restaurant.name} />
      <div className="restaurant-details">
        <h2>{restaurant.name}</h2>
        <p>{restaurant.cuisine}</p>
        <div className="restaurant-info">
          <span>{restaurant.rating} ★</span>
          <span>₹{restaurant.price_for_two} FOR TWO</span>
        </div>
        <div className="restaurant-actions">
          <button>Order Online</button>
          <button>Book a Table</button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
