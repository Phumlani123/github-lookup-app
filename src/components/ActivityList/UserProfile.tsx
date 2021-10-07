import React, { useEffect } from "react";
import { useGitHubData } from "../../hooks/githubData/useGitHubData";

const UserProfile = (props: any) => {
    const [user, setUser] = React.useState<any>(null);
    const [isLoading, setLoading] = React.useState<boolean>(true);
    const data:any = useGitHubData();
  
    useEffect(() => {
        setCurrentUser();
        return () => {
            data.clearUserData();
        }
    } , []);

    async function setCurrentUser(){
      await data.setUserData(props.name);
    }

    setTimeout(() => {
        setUser(data.userData);
        setLoading(false);
    }, 10);

    if(isLoading){
        return <div>Loading...</div>
    }
    return (
        <>
        
            <div className=" card-profile ">
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
                        {user?.login}<span className="font-weight-light"></span>
                        </h4>
                        
                        <div className="h5 mt-4 mb-0">
                        <a className="btn btn-secondary btn-block" href={user?.url}>GitHub Profile</a>
                        </div>
                    </div>
                </div>
            </div>
          
        </>
    );
};

export default UserProfile;