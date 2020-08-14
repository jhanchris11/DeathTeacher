import React, { useContext, Fragment } from "react";
import contextSpinner from "../../../context/spinner/spinnerContext";
import "./CustomSpinnerStyle.scss";

const CustomSpinner = () => {
  const { loading } = useContext(contextSpinner);

  return (
    <Fragment>
      {loading && (
        <div className="spinnerContainer">
          <div className="spinerContainerChild">
            <div className="loadingio-spinner-eclipse-5n0f6x31zyc">
              <div className="ldio-ikosai6h4e">
                <div></div>
              </div>
            </div>
            <div className="imageContainer">
              <img
                src="https://res.cloudinary.com/teepublic/image/private/s--Y5DOrT6I--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1540143169/production/designs/3360948_0.jpg"
                alt=""
                className="imageSpinner"
              />
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CustomSpinner;
