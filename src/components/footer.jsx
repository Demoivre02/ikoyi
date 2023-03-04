import React from 'react'
import Image from '../shared/image'

function Footer() {
  return (
    <div style={{background: "rgba(255, 255, 255, 0.1)"}} className='h-[360px] mt-12'>
        <div className='flex w-[85%] mx-auto justify-between pt-20'>
        
            <div>
                <Image mysrc={'/assets/Hernalytics Full Logo Yellow@3x 1.png'} />
                <p className='font-[400] w-[90%] py-4 font-jost text-[16px] text-white'>Isale Eko Avenue, Dolphin Estate, Ikoyi, Lagos, Nigeria</p>
                <p className='font-[400] font-jost text-[16px] text-white'>© 2022 Hernalytics</p>
            </div>

            <div>
                <p className='font-[700] text-[16px] font-jost text-white'>About</p>
                <ul>
                    <li className='font-[400] cursor-pointer my-4 font-jost text-[16px] text-white'>Our Story</li>
                    <li className='font-[400] cursor-pointer my-4 font-jost text-[16px] text-white'>Blog</li>
                    <li className='font-[400] cursor-pointer my-4 font-jost text-[16px] text-white'>About Hernalytics</li>
                    <li className='font-[400] cursor-pointer my-4 font-jost text-[16px] text-white'>Videos</li>
                </ul>
            </div>

            <div>
                <p className='font-[700] text-[16px] font-jost text-white'>Support</p>
                <ul>
                    <li className='font-[400] cursor-pointer my-4 font-jost text-[16px] text-white'>FAQs</li>
                    <li className='font-[400] cursor-pointer my-4 font-jost text-[16px] text-white'>Privacy Policy</li>
                    <li className='font-[400] cursor-pointer my-4 font-jost text-[16px] text-white'>Terms of Service</li>
                </ul>
            </div>

            <div>
                <p className='font-[700] text-[16px] font-jost text-white'>Let's Chat!</p>
                <ul>
                    <li className='font-[400] cursor-pointer my-4 font-jost text-[16px] text-white'>hernalytics@gmail.com</li>
                    <li className='font-[400] cursor-pointer my-4 text-white '>+234 801 234 5678</li>
                    <li className='my-4 flex justify-between w-[70%] '>
                        <Image mysrc={"/assets/instagramm.png"} />
                        <Image mysrc={"/assets/twitter.png"} />
                        <Image mysrc={"/assets/watsapp.png"} />
                    </li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer