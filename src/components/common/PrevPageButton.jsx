import { Button } from 'flowbite-react'
import { ArrowLeft } from 'flowbite-react-icons/outline'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function PrevPageButton({route}) {
    const navigate = useNavigate()
  return (
    <Button onClick={()=>navigate(route)} className='w-10 h-10 rounded-full bg-[#65AC32]'><ArrowLeft className='w-5 h-5'/></Button>
  )
}

export default PrevPageButton
