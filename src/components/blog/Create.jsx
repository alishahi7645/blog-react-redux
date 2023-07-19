import React from 'react';
import './create.css'

function Create() {
  return (
    <div className="blog-post">
        <div className="container py-1 min-vh-100 d-flex flex-column justify-content-center">
            <div className="post-title text-center">
                <h4 className="mb-1 mt-1 fw-bold fs-1 text-white">حرف دلتو بزن</h4>
            </div>
            <div className="row justify-content-center py-4">
                <div className="col-lg-4 bg-dark rounded py-2">
                    <form action="">
                        <div className="form-group mt-3">
                            <label className='mb-2 text-white'>انتخاب عکس</label>
                            <input type="file" className='form-control' />
                        </div>
                        <div className="form-group mt-3">
                            <label className='mb-2 text-white'>عنوان</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className="form-group mt-3">
                            <label className='mb-2 text-white'>متن</label>
                            <textarea name="" id="" cols="10" rows="5" className="form-control"></textarea>
                        </div>
                        <div className="form-group mt-3">
                            <button className="btn btn-success w-100 mt-3">ارسال پست</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Create;
