import React from 'react'

export const PrimaryButton = ({label}) => {
  return (
    <button type='button' className='w-full h-full capitalize rounded-[5.91px] font-[400] text-white btn-font flex justify-center items-center'>
        {label}
    </button>
  )
}
