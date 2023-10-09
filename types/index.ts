import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
  }

export interface SearchManufacturerProps{
  manufacturer:string;
  setManufacturer:(manufacturer:string) => void;
}

export interface CarProps {
city_mpg:number;
class:string;
combination_mpg:number;
displacement:number;
drive:"fwd";
highway_mpg:number;
make:string;
model:string;
year:number
}