import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema1 = Yup.object().shape({
  firstName: Yup.string().required("please enter a name").min(2, "required more than 2 characters").max(10, "required lass than 2 characters"),
  email: Yup.string().required("please enter"),
  password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters').max(40, 'Password must not exceed 40 characters'),
          confirmPassword: Yup.string().required('Confirm Password is required').oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
          acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
})
export default function Formikdemo() {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          address: "",
          gender: "",
          password:"",
          hobby: [],
        }}
        validationSchema={validationSchema1}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
      
        <Form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" placeholder="Jane" />
            <ErrorMessage name="firstName" component={'span'} />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="Doe" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            <ErrorMessage name="email" component={'span'} />

          </div>
          <div>
            <label htmlFor="address">Address</label>
            <Field id="address" name="address" placeholder="address" />
          </div>
          <div>
          <label htmlFor="gender">Gender</label>
            <label>
              <Field type="radio" name="gender" value="male" />
              Male
            </label>
            <label>
              <Field type="radio" name="gender" value="female" />
              Female
            </label>
          </div>
          <div>
          <label htmlFor="hobby">Hobby</label>
            <label>
              <Field type="checkbox" name="hobby" value="codding" />
              Codding
            </label>
            <label>
              <Field type="checkbox" name="hobby" value="playing" />
              Playing
            </label>
            <label>
              <Field type="checkbox" name="hobby" value="singing" />
              Singing
            </label>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field id="password" name="password" placeholder="Jane" />
            <ErrorMessage name="password" component={'span'} />
          </div>
          <div>
            <label htmlFor="confirmPassword">confirm Password</label>
            <Field id="confirmPassword" name="confirmPassword" placeholder="Jane" />
            <ErrorMessage name="confirmPassword" component={'span'} />
          </div>
          <button type="submit">Submit</button>
        </Form>
     
      </Formik>
    </div>
  );
}
