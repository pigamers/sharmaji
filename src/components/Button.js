import React from 'react'

const Button = (props) => {
  return (
    <button className=' bg-three font-fonty mt-3 md:m-0 ml-2 py-2 px-6 rounded md:ml-8 hover:bg-four hover:text-two duration-100'>
      {props.children}
    </button>
  )
}

export default Button