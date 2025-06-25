import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    number: "",
    query: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("contactForm", JSON.stringify(formData));
    setFormData({ username: "", number: "", query: "" });
    alert("Your query has been saved locally!");
  };

  return (
    <div className={styles.formContainer}>
      <h3>Contact Us</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter your username</label>
        <input
          type="text"
          required
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your username..."
        />

        <label htmlFor="number">Phone Number</label>
        <input
          type="number"
          required
          name="number"
          value={formData.number}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />

        <label htmlFor="query">Ask your query</label>
        <textarea
          name="query"
          id="query"
          required
          value={formData.query}
          onChange={handleChange}
          placeholder="Type here..."
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
