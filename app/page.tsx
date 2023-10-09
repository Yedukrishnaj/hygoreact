
import { CarCard, CustomFilter, Hero, SearchBar, VehicleCard } from '@/components'
import Banner from '@/components/banner';
import { Vehicle } from '@/constants';
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home() {
const allCars = await fetchCars();

const isDataEmpty = !Array.isArray(allCars) || allCars.length<1 || !allCars;
const carsForSale = 1000;
  const visitorsPerDay = 5000;
  const dealerReviews = 1200;
  const verifiedDealers = 50;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width " id='discover'>
        <div className="home__text-container">
          <h1 className='text-4xl font-extrabold'>Vehicle Catalogue</h1>
          <p>Explore the e-vehicles you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          {/* <div className='home__filter-container'>
            <CustomFilter title='country' />
            <CustomFilter title='year' />
          </div> */}
        </div>

      {!isDataEmpty ? (
        <section>
          {/* <div className='home__cars-wrapper'>
            {allCars?.map((car) => (
              <CarCard car={car} />
            ))}
          </div> */}
          <div className="home__cars-wrapper">
          
      {Vehicle.map((Vehicle, index) => (
        <VehicleCard key={index} Vehicle={Vehicle} />
      ))}
    
          </div>

        </section>
      ):(
        <div className='home__error-container'>
          <h2 className='text-black text-xl font-bold'>Oops,no results</h2>
          <p>{allCars?.message}</p>
        </div>
      )}
      </div>
      <div>
      <Banner
        carsForSale={carsForSale}
        visitorsPerDay={visitorsPerDay}
        dealerReviews={dealerReviews}
        verifiedDealers={verifiedDealers}
      />
      
    </div>
    </main>
    
  )
}
