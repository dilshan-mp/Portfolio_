import { animate } from 'framer-motion'
import React from 'react'

const stairAnimation = {
    initial:{
        top:"0%",
    },
    animate:{
        top:"100%",
    },
    exit:{
        top:["100%","0%"]
    }
}

const Stairs = () => {
  return <div>stairs</div>
}

export default Stairs
