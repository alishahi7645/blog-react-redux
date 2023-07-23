import React from 'react'
import blog from '../assets/images/blog.jpg'
function Home() {
  return (
    <div className="home">
        <div className="home-img"></div>
        <div className="container py-4">
            <h2 className="fw-bold home-title">از همه جا با ما باش</h2>
            <div className="row mt-4">
                <div className="col-lg-4 col-md-6 mt-3">
                    <div className="blog-item shadow">
                        <img src={blog} alt="" className="w-100 blog-img" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home