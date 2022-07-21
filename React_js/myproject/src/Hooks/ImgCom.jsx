import React,{useEffect} from 'react'

function ImgCom() {
  useEffect(()=>{
    console.log('ImgComp Component Mounted ');
    return ()=>{console.log('ImgComp Component Destroy ')}; 
},[]);
  return (
    <div>
        <img src="https://via.placeholder.com/600/24f355" style={{width:"100px"}} alt="" />
    </div>
  )
}

export default ImgCom