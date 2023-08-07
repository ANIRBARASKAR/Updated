import React from "react";
import metors1 from "../asset/WhatsApp-Image-2022-01-09-at-4.49.41-PM-e1641850793724-350x350.jpeg";
import mentorsback1 from "../asset/Corpus-Christi-College-University-of-Cambridge-England.jpg";
import "../components/mentors.css";
const Mentors = () => {
  return (
    <>
      <div className="my-3">
        <div className="d-flex justify-content-end">
          <h3 style={{ fontSize: "39px" , color:'black' }} className="mx-5 m-0 fw-bold ">
            Know
          </h3>
        </div>
        <div className="d-flex justify-content-end">
          <h3
            style={{ fontSize: "55px", color: "#f2ad00" }}
            className="mx-5 m-0 fw-bold"
          >
            Your Mentors
          </h3>
        </div>
      </div>

      <div className="container mt-5">
        <div
          id="border-card"
          class="rounded-xl shadow-lg mb-5 bg-body-tertiary border-card-card "
          style={{ width: "230px" }}
        >
          <div class="container1">
            <div className="image-container1">
              <img
                className="img-fluid  homebgOne"
                style={{
                  width: "230px",
                  borderTopLeftRadius: "13px",
                  borderTopRightRadius: "13px",
                }}
                width={"200px"}
                height={"200px"}
                src={mentorsback1}
                alt=""
              />
              <img
                src={metors1}
                alt="Overlay Image"
                className="image-overlay1 rounded-full mt-2"
              />
            </div>
          </div>
          <div className="p-3">
            <p
              className="mt-4"
              style={{
                color: "rgb(131,53,137)",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              Aushotosh Misra
            </p>
            <div className="mt-2">
              <p
                className="shadow-lg mb-3 bg-body-tertiary rounded-full text-back-shade p-1 text-center"
                style={{ fontSize: "13px" }}
              >
                Master IIM Ahmedabad
              </p>
              <p
                className="shadow-lg mb-3 bg-body-tertiary rounded-full text-back-shade p-1 text-center"
                style={{ fontSize: "13px" }}
              >
                Bachlor Thap Univercity
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mentors;
