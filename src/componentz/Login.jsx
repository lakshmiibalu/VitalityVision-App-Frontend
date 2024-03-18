import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div>

               <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <div className="row">
                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                </div>
                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                <div className="card text-center mb-3">
                                    <div className="card-body">
                                       
                                        <h5 className="card-title"></h5>
                                       
                                        <h5 className="card-title"></h5>
                                        
                                    </div>
                                    </div>


                                </div>
                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3"></div>
                            </div>

                    </div>
                </div>
               </div>     


               <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <div className="row">
                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                </div>
                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                <div className="card text-center mb-3">
                                    <div className="card-body">
                                        <img height={130} src="" className="card-img-top" alt="..." />
                                        <h5 className="card-title"><b>New User</b></h5>
                                        <Link to="/register" className="btn btn-primary">Register</Link>
                                        <h5 className="card-title"><b>Existing User</b></h5>
                                        <Link to="/details" className="btn btn-primary">Log In</Link>
                                    </div>
                                    </div>


                                </div>
                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3"></div>
                            </div>

                    </div>
                </div>
               </div>  



               <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <div className="row">
                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                </div>
                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                      


                                </div>
                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3"></div>
                            </div>

                    </div>
                </div>
               </div>    

        
    </div>
  )
}

export default Login