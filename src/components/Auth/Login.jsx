import React, { useState } from "react";
import "./Login.css";
import PersonIcon from "@material-ui/icons/Person";
import { useHistory } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { axios } from "../../utils/axiosPublic";
import axios from "axios"

const Login = () => {
  const history = useHistory();
  const [serverError, setServerError] = useState(null);
  const [loading, setLoading] = useState(false);
  const routeHandler = (path) => {
    history.push(path);
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("email is required"),
    password: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,

    onSubmit: () => {
      const credentials = {
        email: formik.values.email,
        password: formik.values.password,
      };
    //   enableLoading();
      console.log(credentials.email, credentials.password);

      if (formik.isValid) {
        try {
          // <<<<<<< HEAD:src/app/modules/Auth/pages/Login.jsx
          axios
            .post("http://192.168.10.151:8585/api/auth/jwt/create/", credentials)
            .then((res) => {
              console.log(res);

              window.localStorage.setItem("access", res?.data?.access);
              console.log(res, formik.isValid);
              if (window.localStorage.getItem("access")) {
                routeHandler("/");
                // window.location.replace("/");
              }
            })
            .catch((err) => {
              setServerError(err);
            });
        } catch (err) {

        }
      }
    },
  });

  return (
    <div className="login--container">
      <div className="registration-form">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-icon">
            <span>DR MACHINE</span>
          </div>
          <div className="form-group">
            <input
            name="email"
              type="text"
              className="form-control item"
              id="username"
              placeholder="Email"
              value={formik.values.email}
              onChange={(e) => {
                let val = e.target.value;
                formik.setFieldValue("email", val);
              }}
            />
          </div>
          <div className="form-group">
            <input
             name="password"
              type="password"
              className="form-control item"
              id="password"
              placeholder="Password"
              value={formik.values.password}
              //   error={formik?.errors?.password}
              onChange={(e) => {
                let val = e.target.value;
                formik.setFieldValue("password", val);
              }}
            />
          </div>
          <div className="form-group">
            <button 
             type="submit"
             className="btn btn-block create-account"
             disabled={
                formik.errors.email || formik.errors.password
                // serverError?.message
              }
             >
              LOGIN
            </button>
          </div>
        </form>
        <div className="social-media">
          <h5>Sign up with social media</h5>
          <div className="social-icons">
            <a href="#">
              <i className="icon-social-facebook" title="Facebook"></i>
            </a>
            <a href="#">
              <i className="icon-social-google" title="Google"></i>
            </a>
            <a href="#">
              <i className="icon-social-twitter" title="Twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
