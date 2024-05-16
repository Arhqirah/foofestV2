'use client'
import React from 'react'
import FooForm from '@/app/components/form/FooForm'
import Divider from '@/app/components/Divider'
import FAQList from '@/app/components/FaqList'


function Form() {
  return (
    <div className='min-h-[80dvh]'>
      <FooForm></FooForm>
      <Divider></Divider>
      <FAQList></FAQList>
    </div>
  )
}

export default Form
