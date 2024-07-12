import React from 'react'
import InputLabel from '../common/InputLabel'
import InputField from '../common/InputField'
import { Button } from 'flowbite-react'
import FieldTitle from '../common/FieldTitle'
import { ChooseFile } from '../common/ChooseFile'
import FileUploade from '../common/FileUpload'
import { ArrowRight } from 'flowbite-react-icons/outline'
import { useNavigate } from 'react-router-dom'
import FormTitle from '../common/FormTitle'
import { useFormik } from 'formik'
import { company_information, company_informationSchema } from '../../yup/step2'
import ErrorMssgField from '../common/ErrorMssgField'
import { useDispatch } from 'react-redux'
import { company_informationUpdate } from '../../redux/slice'

function Step2() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { errors, handleBlur, handleChange, values, touched, handleSubmit } =
  useFormik({
    initialValues:company_information ,
    validationSchema: company_informationSchema,
    onSubmit: async (values) => { 
      alert()
      dispatch(company_informationUpdate(values));
      navigate('/step3')
    },
  });

  return (
    <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4 w-full rounded-md border-2 p-5 space-y-2 bg-[#F8F8F8] border-[#65AC32]">
       <FormTitle label="Company information" />
       <div>
          <div className="mb-2 block">
            <InputLabel label="Company Name" />
          </div>
          <InputField value={values.company_name} name="company_name" onBlur={handleBlur} onChange={handleChange}  />
          {errors.company_name && touched.company_name && (
            <ErrorMssgField errorMessage={errors.company_name} />
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Address Headquarters " />
          </div>
          <InputField value={values.address_headquarters} name="address_headquarters" onBlur={handleBlur} onChange={handleChange}  />
          {errors.address_headquarters && touched.address_headquarters && (
            <ErrorMssgField errorMessage={errors.address_headquarters} />
          )}
        </div>
      <div>
          <div className="mb-2 block">
            <InputLabel label="City " />
          </div>
          <InputField value={values.city} name="city" onBlur={handleBlur} onChange={handleChange}  />
          {errors.city && touched.city && (
            <ErrorMssgField errorMessage={errors.city} />
          )}
        </div>
      <div>
          <div className="mb-2 block">
            <InputLabel label="Postal Code" />
          </div>
          <InputField value={values.postal_code} name="postal_code" onBlur={handleBlur} onChange={handleChange}  />
          {errors.postal_code && touched.postal_code && (
            <ErrorMssgField errorMessage={errors.postal_code} />
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Country" />
          </div>
          <InputField value={values.country} name="country" onBlur={handleBlur} onChange={handleChange}  />
          {errors.country && touched.country && (
            <ErrorMssgField errorMessage={errors.country} />
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Phone Number (Office)" />
          </div>
          <InputField value={values.phone_number_office} name="phone_number_office" onBlur={handleBlur} onChange={handleChange}  />
          {errors.phone_number_office && touched.phone_number_office && (
            <ErrorMssgField errorMessage={errors.phone_number_office} />
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Phone Number (Mobile)" />
          </div>
          <InputField value={values.phone_number_mobile} name="phone_number_mobile" onBlur={handleBlur} onChange={handleChange}  />
          {errors.phone_number_mobile && touched.phone_number_mobile && (
            <ErrorMssgField errorMessage={errors.phone_number_mobile} />
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Email" />
          </div>
          <InputField value={values.email} name="email" onBlur={handleBlur} onChange={handleChange}  />
          {errors.email && touched.email && (
            <ErrorMssgField errorMessage={errors.email} />
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Company VAT Number" />
          </div>
          <InputField value={values.company_vat_number} name="company_vat_number" onBlur={handleBlur} onChange={handleChange}  />
          {errors.company_vat_number && touched.company_vat_number && (
            <ErrorMssgField errorMessage={errors.company_vat_number} />
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="IBAN Number" />
          </div>
          <InputField value={values.iban_number} name="iban_number" onBlur={handleBlur} onChange={handleChange}  />
          {errors.iban_number && touched.iban_number && (
            <ErrorMssgField errorMessage={errors.iban_number} />
          )}
        </div>
        <div>
          <div className="mb-2 block">
          <FieldTitle label={"Annual Numbers Report"} htmlFor={"Annual Numbers Report"}/>
          </div>
          <ChooseFile/>
        </div>
        <div>
          <div className="mb-2 block">
          <FieldTitle label={"Annual Numbers Report"} htmlFor={"ID Recto and Verso 2 Link"}/>
          </div>
          <ChooseFile/>
        </div>
        <div>
          <div className="mb-2 block">
          <FieldTitle label={"Annual Numbers Report"} htmlFor={"Construction Permit"}/>
          </div>
          <ChooseFile/>
        </div>
        <div>
          <div className="mb-2 block">
          <FieldTitle label={"Annual Numbers Report"} htmlFor={"Electricity Bill (last 12 months)"}/>
          </div>
          <FileUploade/>
        </div>
        <Button  className='bg-[#65AC32]' type="submit" >Next <ArrowRight /> </Button>
    </form>
  )
}

export default Step2
