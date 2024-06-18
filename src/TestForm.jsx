import { ErrorMessage, Form, Formik, Field } from 'formik'
import React from 'react'
import * as Yup from "yup";

const velidetion = Yup.object().shape({
    fullName:Yup.string().required('please Enter Full Name'),
    phone:Yup.string().required('please Enter Phone'),
    address1:Yup.string().required('please Enter Address1'),
})
export default function TestForm() {
  return (
    <div>
    <h1>Test Form</h1>

    <Formik
    initialValues={
        {
            fullName:'',
            phone:'',
            address1:'',
            address2:'',
            city:'',
            state:''
        }
    }
    validationSchema={velidetion}
    onSubmit={(values) => {
          console.log(values);
        }}
    >
    <Form>
        <div>
            <label htmlFor='fullName'>Full Name</label>
            <Field type="text" name="fullName" />
            <ErrorMessage name='fullName'/>
        </div>
        <div>
            <label htmlFor='phone'>Phone</label>
            <Field type="text" name="phone" />
            <ErrorMessage name='phone'/>
        </div>
        <div>
            <label htmlFor='address1'>Address1</label>
            <Field type="text" name="address1" />
            <ErrorMessage name='address1'/>
        </div>
        <div>
            <label htmlFor='address2'>Address2</label>
            <Field type="text" name="address2" />
        </div>
        <div>
            <label htmlFor='city'>City</label>
            <Field type="text" name="city" />
        </div>
        <div>
            <label htmlFor='state'>State</label>
            <Field type="text" name="state" />
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>

    </Form>
    </Formik>
    </div>
  )
}
