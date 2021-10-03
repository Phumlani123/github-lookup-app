import React, { useEffect } from "react";
import { useParams } from "react-router";
import ActivityList from "../components/ActivityList/ActivityList";
import { useGitHubData } from "../hooks/githubData/useGitHubData";
import Nav from "./Nav";

const UserActivityView = () => {

  const { username } = useParams<any>();
  const [user, setUser] = React.useState<any>(null);
  const data:any = useGitHubData();

  useEffect(() => {
    setCurrentUser()
      .then(() => {
        setUser(data.userData);
      });
    
  } , []);

  async function setCurrentUser(){
    await data.setUserData(username);     
  }
 
  console.log(data)

  return <>
  <Nav />
    <div className="container">
          <div className="row mt-6">
            {data.loading ? (
                    <div>Loading...</div>
                ) : data.error ? (
                    <div>{data.error}</div>
                ) : user? ( 
                    <>
                      <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                          <div className="card card-profile shadow">
                              <div className="row justify-content-center">
                                  <div className="col-lg-3 order-lg-2">
                                      <div className="card-profile-image mb-4">
                                          <img src={user?.avatar_url} height="180px" width="180px" className="rounded-circle" alt=""/>
                                      </div>
                                  </div>
                              </div>
                              <div className="card-body  mt-5">
                                  <div className="text-center mt-5">
                                      <h4 className="mt-5">
                                      {user?.name}<span className="font-weight-light"></span>
                                      </h4>
                                      <p>{user?.bio}</p>
                                      
                                      <div className="h5 mt-4">
                                        <a className="btn btn-secondary btn-block" href={user?.blog}>Website</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-8 order-xl-1">
                          <div className="card  shadow">
                              <div className="card-header bg-white border-0">
                              <div className="row align-items-center">
                                  <div className="col-8">
                                  <h3 className="mb-0">User Activity</h3>
                                  </div>
                              </div>
                              </div>
                              <div className="card-body">
                                <ActivityList />
                              </div>
                          </div>
                      </div>
                    </>
                ) :
                  <div>Sorry something went wrong</div>
                }
              
          </div>
      </div>
  </>
}

export default UserActivityView;