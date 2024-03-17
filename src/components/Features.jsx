import React from "react";

const Features = () => {
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-lg-4 p-0">
          <div className="box d-flex align-items-center bg-secondary text-white px-5">
            <i className="flaticon-training display-2 text-primary me-3"></i>
            <div>
              <h2 className="text-white mb-3">Progression</h2>
              <p>
              "Progression is the key to long-term success in fitness, and our programs are designed to keep you moving forward towards your goals.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 p-0">
          <div className="box d-flex align-items-center bg-primary text-white px-5">
            <i className="flaticon-weightlifting display-2 text-secondary me-3"></i>
            <div>
              <h2 className="text-white mb-3">Workout</h2>
              <p>
              Our gym offers a variety of workout options, from high-intensity interval training to yoga, to cater to every fitness need and preference.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 p-0">
          <div className="box d-flex align-items-center bg-secondary text-white px-5">
            <i className="flaticon-treadmill display-2 text-primary me-3"></i>
            <div>
              <h2 className="text-white mb-3">Nutrition</h2>
              <p>
              Our nutrition programs focus on real, whole foods to help you achieve lasting results and maintain a healthy lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
