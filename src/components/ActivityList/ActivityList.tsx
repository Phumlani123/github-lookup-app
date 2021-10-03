import React, { useEffect } from "react";
import { useGitHubData } from "../../hooks/githubData/useGitHubData";
import ActivityListItem from "./ActivityListItem";

const ActivityList = (props:any) => {
    const [userActivity, setUserActivity] = React.useState<any>(null);
    const data:any = useGitHubData();
  
    useEffect(() => {
      setCurrentUser()
        .then(() => {
            setUserActivity(data.userActivityData);
        });
        
    } , []);

    // console.log(userActivity);
    async function setCurrentUser(){
      await data.setUserActivityData(props.name);     
    }

    return (
        <>
        
                {data.loading ? 
                    <div>Loading...</div>
                     : data.error ? 
                        <div>{data.error}</div>
                     : userActivity ?
                        <div className="row">
                            {userActivity.map((result: any) => (
                            <div className="col-md-4">
                                <ActivityListItem key={result.id} {...result} />
                            </div>
                            ))}
                        </div>
                      :
                        <div>No Activity</div>
                }
        </>
    );
};

export default ActivityList;
                    