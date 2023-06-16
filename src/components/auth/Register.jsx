import React from 'react'
import './auth.css'
function Register() {
  return (
    <div className="auth register">
        <div className="container">
            <div className="row align-items-center min-vh-100 auth-res">
                <div className="col-lg-4 col-md-6 bg-dark py-3 rounded">
                    <div className="register-title text-center text-white">
                        <h3 className="fw-bold mb-5 auth-title">
                            ثبت نام کنید
                        </h3>
                    </div>
                    <form action="">
                        <div className="form-group mt-3">
                            <label htmlFor="" className="text-white mb-2">نام شما</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="" className="text-white mb-2">ایمیل</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="" className="text-white mb-2">پسوورد</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className="form-group mt-4">
                            <button type='submit' className='btn btn-success w-100'>ثبت نام</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register