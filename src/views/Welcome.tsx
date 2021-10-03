import { BrowserRouter as Router, Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div id="Welcome"> 
            <div className="container-fluid tinted-image">
                <div className="row no-gutter">
                
                <div className="col-md-8 col-lg-8">
                        <div className="login d-flex align-items-center py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-9 col-lg-8 mx-auto">

                                        <h1 className="mb-5">Welcome to Github Lookup</h1>
                                        <h3 className="login-heading mb-4">Please log in to continue</h3>
                                        <Link to={"/users"} className="btn btn-block btn-main">
                                        Get started
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" d-flex col-md-4 col-lg-4 align-items-center">
                        <img src="/img/github.png" className="d-inline-block align-self-center img-welcome" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        );
    };

export default Welcome;
    
