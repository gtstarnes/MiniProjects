import React from 'react';
import { useState } from 'react'

const Toggle = () => {
    const [toggle, setToggle] = useState(true)

    const handleToggle = () => {
        setToggle(!toggle)
    }

  return (
    <div>        
    <label className="relative inline-flex items-center gap-2 ">
        <span>Billed monthly</span>
        <input type="checkbox" onClick={handleToggle} className="sr-only peer " checked={toggle} />
        <div className={`w-12 h-6 rounded-full ${toggle ? 'bg-red-500' : 'bg-[#202020]'} transition-colors duration-300` }></div>
        <div className={`absolute w-6 h-6 bg-white rounded-full inset-y-0 left-[110px] cursor-pointer" ${toggle ? 'translate-x-6' : 'translate-x-0'} transition-transform duration-300`}></div>
        <span>Billed annually</span>
    </label>

    </div>
  )
}

export default Toggle