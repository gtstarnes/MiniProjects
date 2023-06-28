import React from 'react';
import PriceCard from '../Components/PriceCard';

const Plans = () => {
  return ( 
    <main className="bg-[#000300] h-[88vh] w-full flex flex-col items-center pt-10 gap-6">
        <h1 className="font-bold text-3xl">Choose a plan</h1>
        <label>
            <span>Billed monthly</span>
            <input type="checkbox" value="" className="sr-only peer" checked></input>
            <span>Billed annually</span>
        </label>
        <PriceCard />
    </main>
  )
}

export default Plans