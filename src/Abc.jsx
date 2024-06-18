import React from 'react'
import { Formik, Field, Form } from 'formik';

export default function Abc() {
  return (
    <div>
        <h1>Address Form</h1>
      <Formik
        initialValues={{
          permanentStreet: '',
          permanentCity: '',
          permanentState: '',
          permanentZip: '',
          temporaryStreet: '',
          temporaryCity: '',
          temporaryState: '',
          temporaryZip: '',
          copyPermanentToTemporary: false,
        }}
        
        onSubmit={(values) => {
          // Handle form submission (e.g., send data to server)
          console.log('Form submitted:', values);
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <h2>Permanent Address</h2>
            <div>
              <label htmlFor="permanentStreet">Street:</label>
              <Field type="text" name="permanentStreet" />
            </div>
            {/* Other permanent address fields */}
            {/* ... */}

            <h2>Temporary Address</h2>
            <div>
              <label htmlFor="temporaryStreet">Street:</label>
              <Field type="text" name="temporaryStreet" />
            </div>
            {/* Other temporary address fields */}
            {/* ... */}

            <div>
              <label>
                <Field
                  type="checkbox"
                  name="copyPermanentToTemporary"
                  onClick={() => {
                    // Copy permanent address to temporary address
                    if (!values.copyPermanentToTemporary) {
                      setFieldValue('temporaryStreet', values.permanentStreet);
                      // Copy other fields similarly
                    }
                  }}
                />
                Copy Permanent Address to Temporary Address
              </label>
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
