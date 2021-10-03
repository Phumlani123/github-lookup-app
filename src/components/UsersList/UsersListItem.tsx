import { BrowserRouter as Router, useHistory } from "react-router-dom";

const UsersListItem = (props: any) => {
    const history = useHistory();
    const handleClick = (e:any) => {
        e.preventDefault();
        history.push({
            pathname: '/user-activity/' + props.login,
        })
    };
    
    return (
        <div key={props.id}>
            <div onClick={handleClick}>
                <div className="user-card">
                    <img src={props.avatar_url} alt="profile-sample1" className="rounded-circle"/>
                    <h4>{props.login}</h4>
                    <p>
                    {props.url}
                    </p>
                </div>
            </div>
        </div>
    )
};

export default UsersListItem;