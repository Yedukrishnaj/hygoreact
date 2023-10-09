"use client"

import {useState} from 'react'
import Image from "next/image"
import { CarProps } from '@/types';
import  CustomButton  from './CustomButton';
import { Vehicle } from '@/constants'
import { link } from 'fs';

interface CarCardProps {
    car:CarProps;
}

const VehicleCard = ({ Vehicle }:{ Vehicle: string }) => {
    return (
      <div className='car-card group'>
        <div className="car-card__content">
          <h2 className='car-card__content-title'>{Vehicle}</h2>
        </div>
  
        <div className='relative w-full h-40 my-3 object-contain'>
          <Image src={`/${Vehicle}.png`} alt={`${Vehicle} model`} fill priority className='object-contain' />
        </div>
      </div>
    );
  };
        
        

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

        

export default VehicleCard