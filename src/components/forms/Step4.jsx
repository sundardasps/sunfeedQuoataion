import React from 'react'
import InputField from '../common/InputField'
import InputLabel from '../common/InputLabel'
import { Button } from 'flowbite-react'
import { ArrowRight } from 'flowbite-react-icons/outline'
import { useNavigate } from 'react-router-dom'
import FormTitle from '../common/FormTitle'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { product_informationUpdate } from '../../redux/slice'
import productInformationSchema, { product_information } from '../../yup/step4'
import ErrorMssgField from '../common/ErrorMssgField'

function Step4() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

  const { errors, handleBlur, handleChange, values, touched, handleSubmit } =
  useFormik({
    initialValues:product_information ,
    validationSchema: productInformationSchema,
    onSubmit: async (values) => { 
      dispatch(product_informationUpdate(values));
      navigate('/step5')
    },
  });

  return (
    <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4 w-full rounded-md border-2 p-5 space-y-2 bg-[#F8F8F8] border-[#65AC32]">
      <FormTitle label="Product Information & Technical Sheet" />
       <div>
          <div className="mb-2 block">
            <InputLabel label="Inverters" />
          </div>
          <InputField value={values.inverters} name="inverters" onBlur={handleBlur} onChange={handleChange}  />
          {errors.inverters && touched.inverters && (
            <ErrorMssgField errorMessage={errors.inverters} />
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Solar Panel" />
          </div>
          <InputField value={values.solar_panel} name="solar_panel" onBlur={handleBlur} onChange={handleChange}  />
          {errors.solar_panel && touched.solar_panel && (
            <ErrorMssgField errorMessage={errors.solar_panel} />
          )}
        </div>
      <div>
          <div className="mb-2 block">
            <InputLabel label="Fixation Type" />
          </div>
          <InputField value={values.fixation_type} name="fixation_type" onBlur={handleBlur} onChange={handleChange}  />
          {errors.fixation_type && touched.fixation_type && (
            <ErrorMssgField errorMessage={errors.fixation_type} />
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Cable (m)" />
          </div>
          <InputField value={values.cable} name="cable" onBlur={handleBlur} onChange={handleChange}  />
          {errors.cable && touched.cable && (
            <ErrorMssgField errorMessage={errors.cable} />
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Electric Board (Mono / Tri)" />
          </div>
          <InputField value={values.electrical_board} name="electrical_board" onBlur={handleBlur} onChange={handleChange}  />
          {errors.electrical_board && touched.electrical_board && (
            <ErrorMssgField errorMessage={errors.electrical_board} />
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Size of Ground Opening (m)" />
          </div>
          <InputField value={values.ground_opening_size} name="ground_opening_size" onBlur={handleBlur} onChange={handleChange}  />
          {errors.ground_opening_size && touched.ground_opening_size && (
            <ErrorMssgField errorMessage={errors.ground_opening_size} />
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Earthworks (sq.ft)" />
          </div>
          <InputField value={values.earthworks} name="earthworks" onBlur={handleBlur} onChange={handleChange}  />
          {errors.earthworks && touched.earthworks && (
            <ErrorMssgField errorMessage={errors.earthworks} />
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Driver Transformer" />
          </div>
          <InputField value={values.driver_transformer} name="driver_transformer" onBlur={handleBlur} onChange={handleChange}  />
          {errors.driver_transformer && touched.driver_transformer && (
            <ErrorMssgField errorMessage={errors.driver_transformer} />
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Water Proof Coating (m)" />
          </div>
          <InputField value={values.waterproof_coating} name="waterproof_coating" onBlur={handleBlur} onChange={handleChange}  />
          {errors.waterproof_coating && touched.waterproof_coating && (
            <ErrorMssgField errorMessage={errors.waterproof_coating} />
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Technical Studies and Construction Permit Site Fees" />
          </div>
          <InputField value={values.technical_studies} name="technical_studies" onBlur={handleBlur} onChange={handleChange}  />
          {errors.technical_studies && touched.technical_studies && (
            <ErrorMssgField errorMessage={errors.technical_studies} />
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Engine Rental (Day)" />
          </div>
          <InputField value={values.engine_rental} name="engine_rental" onBlur={handleBlur} onChange={handleChange}  />
          {errors.engine_rental && touched.engine_rental && (
            <ErrorMssgField errorMessage={errors.engine_rental} />
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Dumpster" />
          </div>
          <InputField value={values.dumpster} name="dumpster" onBlur={handleBlur} onChange={handleChange}  />
          {errors.dumpster && touched.dumpster && (
            <ErrorMssgField errorMessage={errors.dumpster} />
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Workforce (W)" />
          </div>
          <InputField value={values.workforce} name="workforce" onBlur={handleBlur} onChange={handleChange}  />
          {errors.workforce && touched.workforce && (
            <ErrorMssgField errorMessage={errors.workforce} />
          )}
        </div>
      <Button  className='bg-[#65AC32]' type="submit" >Next <ArrowRight /> </Button>
    </form>
  )
}

export default Step4
