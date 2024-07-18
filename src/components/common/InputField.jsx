import { TextInput } from 'flowbite-react'
import React from 'react'

function InputField({name,placeholder,required,value,type,onChange,onBlur,disabled}) {
  return (
   //when need auto dark and light mood , need to remove /color="primary"/
    <TextInput  onChange={onChange} onBlur={onBlur} type={type} name={name} value={value} disabled={disabled} id="password" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full "   placeholder={placeholder} required={required} />

  )
}

export default InputField
