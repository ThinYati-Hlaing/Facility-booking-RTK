import React, { useState } from "react";
import * as Yup from "yup";
import Icon from "../../../src/assets/icons";
import { useFormik } from "formik";
import { useLoginMutation } from "../../store/slice/apiSlice";
import { useNavigate } from "react-router-dom";

const validationScheme = Yup.object().shape({
  userName: Yup.string().required("User name is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
});

const LoginPage = () => {
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationScheme,


    onSubmit: async (values, { setSubmitting }) => {
      console.log("Formik isSubmitting:", formik.isSubmitting);

      console.log("values", values);
      try {
        const response = await login(values).unwrap();
        if (response?.accessToken) {
          localStorage.setItem("token", response?.accessToken);
          navigate("/home");
        }
      } catch (error) {
        console.error("API call failed:", error);
        alert("Login failed. Please check your credentials.");
      }
      finally {
        setSubmitting(false);
      }
    },
  });
  return (
    <div className="layout">
      <div className="container">
        <form onSubmit={formik.handleSubmit} className="login-container ">
          <img src={Icon.Logo} alt="Logo" title="Logo" />
          <h2 className="title">Welcome!</h2>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={formik.values.username}
            onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          />
          {formik.touched.username && formik.errors.username ? (
            <label className="error">{formik.errors.username}</label>
          ) : null}
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formik.values.password}
            onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <label className="error">{formik.errors.password}</label>
          ) : null}
          <button
            type="submit"
            className="login-btn"
          // disabled={isLoading || formik.isSubmitting}
          >
            {formik.isSubmitting ? "Logging in..." : "Login"}
          </button>
          {/* {result && <p style={{ color: "red" }}>{result}</p>} */}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
