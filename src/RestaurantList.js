import React from 'react';
import RestaurantCard from './RestaurantCard';

const mockRestaurants = [
  {
    id: 1,
    name: 'Pizza Palace',
    cuisine: 'Italian, Pizza',
    rating: 4.5,
    price_for_two: 500,
  },
  {
    id: 2,
    name: 'Burger Barn',
    cuisine: 'American, Burgers',
    rating: 4.2,
    price_for_two: 400,
  },
  {
    id: 3,
    name: 'Taco Town',
    cuisine: 'Mexican, Tacos',
    rating: 4.8,
    price_for_two: 300,
  },
];

const RestaurantList = () => {
  return (
    <div className="restaurant-list">
      {mockRestaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
