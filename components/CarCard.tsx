"use client"

import {useState} from 'react'
import Image from "next/image"
import { CarProps } from '@/types';
import  CustomButton  from './CustomButton';

interface CarCardProps {
    car:CarProps;
}

const CarCard = ({car}:CarCardProps) => {
    const {city_mpg,year,make,model,drive} = car;
  return (
    <div className='car-card group'>
        <div className="car-card__content">
            <h2 className ='car-card__content-title'>
                {make} {model}
            </h2>
        </div>

        <p>
            <span>
                {year}
            </span>
        </p>

        <div className='relative w-full h-40 my-3 object-contain'>
            <Image src='/tesla.png'  alt='caar moel' fill priority className='object-contain' />
        </div>
        
        

{/* Car Card bottom decorations */}
        {/* <div className="relative flwx w-full mt-2">
            <div className="flex group-hover:invisible w-full justify-between text-gray">
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src="/steering-wheel.svg" width={20} height={20} alt='steering wheel'/>
                    <p className='text-[14px]'>

                    </p>
                </div>
            </div>
        </div> */}

        
    </div>
  )
}

export default CarCard