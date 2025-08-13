import React from 'react'

const Heading = ({as:Tag='h2',text,className}) => {
  return (
    <Tag className={className}>{text}</Tag>
  )
}

export default Heading