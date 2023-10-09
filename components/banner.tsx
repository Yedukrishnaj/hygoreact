"use client";

import React from 'react';
import Image from "next/image";

const Banner = ({ carsForSale, visitorsPerDay, dealerReviews, verifiedDealers }:{ carsForSale:number, visitorsPerDay:number, dealerReviews:number, verifiedDealers:number }) => {
    return (
      <div className="banner">
        <div className="banner-image"></div>
        <div className="banner-content">
          <div className="banner-item">
            <h3>{carsForSale}</h3>
            <p>Cars for Sale</p>
          </div>
          <div className="banner-item">
            <h3>{visitorsPerDay}</h3>
            <p>Visitors per Day</p>
          </div>
          <div className="banner-item">
            <h3>{dealerReviews}</h3>
            <p>Dealer Reviews</p>
          </div>
          <div className="banner-item">
            <h3>{verifiedDealers}</h3>
            <p>Verified Dealers</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;

  
  