import React from 'react'
import FormTitle from '../common/FormTitle'
import InputLabel from '../common/InputLabel'
import InputField from '../common/InputField'
import { Button } from 'flowbite-react'
import GoogleMap from '../common/GoogleMap'
import FileUploade from '../common/FileUpload'
import PrevPageButton from '../common/PrevPageButton'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import ErrorMssgField from '../common/ErrorMssgField'
import { construction_site, constructionSiteSchema } from '../../yup/step3'
import {  construction_siteUpdate } from '../../redux/slice'
function Step3() {
  const navigate = useNavigate() 
  const dispatch = useDispatch()

  const { errors, handleBlur, handleChange, values, touched, handleSubmit } =
  useFormik({
    initialValues:construction_site ,
    validationSchema: constructionSiteSchema,
    onSubmit: async (values) => { 
      alert()
      dispatch(construction_siteUpdate(values));
      navigate('/step4')
    },
  });

  return (
    <div className='w-full m-5 py-5 bg-[#F8F8F8] rounded-md border-2 border-[#65AC32]  '>
      
    <form  className=" md:flex justify-evenly  w-full    ">
    <div className='w-full md:w-1/3'>
    <FormTitle label="Construction Site Information" />
    <div>
       <div className="mb-2 block">
         <InputLabel label="Name of the Site" />
       </div>
        <InputField value={values.name_of_site} name="name_of_site" onBlur={handleBlur} onChange={handleChange}  />
          {errors.name_of_site && touched.name_of_site && (
            <ErrorMssgField errorMessage={errors.name_of_site} />
          )}
     </div>
     <div>
       <div className="mb-2 block">
         <InputLabel label="Address " />
       </div>
       <InputField value={values.address} name="address" onBlur={handleBlur} onChange={handleChange}  />
          {errors.address && touched.address && (
            <ErrorMssgField errorMessage={errors.address} />
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
         <InputLabel label="Zip Code" />
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
         <InputLabel label="Site Director Email" />
       </div>
       <InputField value={values.sitedirector_email} name="sitedirector_email" onBlur={handleBlur} onChange={handleChange}  />
          {errors.sitedirector_email && touched.sitedirector_email && (
            <ErrorMssgField errorMessage={errors.sitedirector_email} />
          )}
     </div>
     <div>
       <div className="mb-2 block">
         <InputLabel label="Phone Number (Office)" />
       </div>
       <InputField value={values.phone_office} name="phone_office" onBlur={handleBlur} onChange={handleChange}  />
          {errors.phone_office && touched.phone_office && (
            <ErrorMssgField errorMessage={errors.phone_office} />
          )}
     </div>
     <div>
       <div className="mb-2 block">
         <InputLabel label="Phone Number (Mobile)" />
       </div>
       <InputField value={values.phone_mobile} name="phone_mobile" onBlur={handleBlur} onChange={handleChange}  />
          {errors.phone_mobile && touched.phone_mobile && (
            <ErrorMssgField errorMessage={errors.phone_mobile} />
          )}
     </div>
    </div>
    <div className='w-full md:w-2/4 mt-5'>
    <FormTitle label="Location Information" />
    <GoogleMap/>
    <div>
      <div className="mb-2 block">
          <InputLabel label="Site Video" />
          </div>
          <FileUploade/>
      </div>
      <div>
      <div className="mb-2 block">
            <InputLabel label="Site Images" />
          </div>
          <FileUploade/>
          
      </div>
      {/* <Camera /> */}
    </div>
 </form>
 <div className='flex justify-center my-5'>
  <Button  className='bg-[#65AC32]' onClick={handleSubmit}  >Add Site</Button>
 </div>
 </div>
  )
}

export default Step3
