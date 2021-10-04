import React, { useEffect } from "react";
import { useGitHubData } from "../../hooks/githubData/useGitHubData";
import ActivityListItem from "./ActivityListItem";

const ActivityList = (props:any) => {
    const [userActivity, setUserActivity] = React.useState<any>(null);
    const [isLoading, setLoading] = React.useState<boolean>(true);
    const data:any = useGitHubData();
   
    useEffect(() => {
      setCurrentUser();
    } , []);

    // console.log(userActivity);
     async function setCurrentUser(){
       await data.setUserActivityData(props.name);
    }

    setTimeout(() => {
        setUserActivity(data.userActivityData);  
        setLoading(false);
    }, 10);

    if(isLoading){
        return <div className="col-md-12 text-left">Loading...</div>
    }
    return (
        <>

        <div className="row">
            {userActivity?.map((result: any) => (
            <div className="col-md-4">
                <ActivityListItem  key={result.id} {...result} />
            </div>
            ))}
        </div>

        </>
        );
};

export default ActivityList;
                    