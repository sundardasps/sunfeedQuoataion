import { Label } from 'flowbite-react'
import React from 'react'

function FieldTitle({label,htmlFor}) {
  return (
    <Label htmlFor={htmlFor} className="block mb-2 text-2xl font-bold    capitalize">{label}</Label>
  )
}

export default FieldTitle
