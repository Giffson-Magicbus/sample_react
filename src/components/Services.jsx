import React from 'react'
import { useParams } from 'react-router-dom'


const Services = () => {
    const {tool} = useParams()
  return (
    <div>Services
        <h1>{tool}</h1>
    </div>
  )
}

export default Services