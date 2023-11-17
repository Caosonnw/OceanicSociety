import { useEffect } from "react";
import "./getusers.css";
import { getAllUsers } from "../../redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DeleteUser } from "../../redux/apiRequest";
import { createAxios } from "../../createInstance";
import { loginSusscess } from "../../redux/authSlice";


const GetAllUsers = () => {
  const users = useSelector((state) => state.auth.login?.currentUser);
          //optional chaining
          //ternary operator
  const userList = useSelector((state) => state.users.users?.allUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let axiosJWT = createAxios(users,dispatch, loginSusscess);

  const handleDelete = (id) => {
    DeleteUser(users?.accessToken, dispatch,id,axiosJWT);
  };

    useEffect(() => {
      if(!users){
        navigate("/login");
      }
      if(users?.accessToken){
        getAllUsers(users?.accessToken, dispatch, axiosJWT);
      }
    }, [dispatch, navigate, users, axiosJWT]);

  return (
    <main className="home-container">
      <div className="home-title">User List</div>
      <div className="home-role">
        {`Your role: ${users?.admin ? `Admin` : `User`}`}
      </div>
      <div className="home-userlist">
        {userList?.map((user) => {
          return (
            <div className="user-container">
              <div className="home-user">{user.username}</div>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Role:</strong> {user?.admin ? `Admin` : `User`}</p>
                <p><strong>Registration Date:</strong> {user.createdAt}</p>
              <div className="delete-user" onClick={()=>handleDelete(user._id)}> {""} Delete {""} </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default GetAllUsers;
