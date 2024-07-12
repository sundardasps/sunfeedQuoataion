import { Label } from 'flowbite-react'
import React from 'react'

function FormTitle({label,htmlFor}) {
  return (
    <Label htmlFor={htmlFor} className="block mb-2 text-3xl font-extrabold text-center   capitalize">{label}</Label>
  )
}

export default FormTitle
