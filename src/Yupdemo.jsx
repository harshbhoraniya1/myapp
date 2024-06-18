import { Form, Formik, Field, ErrorMessage } from 'formik';
import React from 'react'
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    degree:Yup.string().required('Degree is required'),
    start:Yup.string().required('Start Date is required'),
    end:Yup.string().when('toggle',{
        is:false,
        then: ()=> Yup.string().required('End Date is required')
    })
})

export default function Yupdemo() {
  return (
    <div>
        <h1>Yup Demo</h1>
        <Formik
        initialValues={{
            degree:'',
            start:'',
            toggle:false,
            end:'',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
        >
        {({values})=>(
        <Form>
            <div>
                <label htmlFor="degree">Degree</label>
                <Field id="degree" name="degree" placeholder="Degree" />
                <ErrorMessage name="degree" component={'span'} />
            </div>
            <div>
                <label htmlFor="start">Start Date</label>
                <Field id="start" type="date" name="start" placeholder="Start" />
            </div>
            <div>
                <label htmlFor="toggle">Pursing Degree</label>
                <Field id="toggle" name="toggle" type="checkbox" />
            </div>
            <div>
                <label htmlFor="end">End Date</label>
                <Field id="end" type="date" name="end" placeholder="End" disabled={values.toggle} />
            </div>
            <button type="submit">Submit</button>
        </Form>
    )}
        </Formik>
    </div>
  )
}
