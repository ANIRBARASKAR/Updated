import React from "react";
import individual from "../asset/2344579.png";
import ONon from "../asset/3395949.png";
import facalties from "../asset/5351063.png";
import timing from "../asset/61227.png";
import video from "../asset/img_520336.png";
import book from "../asset/read-book-icon.png";

import "../components/Icons.css";

const Icons = () => {
  const icons = [
    { id: 1, logo: individual, desc: "Individual Attention" },
    { id: 2, logo: facalties, desc: "Top Faculties from IIM" },
    { id: 3, logo: ONon, desc: "5 One-on-One Session with Authosh Sir" },
    { id: 4, logo: timing, desc: "Flexible Timings" },
  ];
  return (
    <>
     <div className="container d-flex justify-center mb-8">
          <div className="d-flex justify-content-center gap-8" style={{width : "50%"}}>
                  <div>
                  <div
                className="card bg-warning text-center  p-3 "
                style={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "65px",
                }}
              >
                <div>
                  <img className="img-fluid" src={video} alt="" />
                </div>
              </div>
              <p style={{ fontFamily: "sans-serif", fontSize: "15px" }}>
                Live On to One Interactive Classes
              </p>
                  </div>
                  <div>
                  <div
                className="card bg-warning text-center  p-3 "
                style={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "65px",
                }}
              >
                <div>
                  {/* <img className="img-fluid" src={video} alt="" /> */}
                  <img className="img-fluid" src='https://uxwing.com/wp-content/themes/uxwing/download/education-school/read-book-icon.png' alt="" />
                </div>
              </div>
              <p style={{ fontFamily: "sans-serif", fontSize: "15px" }}>
              Personalized Strategy Plan's & Notes              </p>
                  </div>
                  <div>
                  <div
                className="card bg-warning text-center  p-3 "
                style={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "65px",
                }}
              >
                <div>
                  <img className="img-fluid" src="https://cdn-icons-png.flaticon.com/512/3395/3395949.png" alt="" />
                </div>
              </div>
              <p style={{ fontFamily: "sans-serif", fontSize: "15px" }}>
                One-on-One Session with R.V Sir.
              </p>
                  </div>
                  <div>
                  <div
                className="card bg-warning text-center  p-3 "
                style={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "65px",
                }}
              >
                <div>
                  <img className="img-fluid" src={video} alt="" />
                </div>
              </div>
              <p style={{ fontFamily: "sans-serif", fontSize: "15px" }}>
                Live 
              </p>
                  </div>
          </div>
     </div>
     <div className="container d-flex justify-center mb-8">
          <div className="d-flex justify-content-center gap-8" style={{width : "50%"}}>
                  <div>
                  <div
                className="card bg-warning text-center  p-3 "
                style={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "65px",
                }}
              >
                <div>
                  <img className="img-fluid" src={video} alt="" />
                </div>
              </div>
              <p style={{ fontFamily: "sans-serif", fontSize: "15px" }}>
                Live On to 
              </p>
                  </div>
                  <div>
                  <div
                className="card bg-warning text-center  p-3 "
                style={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "65px",
                }}
              >
                <div>
                  <img className="img-fluid" src={video} alt="" />
                </div>
              </div>
              <p style={{ fontFamily: "sans-serif", fontSize: "15px" }}>
                Live On to 
              </p>
                  </div>
                  <div>
                  <div
                className="card bg-warning text-center  p-3 "
                style={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "65px",
                }}
              >
                <div>
                  <img className="img-fluid" src={video} alt="" />
                </div>
              </div>
              <p style={{ fontFamily: "sans-serif", fontSize: "15px" }}>
                Live On to
              </p>
                  </div>
                
          </div>
     </div>
    </>
  );
};

export default Icons;
