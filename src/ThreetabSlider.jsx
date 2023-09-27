import React, { useState } from 'react'

const ThreetabSlider = () => {

    const [slider, setSlider] = useState(1)
    return (
        <div className='pt-12 mx-auto px-20 flex justify-center max-w-xl'>
            <div className='h-8 w-full bg-gray-200 rounded relative'>
                <div className='w-full h-8 flex items-center justify-between'>
                    <span className={`z-10 cursor-pointer text-center h-full  pt-1 w-1/3 ${slider===1 ? ' transition-all rounded-l text-white':'text-gray-800 hover:bg-gray-100'}`} onClick={() => setSlider(1)}>Tab1</span>
                    <span className={`z-10  cursor-pointer w-1/3 text-center  h-full pt-1 ${slider===2 ? ' transition-all rounded-r text-white':'text-gray-800 hover:bg-gray-100'}`} onClick={() => setSlider(2)}>Tab2</span>
                    <span className={`z-10  cursor-pointer w-1/3 text-center  h-full pt-1 ${slider===3 ? ' transition-all rounded-r text-white':'text-gray-800 hover:bg-gray-100'}`} onClick={() => setSlider(3)}>Tab3</span>
                </div>
                <span className={`bg-[#FF0078] h-8 w-1/3 absolute bottom-0 z-0 transition-all transform ${slider ===1 ? 'translate-x-0 rounded-l' : slider ===2 ?'translate-x-full': slider ===3 ? 'translate-x-[200%] rounded-r':''}`}></span>
            </div>
        </div>
    )
}

export default ThreetabSlider