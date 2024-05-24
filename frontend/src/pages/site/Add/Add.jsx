import React from "react";
import "./Add.scss";
import { useFormik } from "formik";
import axios from 'axios'

const Add = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
      price: "",
    },
    onSubmit: (values) => {
      axios.post("http://localhost:8080/api/products", values)
    },
  });
  return (
    <div>
      <div className="addPage">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />

          <label htmlFor="image">Image</label>
          <input
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.image}
          />

          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
        </form>

        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default Add;
