import React, { useContext } from 'react'
import { userContext } from '../App'

const Blog = () => {
  const data = useContext(userContext)
  return (
    // <userContext.Consumer>
    //   {
    //     (n => {
    //       return <p>{n}</p>
    //     })
    //   }
    // </userContext.Consumer>
     <p>{data}</p>
  )
}

export default Blog