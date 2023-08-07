import React from "react";
import "../components/IimForm.css";
const IimIndroreForm = () => {
  return (
    <div className="container">
      <div className="mt-5">
        <div className="row">
          <div className="col-sm-8">
            <div className="scrollable-text">
              <div>
                <div className="mt-5">
                  <h2 className="fw-bold" style={{ color: "#103F6B" }}>
                    IIM Indore
                  </h2>
                  <div
                    className="mt-3"
                    style={{ border: "2px solid #F8A120", width: "80px" }}
                  ></div>
                </div>
                <div className="mt-5">
                  <h5 className="fw-bold">COURSE(S) OFFERED</h5>
                  <p style={{ fontSize: "15px" }} className="mt-3">
                    Five Year Integrated Programme in Management (IPM)
                  </p>
                </div>
                <div className="mt-5">
                  <h5 className="fw-bold">ELIGIBILITY CRITERIA</h5>
                  <p style={{ fontSize: "15px" }} className="mt-3">
                    Candidates should have passed standard 10+2/ SSC. Candidates
                    should have passed Standard XII/HSC or equivalent
                    examination in 2021, and 2022 or appearing in 2023.
                  </p>
                </div>
                <div className="mt-5">
                  <h5 className="fw-bold">SELECTION/ ADMISSION PROCESS</h5>
                  <p style={{ fontSize: "15px" }} className="mt-3">
                    The candidates will be selected based on overall performance
                    in the Aptitude Test (AT) and Personal Interview (PI).
                  </p>
                  <div className="d-flex" style={{ fontSize: "15px" }}>
                    <p className="fw-bold">Adminssion Weightage: </p>
                    <p className="">
                      Aptitude Test Score (ATS) – 65% AND Personal Interview
                      (PI) – 35%
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <h5 className="fw-bold">IMPORTANT DATES</h5>
                  <div className="d-flex gap-3">
                    <div style={{ fontSize: "15px" }}>
                      <li>
                        Online Application starts from :
                        <span className="fw-bold">09.03.2023</span>
                      </li>
                      <li>
                        Last date for submitting online application:{" "}
                        <span className="fw-bold">14.04.2023</span>
                      </li>
                      <li>
                        {" "}
                        Exam Date : <span className="fw-bold">16.06.2023</span>
                      </li>
                    </div>
                    <div>
                      <p>.</p>
                      <p>.</p>
                      <p>.</p>
                    </div>
                  </div>
                </div>

                <p
                  className="my-2"
                  style={{ fontWeight: "bold", color: "black" }}
                >
                  EXAM PATTERN
                </p>
              </div>
              <table class="table  table-striped table-hover">
                <thead style={{ background: "rgb(13,61,107)", color: "white" }}>
                  <tr>
                    <th scope="col">Sr. NO.</th>
                    <th scope="col">Secetion</th>
                    <th scope="col">No Of Questions</th>
                    <th scope="col">Marks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Quantitative Ability- MCQ</td>
                    <td>Verbal Ability</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td> Quantitative Ability- SA (No Negative Marking)</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Total</td>
                    <td>400</td>
                    <td>500</td>
                  </tr>
                </tbody>
              </table>
              <p style={{ fontSize: "15px" }}>SA – Summative Assessment</p>
              <p style={{ fontSize: "15px" }}>
                SA Duration - 2 Hours, Entrance Mode - Online.
              </p>
              <p style={{ fontSize: "15px" }}>
                Marking Scheme: Correct Answer +4 & Incorrect Answer -1
              </p>
              <p
                className="my-2"
                style={{ fontWeight: "bold", color: "black" }}
              >
                FEE STRUCTURE
              </p>
              <p style={{ fontSize: "15px" }}>
                Total Fees for 5 years: INR 38.3 lakhs approx.
              </p>

              <p
                className="my-6"
                style={{ fontWeight: "bold", color: "black" }}
              >
                LINK FOR UNIVERSITY WEBSITE:
              </p>
              <a
                style={{ fontSize: "15px" }}
                href="https://www.iimidr.ac.in/academic-programmes/five-year-integrated-programme-in-management-ipm/"
              >
                https://www.iimidr.ac.in/academic-programmes/five-year-integrated-programme-in-management-ipm/
              </a>

              <div className="my-5">
                <div className="mt-4">
                  <p
                    class="d-flex justify-content-between pb-2"
                    style={{
                      fontSize: "15px",
                      borderBottom: "1px solid rgb(248,161,32)",
                    }}
                    type=""
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample1"
                  >
                    <p>What Is The Duration Of The IPM Course At IIM Indore?</p>
                    <p>^</p>
                  </p>
                  <div class="collapse" id="collapseExample1">
                    <div class="card card-body border-0">
                      Some placeholder content for the collapse component. This
                      panel is hidden by default but revealed when the user
                      activates the relevant trigger.
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p
                    class="d-flex justify-content-between pb-2"
                    style={{
                      fontSize: "15px",
                      borderBottom: "1px solid rgb(248,161,32)",
                    }}
                    type=""
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample2"
                  >
                    <p>What Is The Duration Of The IPM Course At IIM Indore?</p>
                    <p>^</p>
                  </p>
                  <div class="collapse" id="collapseExample2">
                    <div class="card card-body border-0">
                      Some placeholder content for the collapse component. This
                      panel is hidden by default but revealed when the user
                      activates the relevant trigger.
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p
                    class="d-flex justify-content-between pb-2"
                    style={{
                      fontSize: "15px",
                      borderBottom: "1px solid rgb(248,161,32)",
                    }}
                    type=""
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample3"
                  >
                    <p>What Is The Duration Of The IPM Course At IIM Indore?</p>
                    <p>^</p>
                  </p>
                  <div class="collapse" id="collapseExample3">
                    <div class="card card-body border-0">
                      Some placeholder content for the collapse component. This
                      panel is hidden by default but revealed when the user
                      activates the relevant trigger.
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p
                    class="d-flex justify-content-between pb-2"
                    style={{
                      fontSize: "15px",
                      borderBottom: "1px solid rgb(248,161,32)",
                    }}
                    type=""
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample4"
                  >
                    <p>What Is The Duration Of The IPM Course At IIM Indore?</p>
                    <p>^</p>
                  </p>
                  <div class="collapse" id="collapseExample4">
                    <div class="card card-body border-0">
                      Some placeholder content for the collapse component. This
                      panel is hidden by default but revealed when the user
                      activates the relevant trigger.
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p
                    class="d-flex justify-content-between pb-2"
                    style={{
                      fontSize: "15px",
                      borderBottom: "1px solid rgb(248,161,32)",
                    }}
                    type=""
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample5"
                  >
                    <p>What Is The Duration Of The IPM Course At IIM Indore?</p>
                    <p>^</p>
                  </p>
                  <div class="collapse" id="collapseExample5">
                    <div class="card card-body border-0">
                      Some placeholder content for the collapse component. This
                      panel is hidden by default but revealed when the user
                      activates the relevant trigger.
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p
                    class="d-flex justify-content-between pb-2"
                    style={{
                      fontSize: "15px",
                      borderBottom: "1px solid rgb(248,161,32)",
                    }}
                    type=""
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample6"
                  >
                    <p>What Is The Duration Of The IPM Course At IIM Indore?</p>
                    <p>^</p>
                  </p>
                  <div class="collapse" id="collapseExample6">
                    <div class="card card-body border-0">
                      Some placeholder content for the collapse component. This
                      panel is hidden by default but revealed when the user
                      activates the relevant trigger.
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p
                    class="d-flex justify-content-between pb-2"
                    style={{
                      fontSize: "15px",
                      borderBottom: "1px solid rgb(248,161,32)",
                    }}
                    type=""
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample7"
                  >
                    <p>What Is The Duration Of The IPM Course At IIM Indore?</p>
                    <p>^</p>
                  </p>
                  <div class="collapse" id="collapseExample7">
                    <div class="card card-body border-0">
                      Some placeholder content for the collapse component. This
                      panel is hidden by default but revealed when the user
                      activates the relevant trigger.
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p
                    class="d-flex justify-content-between pb-2"
                    style={{
                      fontSize: "15px",
                      borderBottom: "1px solid rgb(248,161,32)",
                    }}
                    type=""
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample8"
                  >
                    <p>What Is The Duration Of The IPM Course At IIM Indore?</p>
                    <p>^</p>
                  </p>
                  <div class="collapse" id="collapseExample8">
                    <div class="card card-body border-0">
                      Some placeholder content for the collapse component. This
                      panel is hidden by default but revealed when the user
                      activates the relevant trigger.
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p
                    class="d-flex justify-content-between pb-2"
                    style={{
                      fontSize: "15px",
                      borderBottom: "1px solid rgb(248,161,32)",
                    }}
                    type=""
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample9"
                  >
                    <p>What Is The Duration Of The IPM Course At IIM Indore?</p>
                    <p>^</p>
                  </p>
                  <div class="collapse" id="collapseExample9">
                    <div class="card card-body border-0">
                      Some placeholder content for the collapse component. This
                      panel is hidden by default but revealed when the user
                      activates the relevant trigger.
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p
                    class="d-flex justify-content-between pb-2"
                    style={{
                      fontSize: "15px",
                      borderBottom: "1px solid rgb(248,161,32)",
                    }}
                    type=""
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample10"
                  >
                    <p>What Is The Duration Of The IPM Course At IIM Indore?</p>
                    <p>^</p>
                  </p>
                  <div class="collapse" id="collapseExample10">
                    <div class="card card-body border-0">
                      Some placeholder content for the collapse component. This
                      panel is hidden by default but revealed when the user
                      activates the relevant trigger.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <CounsellingForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IimIndroreForm;

const CounsellingForm = () => {
  return (
    <>
      <div class="container mt-3">
      {/* <div className="col-sm-4"></div> */}
        <div class="card rounded-lg">
          <div class="card-body ">
            <div
              style={{
                color: "rgb(131,53,137)",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              <span>Fill out the form to Book a Free</span>
              <br />
              <span>DEMO for Platinum Batch!!</span>
            </div>
            <div className="mt-2">
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter your name"
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please choose a username.</div>
            </div>
            <div class="mt-2">
              <input
                type="text"
                class="form-control"
                id="email"
                placeholder="Enter Your Email"
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please choose a username.</div>
            </div>
            <div class="mt-2">
              <input
                type="text"
                class="form-control"
                id="password"
                placeholder="Enter Your Password"
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please choose a password.</div>
            </div>
            <div class="mt-2">
              <input
                type="text"
                class="form-control"
                id="cpassword"
                placeholder="Confirm Your Password"
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please Recheck Your Password.</div>
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
    </>
  );
};
