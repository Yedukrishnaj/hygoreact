import { CarProps } from "@/types";

export async function fetchCars(){
    const headers = {
        'X-RapidAPI-Key': '7947629e65msh72a4d9e13b8cc3ep1e24f2jsncb0d0ba9cfb3',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch( 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers:headers,
    });

    const result = await response.json();

    return result;
    

}

export const generateCarImageUrl = (car:CarProps, angle?:string) =>{

}