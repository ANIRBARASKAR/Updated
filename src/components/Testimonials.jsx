import React from "react";
import "./testimonial.css";
import cardimg1 from "../asset/WhatsApp-Image-2022-08-11-at-11.41.49-AM.jpeg";
const Testimonials = () => {
  return (
    <>
      <div className="container my-5">
        <h1
          style={{
            color: "rgb(131,53,137)",
            fontSize: "80px",
            fontWeight: "bold",
          }}
        >
          Testimonial
        </h1>
        <div className="row mt-5">
          <div className="col-sm-4">
            <div
              className="bgmodal"
              style={{ width: "500px", borderRadius: "20px" }}
            >
              <div
                class="card-body border-0"
                style={{ border: "2px solid pink" }}
              >
                <div className="flex gap-4 shadow-sm p-3 mb-3 bg-body-tertiary rounded-lg bgimg">
                  <div>
                    <img
                      className="rounded-full "
                      style={{ border: "4px solid pink" }}
                      width={"70px"}
                      height={"60px"}
                      src={cardimg1}
                      alt=""
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        color: "pink",
                        fontWeight: "bold",
                        fontSize: "30px",
                      }}
                    >
                      Jiya Kejriwal
                    </p>
                    <p>IIM Indore</p>
                  </div>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "rgb(131,53,137)",
                    }}
                  >
                    Expert Interview Panel
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    Faculty at IPM Career is extremely dedicated and
                    hardworking. They make it a point for every student to be
                    equally interactive in the classroom sessions. Mock
                    interviews by experts from Industry helped a lot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
