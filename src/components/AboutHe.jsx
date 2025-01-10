import React from 'react'

const AboutHe = () => {
  return (
    // <div style={{ position: "relative", width: "1px", height:"1150px", backgroundColor: "#EAEAEA" }} >
    <div style={{ position: "absolute", backgroundColor: "white", height: "745px", top: "328px", left: "177px", borderRadius: "20px" }}>
      <h1 className="font-semibold ml-8 mt-9 text-3xl" style={{ width: "632px", height: "81px", top: "390px", left: "213px", padding: "10px", gap: "10px" }}>
        ABOUT US
      </h1>
      <div style={{width:"649px",height:"380px",padding:"10px",gap:"10px",top:"497px"}}>
        <p style={{}} className='text-1xl leading-8 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div className='pt-9 flex justify-center'>
        <button 
          className="text-black font-medium text-xl pl-8 mr-8 inline-flex items-center" 
          style={{ backgroundColor: '#fcad35', height: '50px', width: '200px' }}>
          KNOW MORE
        </button>
        </div>
    </div>
//   </div>
  
  )
}

export default AboutHe