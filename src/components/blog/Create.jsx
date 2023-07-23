import React, { useState } from "react";
import "./create.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Create() {
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  console.log(errors);

  const user_id = localStorage.getItem("user_id");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("user_id", user_id);
    await axios
      .post("/api/blog", formData)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          Swal.fire({
            icon: "success",
            title: "موفق",
            text: res.data.message,
            showCancelButton: true,
            confirmButtonText: "تایید!",
            timer: 8000,
          });
          navigate("/");
        } else {
          setErrors(res.data.errors);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="blog-post">
      <div className="container py-1 min-vh-100 d-flex flex-column justify-content-center">
        <div className="post-title text-center">
          <h4 className="mb-1 mt-1 fw-bold fs-1 text-white">حرف دلتو بزن</h4>
        </div>
        <div className="row justify-content-center py-4">
          <div className="col-lg-4 bg-dark rounded py-2">
            <form action="" onSubmit={handleSubmit}>
              <div className="form-group mt-3">
                <label className="mb-2 text-white">انتخاب عکس</label>
                <input
                  type="file"
                  className="form-control mb-1"
                  name="image"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                { errors && <small className="text-danger pt-2">{errors.image}</small>}
              </div>
              <div className="form-group mt-3">
                <label className="mb-2 text-white">عنوان</label>
                <input
                  type="text"
                  className="form-control mb-1"
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                />
                { errors && <small className="text-danger pt-2">{errors.title}</small>}
              </div>
              <div className="form-group mt-3">
                <label className="mb-2 text-white">متن</label>
                <textarea
                  name="description"
                  id=""
                  cols="10"
                  rows="5"
                  className="form-control mb-1"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                { errors && <small className="text-danger pt-2">{errors.description}</small>}
              </div>
              <div className="form-group mt-3">
                <button className="btn btn-success w-100 mt-3">
                  ارسال پست
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
