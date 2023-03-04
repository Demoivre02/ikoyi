import React,{useState,useEffect} from 'react'
import Image from '../shared/image'
import { Icon } from '@iconify/react';

function Nav() {

    const comm=[ 
        {id:1, name: "General User",text: "A town hall different from balablue",icon: <Icon icon="ri:user-fill" color="##00344D" width="30" />},
        {id:2, name: "Election Candidate",text: "A town hall different from balablue",icon: <Icon icon="akar-icons:people-group" color="##00344D" width="30" />},
        {id:3, name: "Decide To  Run (DRT)",text: "A town hall different from balablue",icon:<Icon icon="mdi:head-idea" color="##00344D" width="30" />},
        {id:4, name: "Reporters",text: "A town hall different from balablue", icon:<Icon icon="entypo:modern-mic" color="##00344D" width="30" />}
    ]

    const [open,setOpen] = useState(false)
    const [open2,setopen2] = useState(false)

    
  return (
    <div className='relative'>
        <div className=' flex w-[95%] justify-evenly mx-auto items-center pt-6'>

            <Image mysrc={'/assets/Hernalytics Full Logo Yellow@3x 1.png'} />
            <p className='cursor-pointer font-jost text[14px] font-[600] font-jost text-[#fff]' >About Us</p>

            <div  onClick={(()=> setOpen(!open))} className='flex items-center cursor-pointer'>
                <p className='cursor-pointer font-jost text[14px] font-[600] font-jost text-[#fff] mx-2 ' >Our Communities</p>
                <Icon icon="material-symbols:arrow-drop-down-sharp" color="#c6c7cb" width="30" />
            </div>

            <div onClick={()=> setopen2(!open2)} className='flex items-center cursor-pointer' >
                <p className='cursor-pointer font-jost text[14px] font-[600] font-jost text-[#fff] mx-2 ' >Election Data</p>
                <Icon icon="material-symbols:arrow-drop-down-sharp" color="#c6c7cb" width="30" />
            </div>

            <p className='cursor-pointer font-jost text[10px] font-[600] font-jost text-[#fff]' >E-BUDDY</p>
            <p className='cursor-pointer font-jost text[10px] font-[600] font-jost text-[#fff]' >VEO PLATFORM</p>
            <p className='cursor-pointer font-jost text[14px] font-[600] font-jost text-[#fff] cursor-pointer' >Login</p>
            <button className='py-[12px] px-[32px] w-[129px] h-[47px] font-[600] font-jost text-[14px] bg-[#E5B805] rounded-[4px] hover:bg-[#fff] hover:text-[#E5B805]'>SIGN UP</button>
        </div>

        <div style={{display : open ? "grid": "none"}} className='bg-[#ffffff] grid grid-cols-2 w-[600px] z-[1] absolute ml-[33em] p-4 transition-all'>
                {
                    comm.map((x)=>{
                        return <div key={x.id} className='flex justify-center items-center mx-2 my-4' >
                            <div className='w-[40px] h-[40px] bg-[#64CCFF] rounded-[8px] flex  justify-center items-center '>
                                {x.icon}
                            </div>
                            <div className='ml-2'>
                                <p className='font-jost text-[16px] font-[600] text-[#00344D]'>{x.name}</p>
                                <p className='font-jost text-[14px] text-[#00344D]'>{x.text}</p>
                            </div>
                        </div>
                    })
                }
        </div>

        <div style={{display : open2 ? "block" : "none"}} className='absolute ml-[47em] z-[1] bg-[#fff] px-4'>
            <p className=' my-4 font-jost text-[18px] text-[#00344D]'>Election Day Live Updates</p>
            <p className=' my-4 font-jost text-[18px] text-[#00344D]'>Post-Election Analysis</p>
        </div>

    </div>
  )
}

export default Nav