
import FormTitle from '../common/FormTitle'
import InputField from '../common/InputField'
import InputLabel from '../common/InputLabel'
import ErrorMssgField from '../common/ErrorMssgField'
import { Button } from 'flowbite-react'
import { useFormik } from 'formik'
import { ArrowRight } from 'flowbite-react-icons/outline'
import { useNavigate } from 'react-router-dom'
import { numberValidation } from '../../utils/onlyNumbervalidation'
import { contactInformationSchema } from '../../yup/step1'
import { useDispatch, useSelector } from 'react-redux'
import { contact_informationUpdate } from '../../redux/slice'
import { useJsApiLoader } from '@react-google-maps/api'


function Step1() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const data = useSelector((state) => state.proposalDetails);

    const { errors, handleBlur, handleChange, values, touched, handleSubmit } =
    useFormik({
      initialValues:data.invoice.contact_information ,
      validationSchema: contactInformationSchema,
      onSubmit: async (values) => { 
        dispatch(contact_informationUpdate(values));
        navigate(`/step2`);
      },
    });

    const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      libraries: ["places", "drawing"],
    });
  

  return (
    <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4 w-full rounded-md border-2 p-5 space-y-2 bg-[#F8F8F8] border-[#65AC32]">
      <FormTitle label="Contact information" />
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
            <InputLabel label="Customer Name" />
          </div>
          <InputField value={values.customer_name} name="customer_name" onBlur={handleBlur} onChange={handleChange}  />
          {errors.customer_name && touched.customer_name && (
            <ErrorMssgField errorMessage={errors.customer_name} />
          )}
        </div>
      <div>
          <div className="mb-2 block">
            <InputLabel label="Address " />
          </div>
          <InputField value={values.address_headquarters} name="address_headquarters" onBlur={handleBlur} onChange={handleChange}  />
          {errors.address_headquarters && touched.address_headquarters && (
            <ErrorMssgField errorMessage={errors.address_headquarters} />
          )}
        </div>
      <div>
          <div className="mb-2 block">
            <InputLabel label="Address 2" />
          </div>
          <InputField value={values.address2} name="address2" onBlur={handleBlur} onChange={handleChange}  />
          {errors.address2 && touched.address2 && (
            <ErrorMssgField errorMessage={errors.address2} />
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="City" />
          </div>
          <InputField value={values.city} name="city" onBlur={handleBlur} onChange={handleChange}  />
          {errors.city && touched.city && (
            <ErrorMssgField errorMessage={errors.city} />
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
            <InputLabel label="Postal Code" />
          </div>
          <InputField value={values.postal_code} name="postal_code" onBlur={handleBlur} onChange={(e)=>numberValidation(e,handleChange)}  />
          {errors.postal_code && touched.postal_code && (
            <ErrorMssgField errorMessage={errors.postal_code} />
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Phone Number (Office)" />
          </div>
          <InputField value={values.phone_number_office} name="phone_number_office" onBlur={handleBlur} onChange={(e)=>numberValidation(e,handleChange)}   />
          {errors.phone_number_office && touched.phone_number_office && (
            <ErrorMssgField errorMessage={errors.phone_number_office} />
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Phone Number (Mobile)" />
          </div>
          <InputField value={values.phone_number_mobile} name="phone_number_mobile" onBlur={handleBlur} onChange={(e)=>numberValidation(e,handleChange)}   />
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
        
      <Button  className='bg-[#65AC32]' type="submit" >Next <ArrowRight /> </Button>
    </form>
  )
}

export default Step1
