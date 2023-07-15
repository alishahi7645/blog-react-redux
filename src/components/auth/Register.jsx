import React from "react";
import "./auth.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);
  console.log(error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
    };

    await axios
      .post("http://localhost:8000/api/register", data, {
        headers: {
          "Content-Type": "applicaition/json",
          Accept: "applicaition/json",
        },
      })
      .then(res => {
        if (res.data.status === 200) {
            Swal.fire({
                icon: "success",
                title: 'تبریک میگم!',
                text:res.data.message,
                showCancelButton:true,
                confirmButtonText: 'تایید!',
                timer: 8000
            })
        } else {
          setError(res.data.validation_errors);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="auth register">
      <div className="container">
        <div className="row align-items-center min-vh-100 auth-res">
          <div className="col-lg-4 col-md-6 bg-dark py-3 rounded">
            <div className="register-title text-center text-white">
              <h3 className="fw-bold mb-5 auth-title">ثبت نام کنید</h3>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="form-group mt-3">
                <label htmlFor="" className="text-white mb-2">
                  نام شما
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                />
                {error && 
                  <small className="text-danger mt-3">{error.name}</small>
                }
              </div>
              <div className="form-group mt-3">
                <label htmlFor="" className="text-white mb-2">
                  ایمیل
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                />
                {error && 
                  <small className="text-danger mt-3">{error.email}</small>
                }
              </div>
              <div className="form-group mt-3">
                <label htmlFor="" className="text-white mb-2">
                  پسوورد
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                />
                {error && 
                  <small className="text-danger mt-3">{error.password}</small>
                }
              </div>
              <div className="form-group mt-4">
                <button type="submit" className="btn btn-success w-100">
                  ثبت نام
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
