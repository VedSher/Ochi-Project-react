import React, { Children } from 'react'

function Card(props) {
    const {children} = props
  return (
    <div>{children}</div>
  )
}

export default Card