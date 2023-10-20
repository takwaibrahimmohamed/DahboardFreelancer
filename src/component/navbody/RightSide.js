import React from 'react'
import BoxesTop from './BoxesTop'
import BoxesBottom from './BoxesBottom'

const RightSide = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
      <BoxesTop/>
      <BoxesBottom/>
    </div>
  )
}

export default RightSide
