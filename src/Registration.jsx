import React, { useState } from "react";

export default function Registration() {
  const [form, steform] = useState({
    firstName: "",
    lastName: "",
  });
  const handleChange = (e) => {
    steform({ ...form, [e.target.name]: e.target.value });
  };
  // const handleChangeFirstName = (e) => {
  //     steform({...form,firstName: e.target.value})
  // }
  // const handleChangeLastName = (e) => {
  //     steform({...form,lastName: e.target.value})
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div>
      <form>
        {/* <input type='text' name='firstName' onChange={handleChangeFirstName}/>
            <input type='text' name='lastName' onChange={handleChangeLastName}/> */}
        <input type="text" name="firstName" onChange={handleChange}/>
        <input type="text" name="lastName" onChange={handleChange}/>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
