import React from 'react'
import { Link } from 'react-router-dom'

const DetailsUser = () => {
  return (
    <div>

<br />
        <br />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Mobile Number</label>
                                <input type="text" className="form-control" name='name'  />
                            </div> 

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Address</label>
                                <input type="text" className="form-control" name='username' />
                            </div>
                            
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">ID Proof</label>
                                <select name="idproof" id="" className="form-control" >
                                    <option value="">Select your ID</option>
                                    <option value="male">Aadhar</option>
                                    <option value="female">Driving License</option>
                                    <option value="female">Pan Card</option>
                                </select>
                                
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">ID Number</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Gender</label>
                                <select name="gender" id="" className="form-control">
                                    <option value="">Select your gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Blood Group</label>
                                <select name="bloodgroup" id="" className="form-control">
                                    <option value="">Select your blood group</option>
                                    <option value="a+">A+</option>
                                    <option value="a-">A-</option>
                                    <option value="b+">B+</option>
                                    <option value="b-">B-</option>
                                    <option value="ab+">AB+</option>
                                    <option value="ab-">AB-</option>
                                    <option value="o+">O+</option>
                                    <option value="o-">O-</option>
                                </select>
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Height</label>
                                <input type="text" className="form-control" name='height'  />
                            </div> 

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Weight</label>
                                <input type="text" className="form-control" name='weight'  />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <Link to="/" className="btn btn-primary">Next</Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>



    </div>
  )
}

export default DetailsUser