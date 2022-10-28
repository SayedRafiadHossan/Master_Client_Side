import React from "react";
import { Link } from "react-router-dom";

const CourseCart = ({ c }) => {
  const { id, img, title, price } = c;

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mb-5">
        <figure>
          <img src={img} className="h-[350px]" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Price : {price}</p>
          <div className="card-actions justify-end">
            <Link to={`/details/${id}`}>
              <button className="btn btn-primary">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCart;
