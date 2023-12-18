import React from 'react'
import {
  useRouteMatch,
  Link,
  Switch,
  Route,
} from "react-router-dom";
import Viewprofile from './Viewprofile';
import Editprofile from './Editprofile';


const Profile = () => {
  
  const match=useRouteMatch().path;
  console.log(match);
  return (
    <>
      <div className=" p-20 flex flex-col items-center justify-center  border border-blue-500 gap-12">
        <div className="font-bold text-3xl text-blue-500">Profile Page</div>
        <div>
          <ul>
            <li className="list-disc text-md hover:scale-105 hover:text-blue-600 hover:underline hover:decoration-blue-600 duration-300">
              <Link to={`${match}/editProfile`}>Edit Profile</Link>
            </li>
          </ul>
          <ul>
            <li className="list-disc text-md hover:scale-105 hover:text-blue-600 hover:underline hover:decoration-blue-600 duration-300">
              <Link to={`${match}/viewProfile`}>View Profile</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route path="/profile/editProfile" component={Editprofile} />
          <Route path="/profile/viewProfile" component={Viewprofile} />
        </Switch>
      </div>
    </>
  );
}

export default Profile