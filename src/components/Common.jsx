import React from "react";
import { NavLink } from "react-router-dom";
import web from "../images/img2.svg";

const Common = (props) => {
  return (
    <>
      <div className="body">
        <section id="header" className="d-flex align-items-center">
          <div className="container-fluid">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>
                      {props.name} <br />
                      <strong className="brand_name">Zero Over</strong>
                    </h1>
                    <h2 className="my-3">
                      we are team of the developers making websites
                    </h2>
                    <div className="mt-3">
                      <NavLink
                        className="btn btn-outline-info btn-lg"
                        to={props.visit}
                        role="button"
                      >
                        {props.btname}
                      </NavLink>
                    </div>
                  </div>

                  <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img
                      src={props.imgsrc}
                      className="img_fluid_animated"
                      alt="Common img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Common;
