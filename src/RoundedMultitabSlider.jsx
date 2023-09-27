import React, { useState } from 'react'
import { generateSequentialNumbersArray } from './util';

const RoundedMultitabSlider = ({ numTabs }) => {
  const [slider, setSlider] = useState(1);

  return (
    <div className={`pt-12 mx-auto px-20 flex justify-center max-w-xl `}>
      <div className='h-8 w-full bg-gray-200 rounded-full relative'>
        <div className='w-full h-8 flex items-center justify-between'>
          {generateSequentialNumbersArray(numTabs).map((num) => {
            return (
              <span
                key={num}
                className={`z-10 cursor-pointer text-center h-full pt-1 w-1/${numTabs} ${slider === num
                    ? 'transition-all  text-white'
                    : 'text-gray-800 hover:bg-gray-100 rounded-full'
                  }`}
                onClick={() => setSlider(num)}
              >
                Tab{num}
              </span>
            )
          })}
        </div>
        <span
          className={`bg-[#FF0078] h-8 w-1/${numTabs} absolute bottom-0 z-0 transition-all transform rounded-full ${slider === 1
              ? 'translate-x-0'
              : slider === numTabs
                ? `translate-x-[${(numTabs -1) * 100}%]`
                : slider ===2 ? `translate-x-[100%]` :`translate-x-[${(slider - 1) * 100}%]`
            }`}
        ></span>
      </div>
    </div>
  );
}

export default RoundedMultitabSlider