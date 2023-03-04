import React from 'react'
import Dropdown from './dropdown'

function Race() {

    let array = ["Pre-Election", "Election Day Live Updates", "Post-Election Analysis"]
    let array2 = ["Presidential", "Gobernitorial", "Senate" , "Hose of Representatives"]
    let array3 = [2023,2019,2015,2011,2007,2003,1999,1995,1991,1987]

  return (
    <div className='w-[86%] mt-9 mx-auto flex justify-between'>
        <p className='text-[24px] font-jost font-[500] text-white'> Presidential Race</p>

        <div className='flex gap-[10px]'>
            <Dropdown myarray={array} name="Election Data"  />
            <Dropdown myarray={array2} name="Presidential"  />
            <Dropdown myarray={array3} name="2023"  />
        </div>

    </div>
  )
}

export default Race