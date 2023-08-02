/* eslint-disable no-lone-blocks */
import React, { useState} from "react";

import { usersUrl } from '../Config';

import style from "../users.module.css";

const Users = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    image: '',
  });

   {/*handle change */} 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

   {/*handle submit */} 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data", formData);

    try {
      const response = await fetch(`${usersUrl}/Comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("POST request successful", data);
      e.target.reset();

    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };

  return (
    <div className={style.container}>

    <form onSubmit={handleSubmit} className={style.form}>

      <div 
      style={{ padding: '5px' }}>

        <label htmlFor="name">Name:</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name..."
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
      </div>

      <div style={{ padding: '5px' }}>
        <label htmlFor="age">Age:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="number"
          id="age"
          name="age"
          placeholder="Enter your age..."
          value={formData.age}
          onChange={handleChange}
          required
        />
        <br />
      </div>

      <div style={{padding:'5px'}}>
        <label>Gender:</label><br />
        <label>&nbsp;&nbsp;&nbsp;
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          Male
        </label><br />&nbsp;&nbsp;&nbsp;
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label><br />&nbsp;&nbsp;&nbsp;
        <label>
          <input
            type="radio"
            name="gender"
            value="other"
            checked={formData.gender === "other"}
            onChange={handleChange}
          
          />
          Other
        </label>
      </div>

      <div style={{ padding: '5px' }}>
        <label htmlFor="image">Image<br /> URL:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="URL"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        /><br />
      </div>

      <div style={{padding:'5px',textAlign:'center'}}>
        <button type="submit" 
          style=
          {{
            borderRadius:'5px',
            backgroundColor:'lightgreen',
            cursor:'pointer'
          }}>
          Submit
        </button>
      </div>
    </form>
    </div>
  )
}

export default Users;
