import { useGitHubData } from "../../hooks/githubData/useGitHubData";
import { useOfflineStorage } from "../../hooks/useOfflineStorage";
import UsersListItem from "./UsersListItem";

const UsersList = () => {
    const data:any = useGitHubData();
    const users:any = data?.userSearchData?.items;
    const offlineData:any = useOfflineStorage();
    const offlineUsers:any = offlineData.saveData("users", users);

    console.log('off', offlineData);
    return (
       <>
        {users 
            ? <div className="row">
                {users.map((result: any) => (
                <div className="col-lg-4  col-md-6">
                    <UsersListItem key={result.id} {...result} />
                </div>
                ))}
            </div>
             : 
                <div>
                    <div className="col-md-12">
                        <h3>Please search for a git hub user</h3>
                    </div>
                    <div className="align-items-center my-5">
                        <img src="/img/GitHub-logo.png" style={{width: "20%"}} alt=""/>
                    </div>
                </div>
        }
       </>
    )
};

export default UsersList;