import { Formik, Field, Form } from "formik";
import React from "react";

export default function Addressform() {
  return (
    <div>
      <h1>Address</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          contact: "",
          permanentaddress: {
            houseno: "",
            street: "",
            landmark: "",
            zip: "",
            state: "",
          },
          temporaryaddress: {
            houseno: "",
            street: "",
            landmark: "",
            zip: "",
            state: "",
          },
        }}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
      {({values,setFieldValue}) => (
        <Form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" placeholder="Jane" />
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
          </div>

          <div>
            <label htmlFor="contact">Contact</label>
            <Field
              id="contact"
              name="contact"
              placeholder="123-456-7890"
              type="tel"
            />
          </div>

          <div>
            <label htmlFor="permanentaddress">Permanent Address</label>
            <Field
              id="houseno"
              name="permanentaddress.houseno"
              placeholder="House no."
            />
            <br />
            <Field
              id="street"
              name="permanentaddress.street"
              placeholder="Area, Street"
            />
            <br />
            <Field
              id="landmark"
              name="permanentaddress.landmark"
              placeholder="Landmark"
            />
            <br />
            <Field id="zip" name="permanentaddress.zip" placeholder="Pincode" />
            <br />
            <Field
              id="state"
              name="permanentaddress.state"
              placeholder="State"
            />
          </div>
          <div>
            <label>
              <Field type="checkbox" name="address" onClick={()=>{
                setFieldValue('temporaryaddress.houseno',values.permanentaddress.houseno)
                setFieldValue('temporaryaddress.street',values.permanentaddress.street)
                setFieldValue('temporaryaddress.landmark',values.permanentaddress.landmark)
                setFieldValue('temporaryaddress.zip',values.permanentaddress.zip)
                setFieldValue('temporaryaddress.state',values.permanentaddress.state)
              }}/>
              Permanent address and Temporary address are same
            </label>
          </div>
          <div>
            <label htmlFor="permanentaddress">Temporary Address</label>
            <Field
              id="houseno"
              name="temporaryaddress.houseno"
              placeholder="House no."
            />
            <br />
            <Field
              id="street"
              name="temporaryaddress.street"
              placeholder="Area, Street"
            />
            <br />
            <Field
              id="landmark"
              name="temporaryaddress.landmark"
              placeholder="Landmark"
            />
            <br />
            <Field id="zip" name="temporaryaddress.zip" placeholder="Pincode" />
            <br />
            <Field
              id="state"
              name="temporaryaddress.state"
              placeholder="State"
            />
          </div>
          <button type="submit">Submit</button>
        </Form>
    )}
      </Formik>
    </div>
  );
}
