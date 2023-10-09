"use client";


import Image from "next/image";
import  CustomButton  from "./CustomButton";

const Hero = () => {
    const handleScroll = () => {
        const nextSection = document.getElementById("discover");
    };    
  return (
    <div className="hero">
        <div className="flex-1 pt-40 padding-x">
            <h1 className="hero__title">
                Find Your Next EV on the Largest Electric Vehicle directory in the World
            </h1>
            <CustomButton
          title="Browse By Make"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
        {/* <CustomButton
          title="Browse By Type"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        /> */}
        </div>
        <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain"  />
        </div>
        <div className="hero__image-overlay" />
        </div>
        
    </div>
  )
}

export default Hero;