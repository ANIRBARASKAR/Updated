import React from "react";
import logo from "../asset/ipm_logo (1).svg";
import carosoul from "../asset/platinum-web.png";
const Platinum = () => {
  return (
    <>
      <div className="mt-5">
        {/* <div className="d-flex justify-center pt-3 pb-3 border bottom-7 shadow-sm p-1 mb-2 bg-body-tertiary rounded">
          <img src={logo} height={"360px"} width={"360px"} alt="" />
        </div> */}
        {/* <div><img src={carosoul} alt="" /></div> */}
        <div className="row">
          <div className="col-sm-8">
            <div className="mt-5" style={{ marginLeft: 40 }}>
              <img
                src="https://register.ipmcareer.com/ipm_logo.svg"
                alt=""
                width={200}
              />
            </div>

            <div style={{ marginTop: 50, marginLeft: 50, fontSize: 60 }}>
              PLATINUM <span className="text-warning">BATCH</span>
            </div>
            <div style={{ marginLeft: 50 }}>
              <div className="col-sm-5">
                <hr />
              </div>
              <div className="py-2" style={{ fontSize: 25 }}>
                One-on-One{" "}
                <span style={{ fontStyle: "normal" }} className="text-warning">
                  Live Classes
                </span>
                <div className="col-sm-5 my-2">
                  <hr />
                </div>
                <div style={{ fontSize: 18, fontWeight: "bold" }}>
                  <div>
                    <input type="checkbox" checked />{" "}
                    <span> 10 One-on-One Session with R.V Sir </span>
                  </div>
                  <div>
                    <input type="checkbox" checked />{" "}
                    <span>Flexible Timings </span>
                  </div>
                  <div>
                    <input type="checkbox" checked />{" "}
                    <span>Individual Attention </span>
                  </div>
                  <div>
                    <input type="checkbox" checked />{" "}
                    <span>Personalized Study Material </span>
                  </div>
                  <div>
                    <input type="checkbox" checked />{" "}
                    <span>Top Faculties from IIM</span>
                  </div>
                </div>
                <span
                  style={{
                    border: "2px solid black",
                    fontWeight: "bold",
                    position: "relative",
                    top: -40,
                    left: 370,
                  }}
                  className="bg-warning , p-2"
                >
                  Book a Free Demo
                </span>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <img src="homePage.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Platinum;
