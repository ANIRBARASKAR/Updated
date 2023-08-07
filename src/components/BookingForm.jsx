import React from "react";

const BookingForm = () => {
  return (
    <div className="my-5">
    <div
      style={{
        backgroundColor: "rgb(131,53,137)",
        // height: "",
        width: "100vw",
        fontFamily:'Roboto'
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div
              className="text-white mt-5"
              style={{ fontSize: "30px", fontWeight: "bold" , textAlign:'left' }}
            >
              <span>Book a FREE Demo for </span>
              <br />
              <span>Premimum Batch Platinum </span>
              <br />
              <span>By IPM Careers </span>
            </div>
            <button
              type="button"
              class="btn bg-warning w-10/12 rounded-full mt-3 font-medium"
            >
              One-On-Live Clasess
            </button>
            <button
              type="button"
              class="btn bg-warning w-10/12 rounded-full mt-3 font-medium"
            >
              Five One-On-One Session with Ashutosh sir
            </button>
          </div>
          <div className="col-sm-6">
            <div class="container mt-5">
              <div class="card rounded-lg  my-5">
                <div class="card-body ">
                  <div style={{
                        color: "rgb(131,53,137)",
                        fontSize: "24px",
                        fontWeight: "bold",
                      }}>
                    <span
                      
                    >
                      Fill out the form to Book a Free 
                    </span>
                    <br />
                    <span>
                    DEMO for Platinum Batch!!
                    </span>
                  </div>
                  <div className="mt-2">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                  <div class="mt-2">
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      placeholder="Enter Your Email"
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                  <div class="mt-2">
                    <input
                      type="text"
                      class="form-control"
                      id="password"
                      placeholder="Enter Your Password"
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">
                      Please choose a password.
                    </div>
                  </div>
                  <div class="mt-2">
                    <input
                      type="text"
                      class="form-control"
                      id="cpassword"
                      placeholder="Confirm Your Password"
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">
                      Please Recheck Your Password.
                    </div>
                  </div>
                  <span style={{ color: "red", fontSize: "14px" }}>
                    Please fill the all fields
                  </span>
                  <button
                    type="button"
                    class="btn bg-warning w-100 mt-3 p-2 rounded-lg font-medium"
                  >
                    SUBMIT
                  </button>
                  <p class="text-center mt-3  font-medium">
                    Your Data is End-to-End Increpeted!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>);
};

export default BookingForm;
