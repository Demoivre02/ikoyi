import React,{ useState }  from 'react'  
import Nav from './components/nav'
import Race from './components/race'
import Map1 from './components/map1'
import Flex from './components/flex'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-[#1F2335]  ">
      <Nav/>

      <div className='w-[86%] mx-auto flex items-center mt-6'>
        <p className='font-[700] text-[30px] text-[30px] text-[#fff]'>Post Election Data</p>
        <div className='bg-[#181C2E] rounded-[4px] border border-[#242B47] w-[170px] px-4 ml-4'>
          <p className='font-[500] text-[14px] text-[#fff] font-jost'>PRESIDENTIAL / 2023</p>
        </div>
      </div>

      <Race/>
      <div className='border-t-[1px] border-[#393C4A] w-[85%] mx-auto my-8'></div>
      <Map1 />
      <Flex/>
      <Footer />

    </div>
  )
}

export default App
