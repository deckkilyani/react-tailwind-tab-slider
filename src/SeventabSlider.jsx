// import React, { useState } from 'react'

// const SeventabSlider = () => {
//     const [slider, setSlider] = useState(1); 
//     return (
//         <div className='pt-12 mx-auto px-20 flex justify-center max-w-xl'>
//             <div className='h-8 w-full bg-gray-200 rounded relative'>
//                 <div className='w-full h-8 flex items-center justify-between'>
//                     <span className={`z-10 cursor-pointer  w-1/7 text-center h-full pt-1 ${slider===1 ? ' transition-all rounded-l text-white':'text-gray-800 hover:bg-gray-100'}`} onClick={() => setSlider(1)}>Tab1</span>
//                     <span className={`z-10  cursor-pointer w-1/7 text-center h-full pt-1 ${slider===2 ? ' transition-all  text-white':'text-gray-800 hover:bg-gray-100'}`} onClick={() => setSlider(2)}>Tab2</span>
//                     <span className={`z-10  cursor-pointer w-1/7 text-center h-full pt-1 ${slider===3 ? ' transition-all  text-white':'text-gray-800 hover:bg-gray-100'}`} onClick={() => setSlider(3)}>Tab3</span>
//                     <span className={`z-10  cursor-pointer w-1/7 text-center h-full pt-1 ${slider===4 ? ' transition-all  text-white':'text-gray-800 hover:bg-gray-100'}`} onClick={() => setSlider(4)}>Tab4</span>
//                     <span className={`z-10  cursor-pointer w-1/7 text-center h-full pt-1 ${slider===5 ? ' transition-all  text-white':'text-gray-800 hover:bg-gray-100'}`} onClick={() => setSlider(5)}>Tab5</span>
//                     <span className={`z-10  cursor-pointer w-1/7 text-center h-full pt-1 ${slider===6 ? ' transition-all  text-white':'text-gray-800 hover:bg-gray-100'}`} onClick={() => setSlider(6)}>Tab6</span>
//                     <span className={`z-10  cursor-pointer w-1/7 text-center h-full pt-1 ${slider===7 ? ' transition-all rounded-r text-white':'text-gray-800 hover:bg-gray-100'}`} onClick={() => setSlider(7)}>Tab7</span>
//                 </div>
//                 <span className={`bg-[#FF0078] h-8 w-1/7 absolute bottom-0 z-0 transition-all transform ${slider ===1 ? 'translate-x-0 rounded-l' : slider ===2 ?'translate-x-full': slider ===3 ? 'translate-x-[200%] ':slider===4 ?'translate-x-[300%] ': slider===5 ?'translate-x-[400%]': slider===6 ?'translate-x-[500%]' : slider===7 ? 'translate-x-[600%] rounded-r' : ''}`}></span>
//             </div>
//         </div>
//     )
// }

// export default SeventabSlider


import React, { useState } from 'react';

const SeventabSlider = () => {
    const [slider, setSlider] = useState(1);

    return (
        <div className='pt-12 mx-auto px-20 flex justify-center max-w-xl'>
            <div className='h-8 w-full bg-gray-200 rounded relative'>
                <div className='w-full h-8 flex items-center justify-between'>
                    {[1, 2, 3, 4, 5, 6, 7].map((tabNumber) => (
                        <span
                            key={tabNumber}
                            className={`z-10 cursor-pointer w-1/7 text-center h-full pt-1 ${
                                slider === tabNumber
                                    ? 'transition-all rounded-l text-white'
                                    : 'text-gray-800 hover:bg-gray-100'
                            }`}
                            onClick={() => setSlider(tabNumber)}
                        >
                            Tab{tabNumber}
                        </span>
                    ))}
                </div>
                <span
                    className={`bg-[#FF0078] h-8 w-1/7 absolute bottom-0 z-0 transition-all transform ${
                        slider === 1
                            ? 'translate-x-0 rounded-l'
                            : slider === 7
                            ? 'translate-x-[600%] rounded-r'
                            : `translate-x-[${(slider - 1) * 100}%]`
                    }`}
                ></span>
            </div>
        </div>
    );
};

export default SeventabSlider;
