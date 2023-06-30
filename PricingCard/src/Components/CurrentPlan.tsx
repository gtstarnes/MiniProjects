import React from 'react'

const CurrentPlan = () => {
  return (
    <header className="text-white bg-red-600 mx-auto flex  flex-col gap-2 p-2 rounded-b-xl w-full h-[120px] items-center justify-center md:max-w-[500px]">
        <p>Your current plan:</p>
        <h3 className="font-bold text-xl">Starter Trial • 500MAUs</h3>
    </header>
  )
}

export default CurrentPlan