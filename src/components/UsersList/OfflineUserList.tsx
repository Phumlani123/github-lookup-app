import { useGitHubData } from "../../hooks/githubData/useGitHubData";
import { useOfflineStorage } from "../../hooks/useOfflineStorage";
import UsersListItem from "./UsersListItem";
import Nav from "../../views/Nav";

const OfflineUsersList = () => {
    const offlineData:any = useOfflineStorage();
    const offlineUsers:any = offlineData.loadData("users");

    console.log('off', offlineUsers);
    return (
       <>
       <Nav />
        {offlineUsers
            ? <div className="row pt-5">
                {offlineUsers.map((result: any) => (
                <div className="col-lg-4  col-md-6">
                    <UsersListItem key={result.id} {...result} />
                </div>
                ))}
            </div>
             : 
                <div>
                    <div className="col-md-12 pt-5">
                        <h3>You have no saved search list</h3>
                    </div>
                    <div className="align-items-center my-5">
                        <img src="/img/GitHub-logo.png" style={{width: "20%"}} alt=""/>
                    </div>
                </div>
        }
       </>
    )
};

export default OfflineUsersList;