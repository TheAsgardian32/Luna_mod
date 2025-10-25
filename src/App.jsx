import React from 'react'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'

const App = () => {
  return (
    <>
      <div className=" flex my-10 mx-auto p-10 gap-10 bg-[#282d32] min-h-screen">
        <div className='bg-[#565758] w-1/2 rounded-xl flex justify-center items-center text-white text-[40px]'>
          Empty Space
        </div>
        <div className='flex flex-col gap-2 w-1/2'>
          <div>
            <Comp1/>
            <div className="w-full h-1 rounded-sm my-4 bg-linear-to-r from-white/15 to-white/5 shadow-[0_1px_2px_rgba(0,0,0,0.6),inset_0_1px_rgba(255,255,255,0.1)] mt-5" />
          </div>
          
          <div >
            <Comp2/>
            <div className="w-full h-1 rounded-sm my-4 bg-linear-to-r from-white/15 to-white/5 shadow-[0_1px_2px_rgba(0,0,0,0.6),inset_0_1px_rgba(255,255,255,0.1)] mt-5" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App