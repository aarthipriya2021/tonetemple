import React from 'react'
import { Link } from 'react-router-dom';

const GymClass = () => {
    return (
        <div className="container-lg container-fluid-lg gym-class mb-5">
            <div className="row px-lg-3 pt-lg-0 pt-4 mt-5 mt-lg-0">
                <div className="col-md-6 p-0">
                    <div id="box-1" className="gym-class-box d-flex flex-column align-items-sm-start align-items-center align-items-md-end justify-content-center text-right text-white px-5">
                        <i className="flaticon-six-pack"></i>
                        <h3 className="display-4 mb-3 text-white">Body Building</h3>
                        <p>
                        Embrace the challenge of bodybuilding and witness the transformation of both body and mind in our empowering gym environment.
                        </p>
                        <Link to="/" className="btn btn-lg btn-outline-light mt-4 px-4 rounded-0">Join Now</Link>
                    </div>
                </div>
                <div className="col-md-6 p-0">
                    <div id="box-2" className="gym-class-box d-flex flex-column align-items-sm-start align-items-center justify-content-center text-left text-white px-5">
                        <i className="flaticon-bodybuilding"></i>
                        <h3 className="display-4 mb-3 text-white">Muscle Building</h3>
                        <p className='text-center text-sm-start'>
                        Build muscle, increase strength, and transform your body with our proven muscle-building strategies and support.
                        </p>
                        <Link to="/" className="btn btn-lg btn-outline-light mt-4 px-4 rounded-0">Join Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GymClass;