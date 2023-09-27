import React, { useState } from 'react'

const TabSlider = () => {

    const [slider, setSlider] = useState(false)
    return (
        <div className='pt-20 mx-auto px-20 flex justify-center max-w-xl'>
            <div className='h-8 w-full bg-gray-200 rounded relative'>
                <div className='w-full h-8 flex items-center justify-between'>
                    <span className={`z-10 cursor-pointer text-center h-full  pt-1 w-1/2 ${slider ? 'hover:bg-gray-100 transition-all rounded-l text-gray-800':'text-white'}`} onClick={() => setSlider(false)}>Tab1</span>
                    <span className={`z-10  cursor-pointer w-1/2 text-center  h-full pt-1 ${!slider ? 'hover:bg-gray-100 transition-all rounded-r text-gray-800':'text-white'}`} onClick={() => setSlider(true)}>Tab2</span>
                </div>
                <span className={`bg-[#FF0078] h-8 w-1/2 absolute bottom-0 z-0 transition-all transform ${slider ? ' translate-x-full rounded-r' : '-translate-x-0 rounded-l'}`}></span>
            </div>
        </div>
    )
}

export default TabSlider