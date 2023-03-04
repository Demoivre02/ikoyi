import React , {useState}  from 'react'

function Map1() {
    const [width, setWudth]=useState(965)
    const maxWidth = "1050px"
    const party =  [
        {id:1, name:"APC",color:"#64CCFF"},
        {id:2, name:"PDP" , color: "#0AA83F"},
        {id:3, name:"LP", color:"#D62B3C"}
    ]

    function addWidth(){
        setWudth( width + 50)
    }

    function removeWidth(){
        setWudth(width - 50)
    }

  return (
    <div className='bg-[#1B1F30] border-[1px] rounded-[13px] border-[#393C4A] w-[85%] mx-auto  relative '>

        <div  className='ml-[5em] h-[787px] p-0 m-0 relative overflow-y-scroll'>
           <img title='press + to zoom in'  style={{minWidth: width,maxWidth:maxWidth}} className='' src='/assets/Frame.png' width={width} />
        </div>

        <div className='absolute top-0 right-0 mr-12 mt-12'>
            <button onClick={addWidth} className='bg-white text-[34px] flex mb-2 items-center justify-center text-[#666666] w-[38px] h-[38px] rounded-t-sm'>+</button>
            <button onClick={removeWidth} className='bg-white text-[34px] rounded-b-[4px] flex items-center justify-center text-[#666666] w-[38px] h-[38px]'>-</button>
        </div>

        <div className='absolute bottom-0 right-0 mr-12 mb-12'>
            {
                party.map((x,y)=>{
                    return <div key={x.id} className="flex mt-4">
                        <div title={x.name} style={{backgroundColor: x.color}} className='w-[32px] h-[24px]'></div>
                        <p className='text-[#57656B] text-[14px] font-[500] font-jost ml-4'>{x.name}</p>
                    </div>
                })
            }
        </div>

        
    </div>
  )
}

export default Map1