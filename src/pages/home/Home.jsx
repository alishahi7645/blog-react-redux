import React, { useEffect, useState } from "react";
import blog from "../../assets/images/blog.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import "./home.css";
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const handlePosts = async () => {
      const res = axios.get("/api/view-blog").then((res) => {
        setData(res.data.blog);
      });
    };
    handlePosts();
  }, []);
  return (
    <div className="home">
      <div className="home-img"></div>
      <div className="container py-4">
        <h2 className="fw-bold home-title text-center">از همه جا با ما باش</h2>
        <div className="row mt-4">
          {data.map((post) => {
            return (
              <div className="col-lg-4 col-md-6 mt-3" key={post.id}>
                <div className="blog-item shadow">
                  <img src={`http://localhost:8000/uploads/blog/${post.image}`} alt="" className="w-100 blog-img" />
                  <div className="blog-item-text p-3">
                    <div className="author border-bottom pb-2">
                      <h6 className="fw-bold">{post.title}</h6>
                      <small className="fw-bold text-muted">
                        نویسنده :  {post.user.name}
                      </small>
                    </div>
                    <Link to="/" className="btn btn-dark d-block w-100 mt-3">
                      مشاهده
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
