import UserSearchInput from "../components/UserSearch/UserSearchInput";
import Nav from "./Nav";

const UserSearchView = () => {
  

  return <>
        <Nav />
        <div className="container main main-raised">
          <div className="row">
            <UserSearchInput/>
          </div>
        </div>
      </>
};

export default UserSearchView;