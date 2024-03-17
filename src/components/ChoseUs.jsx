import React from "react";

const ChoseUs = () => {
  return (
    <section id="section4" className="my-4 pt-3">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center my-5">
            <h6 className="my-3 fw-bold"></h6>
            <h2>WHY CHOSE US?</h2>
          </div>
        </div>

        <div className="row">
          <div
            id="modern"
            className="col-lg-3 col-md-6 d-flex align-self-baseline align-items-center justify-content-center flex-column text-center py-3"
          >
            <div className="rounded-circle mb-4">
              <h1>
                <i className="fa-solid fa-curling-stone"></i>
              </h1>
            </div>
            <h3 className="mb-3">Modern Equipment</h3>
            <p>
              Step into our gym and discover a world of modern equipment
              designed to elevate your workout experience.
            </p>
          </div>
          <div
            id="healthy"
            className="col-lg-3 col-md-6 d-flex align-self-baseline align-items-center justify-content-center flex-column text-center py-3"
          >
            <div className="rounded-circle mb-4">
              <h1>
                <i className="fa-sharp fa-solid fa-glass-citrus"></i>
              </h1>
            </div>
            <h3 className="mb-3">Healthy Nutrition Plan</h3>
            <p>
              With our healthy nutrition plan, you'll learn how to nourish your
              body for optimal performance and health
            </p>
          </div>
          <div
            id="train"
            className="col-lg-3 col-md-6 d-flex align-self-baseline align-items-center justify-content-center flex-column text-center py-3"
          >
            <div className="rounded-circle mb-4">
              <h1>
                <i className="fa-sharp fa-solid fa-dumbbell"></i>
              </h1>
            </div>

            <h3 className="mb-3">Profesional training</h3>
            <p>
              Our professional training programs are designed to help you reach
              your fitness goals efficiently and safely, with expert guidance
              every step of the way.
            </p>
          </div>
          <div
            id="needs"
            className="col-lg-3 col-md-6 d-flex align-self-baseline align-items-center justify-content-center flex-column text-center py-3"
          >
            <div className="rounded-circle mb-4">
              <h1>
                <i className="fa-solid fa-heart-pulse"></i>
              </h1>
            </div>
            <h3 className="mb-3">Unique to your needs</h3>
            <p>
              Achieve your fitness goals with a plan that is unique to your body
              type, fitness level, and personal preferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChoseUs;
