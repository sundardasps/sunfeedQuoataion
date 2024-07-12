import React from 'react'
import InputField from '../common/InputField'
import InputLabel from '../common/InputLabel'
import { Button, Checkbox, Label } from 'flowbite-react'
import { ArrowRight } from 'flowbite-react-icons/outline'
import { useNavigate } from 'react-router-dom'
import FormTitle from '../common/FormTitle'
import FieldTitle from '../common/FieldTitle'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { financial_statementUpdate } from '../../redux/slice'
import { financial_statement, financialStatementSchema } from '../../yup/step5'
import ErrorMssgField from '../common/ErrorMssgField'

function Step5() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { errors, handleBlur, handleChange, values, touched, handleSubmit } =
    useFormik({
      initialValues:financial_statement ,
      validationSchema: financialStatementSchema,
      onSubmit: async (values) => { 
        dispatch(financial_statementUpdate(values));
        navigate('/reportoverview')
      },
    });
  return (
    <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4 w-full rounded-md border-2 p-5 space-y-2 bg-[#F8F8F8] border-[#65AC32]">
      <FormTitle label="Financial Statement" />
        <FieldTitle label="Payment method"/>
      <div className="flex gap-4 justify-between items-end">
        <div className="w-2/3 ">
        <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Full Payment</Label>
      </div>
        </div>
        <div className="w-2/3 ">
        <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Monthly Instalments</Label>
      </div>
        </div>
      </div>

      <div className="flex gap-4 justify-between items-end ">
        <div className="w-1/2 ">
          <div className="flex justify-start items-start t  gap-1 ">
          <InputLabel label="No. Of Months" /> 
          </div>
          <div className='flex w-min border-2 rounded-xl'>
          <Button  className='rounded-r-none bg-slate-200 text-black '>-</Button>
          <input type="text" className='w-10 border-none text-center ' />
          <Button  className='rounded-l-none bg-slate-200 text-black'>+</Button>
          </div>
        </div>
        <div className="w-1/2">
        <div className="flex justify-start items-start gap-1   ">
          <InputLabel label="Rate Of Interest " /> 
          </div>
          <div className='flex w-min border-2 rounded-xl'>
          <Button  className='rounded-r-none bg-slate-200 text-black '>-</Button>
          <input type="text" className='w-10 border-none text-center' />
          <Button  className='rounded-l-none bg-slate-200 text-black'>+</Button>
          </div>
        </div>
      </div>


      <div>
          <div className="mb-2 block">
            <InputLabel label="Deposit " />
          </div>
          <InputField value={values.deposit} name="deposit" onBlur={handleBlur} onChange={handleChange}  />
          {errors.deposit && touched.deposit && (
            <ErrorMssgField errorMessage={errors.deposit} />
          )}
        </div>
      <div>
          <div className="mb-2 block">
            <InputLabel label="Monthly Payment" />
          </div>
          <InputField value={values.monthly_payment} name="monthly_payment" onBlur={handleBlur} onChange={handleChange}  />
          {errors.monthly_payment && touched.monthly_payment && (
            <ErrorMssgField errorMessage={errors.monthly_payment} />
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Down Payment" />
          </div>
          <InputField value={values.down_payment} name="down_payment" onBlur={handleBlur} onChange={handleChange}  />
          {errors.down_payment && touched.down_payment && (
            <ErrorMssgField errorMessage={errors.down_payment} />
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Total Payment" />
          </div>
          <InputField value={values.total_payment} name="total_payment" onBlur={handleBlur} onChange={handleChange}  />
          {errors.total_payment && touched.total_payment && (
            <ErrorMssgField errorMessage={errors.total_payment} />
          )}
        </div>
        
      <Button  className='bg-[#65AC32]' type="submit" >Next <ArrowRight /> </Button>
    </form>
  )
}

export default Step5
