import { useGitHubData } from "../../hooks/githubData/useGitHubData";
import UsersListItem from "./UsersListItem";

const UsersList = () => {
    const data = useGitHubData();
    const users:any = data?.userSearchData?.items;

    return (
       <>
        {users 
            ? <div className="row">
                {users.map((result: any) => (
                <div className="col-md-4">
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
                        <img src="/img/github.png" style={{width: "20%"}} alt=""/>
                    </div>
                </div>
        }
       </>
    )
};

export default UsersList;