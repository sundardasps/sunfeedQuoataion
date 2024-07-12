import { Label } from 'flowbite-react'
import React from 'react'

function InputLabel({label,htmlFor}) {
  return (
    <>
    <Label htmlFor={htmlFor} className="block mb-2 text-sm font-medium   capitalize">{label}</Label>
    </>
  )
}

export default InputLabel
