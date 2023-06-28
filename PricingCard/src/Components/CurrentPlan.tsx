import React from 'react'

const CurrentPlan = () => {
  return (
    <header className="text-white bg-red-600 flex flex-col gap-4 p-4 rounded-b-xl w-full h-[100px]">
        <p>Your current plan:</p>
        <h3 className="font-bold">Starter Trial * 500MAUs</h3>
    </header>
  )
}

export default CurrentPlan