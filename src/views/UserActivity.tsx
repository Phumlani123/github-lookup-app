import { useEffect } from "react";
import { useParams } from "react-router";
import ActivityList from "../components/ActivityList/ActivityList";
import UserProfile from "../components/ActivityList/UserProfile";
import { useGitHubData } from "../hooks/githubData/useGitHubData";
import Nav from "./Nav";

const UserActivityView = () => {

  const { username } = useParams<any>();

  return <>
  <Nav />
    <div className="container main main-raised">
          <div className="row ">
              <>
                <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                    <UserProfile name={username}/>
                </div>
                <div className="col-xl-8 order-xl-1">
                    <div className="">
                        <div className="border-0">
                          <div className="row align-items-center">
                              <div className="col-12 text-left">
                                <h3 className="my-3">User Activity</h3>
                              </div>
                          </div>
                        </div>
                        <div className="">
                          <ActivityList name={username}/>
                        </div>
                    </div>
                </div>
              </>
              
          </div>
      </div>
  </>
}

export default UserActivityView;