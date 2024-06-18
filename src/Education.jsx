import { FieldArray, Form, Formik, Field } from 'formik'
import React from 'react'

export default function Education() {
  const initialValues = {
    firstName: '',
    lastName: '',
    education:[{
      degree:'',
      university:'',
      startYear: '',
      endYear:''
    }]
  };

  function onsubmit(values){
    console.log(values);
  };

  const addEducation = (v,s)=>{
    let p = {...v};
    p.education.push({
      degree:'',
      university:'',
      startYear: '',
      endYear:''
    });
  }
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onsubmit}>
      {({ values, setValues}) => (
        <Form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field type="text" name="firstName" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" name="lastName" />
          </div>
          <div>
            <FieldArray name='education'>
              {() => (values.education.map((v, i) =>{
                return (
                  <>
                    <div>
                      <label htmlFor="degree">Degree</label>
                      <Field type="text" name={`education[${i}].degree`} />
                    </div>
                    <div>
                      <label htmlFor="university">University</label>
                      <Field type="text" name={`education[${i}].university`} />
                    </div>
                    <div>
                      <label htmlFor="startYear">Start Year</label>
                      <Field type="text" name={`education[${i}].startYear`} />
                    </div>
                    <div>
                      <label htmlFor="endYear">End Year</label>
                      <Field type="text" name={`education[${i}].endYear`} />
                    </div>
                  </>
                )
              }))
              }
            </FieldArray>
          <div>
            <button onClick={()=>{
              addEducation(values,setValues)
            }}>Add More Education</button>
          </div>
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
      </Formik>
    </div>
  )
}
