import React from 'react'
import Doughnut from './doughnut'
import Image from '../shared/image'
import { Icon } from '@iconify/react';


function Flex() {

    const party =  [
        {id:1, name:"North East",color:"#449352"},
        {id:2, name:"North West" , color: "#6D769D"},
        {id:3, name:"North Central", color:"#A163BE"},
        {id:4, name:"South West", color:"#E30325"},
        {id:5, name:"South South", color:"#2249D1"},
        {id:6, name:"South East", color:"#018796"}
    ]

  return (
    <div className='w-[85%] mx-auto mt-8 flex gap-[50px] bg-[#1B1F30] justify-center rounded-[13px] py-4'>
        <div className='bg-[#1B1F30] w-[380px] border-[1px] border-[#272935] rounded-[13px] flex items-center'>
            <Doughnut />
        </div>
        <div className='bg-[#1B1F30] w-[523px] border-[1px] border-[#272935] rounded-[13px] flex pt-[4em] pl-6 justify-between '> 
            {/* <p className='font-jost text-[14px] font-[400] text-white'>CANDIDATES BY GEOPOLITICAL ZONES</p> */}
            <Image mysrc={"/assets/fram2.png"} /> 
            <div className='mt-[4em]  mr-4'>
                {
                    party.map((x,y)=>{
                        return <div key={x.id} className="mt-2 flex">
                            <div className='flex'>
                                <div  style={{backgroundColor: x.color}} title={x.name} className='w-[24px] h-[14px]'></div>     
                                <p className='text-[#fff] text-[12px] font-[500] font-jost ml-2 '>{x.name}</p>
                            </div>
                            
                            <div className=''>
                                <p className='text-[#57656B] text-[12px] font-[500] font-jost ml-4 opacity-[.7] float-right' >3,000</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>

        <div className='bg-[#1B1F30] w-[264px] border-[1px] border-[#272935] rounded-[13px] flex pt-[4em] justify-center '>
        <div>
            <p className='font-[400] text-[14px] text-white'>TOTAL ELECTED MEMBERS</p>
            <p className='text-[20px] font-[700] text-[#fff] font-jost'>10,000</p>
            <div className='my-6'>
                <div className='flex items-center '>
                    <p className='font-[400] text-[14px] text-white'>Male</p>
                    <Icon icon="material-symbols:male" color="#e5b805" width="15" />
                </div>
                <p className='text-[20px] font-[700] text-[#fff] font-jost'>9,000</p>
            </div>


            <div className='flex items-center'>
                <p className='font-[400] text-[14px] text-white'>female</p>
                <Icon icon="material-symbols:female" color="#e5b805" width="15" />
            </div>
            <p className='text-[20px] font-[700] text-[#fff] font-jost'>1,000</p>

        </div>

        </div>

    </div>
  )
}

export default Flex