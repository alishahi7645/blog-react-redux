import React, { useState } from "react";
import "./auth.css";
import axios from "axios";
import Swal from "sweetalert2";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    await axios
      .get("/sanctum/csrf-cookie")
      .then(response => {
        axios
          .post("/api/login", data)
          .then((res) => {
            localStorage.setItem('auth-token', res.data.token);
            localStorage.setItem('user_name', res.data.username);
            localStorage.setItem('user_id', res.data.user_id);
            if(res.data.status === 200){
                Swal.fire({
                    icon: "success",
                    title: 'ورود موفق',
                    text:res.data.message,
                    showCancelButton:true,
                    confirmButtonText: 'تایید!',
                    timer: 8000
                })
            }else if(res.data.status === 401){
                Swal.fire({
                    icon: "warning",
                    title: 'مشکلی پیش آمده',
                    text:res.data.message,
                    showCancelButton:true,
                    confirmButtonText: 'تایید!',
                    timer: 8000
                })
            }
          })
          .catch((err) => {
            console.log(err);
          });
      });
  };
  return (
    <div className="auth login">
      <div className="container">
        <div className="row align-items-center min-vh-100 auth-res">
          <div className="col-lg-4 col-md-6 bg-dark py-3 rounded">
            <div className="register-title text-center text-white">
              <h3 className="fw-bold mb-5 auth-title">ورود</h3>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="form-group mt-3">
                <label htmlFor="" className="text-white mb-2">
                  ایمیل
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="" className="text-white mb-2">
                  پسوورد
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group mt-4">
                <button type="submit" className="btn btn-success w-100">
                  ورود
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
