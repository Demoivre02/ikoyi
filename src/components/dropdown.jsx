import React,{useState} from 'react'
import { Icon } from '@iconify/react';

function Dropdown({myarray,name}) {

   
    const [open,setopen] = useState(false)
    
  return (
    <div className='relative'>

        <div onClick={(()=> setopen(!open))} className='bg-[#1C2031] rounded-[6px] border-[1px] border-[#252B46] h-[46px] w-[250px] flex items-center justify-between px-2 cursor-pointer'>
            <p className='text-[14px] font-[400] font-jost text-[#C6C7CB] pl-2'>{name}</p>
            <Icon icon="ic:baseline-keyboard-arrow-down" color='#C6C7CB' width="25" />
        </div>

        <div className='absolute w-[100%] z-[1]' style={{display: open ? "block" : "none"}}>
            {
                myarray.map((x,y)=>{
                    return <div key={y} className='bg-[#1C2031]'>
                        <p className='text-[16px]  border-[#f1f1f1]  font-[400] font-jost text-[#C6C7CB] py-2 pl-4 border-[90%]'>{x}</p>
                    </div>
                })
            }
        </div>

    </div>
  )
}

export default Dropdown