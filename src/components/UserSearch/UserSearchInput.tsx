import React, { useEffect } from "react";
import { useGitHubData } from "../../hooks/githubData/useGitHubData";
import UsersList from "../UsersList/UsersList";

const UserSearchInput = () => {
    const [users, setUsers] = React.useState<any>(null);
    const [username, setUsername] = React.useState<any>('');
    const data:any = useGitHubData();
    
    const handleChange = (e:any) => {
        setUsername(e.target.value);
    };    
    
    const handleSubmit = (e:any) => {
        e.preventDefault();
        setUsers(data.setUserSearchData(username));
    };
    
    
    return (
        <div className="col-md-12 p-5">
            <div >
                <form onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                        <input
                        className="form-control"
                            type="text"
                            onChange={handleChange}
                            value={username}
                            placeholder="GitHub username"
                            required
                        />
                        <div className="input-group-append">
                            <button className="btn btn-block btn-secondary" type="submit">Search</button>
                        </div>
                    </div>
                </form>
                {data.loading ? (
                    <div>Loading...</div>
                ) : data.error ? (
                    <div>{data.error}</div>
                ) : (
                    <UsersList />
                )}
            </div>
        </div>
    )

};
export default UserSearchInput;