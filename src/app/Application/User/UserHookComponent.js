import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  SaveUserToDB,
  SaveUserToDBUsingFetch,
} from '../../../state/User/useraction';

let UserHook = (props) => {
  let User = useSelector((store) => store.userReducer.user);

  let [uName, setUserName] = useState(User.userName);
  let [pass, setPassword] = useState(User.password);
  let [street, setStreet] = useState(User.street);
  let [mobile, setPhone] = useState(User.mobile);

  let onTextChange = (evt) => {
    evt.preventDefault();

    let val = evt.target.value;

    setUserName(val);
  };

  let dispatchToDB = useDispatch();

  let loginUser = (evt) => {
    evt.preventDefault();
    let newUser = {
      userName: uName,
      password: pass,
      street,
      mobile,
    };
    dispatchToDB(SaveUserToDB(newUser));
  };

  let sessionName = useRef(null);
  let todaysTopic = useRef(null);


  let readFormData = (evt) => {
    evt.preventDefault();
    alert(sessionName.current.value);

  };

  return (
    <>
      <h1>User Login Page</h1>
      <section className={'componentClass'}>
        <div className="form col-md-8">
          <div className="col-md-12">
            <b>User Name</b>
            <input
              type="text"
              className="form-control col-md-6 username"
              value={uName} //state to update the userName
              placeholder="User Name"
              onChange={onTextChange}
              maxLength={40}
            />
          </div>
          <div className="col-md-12">
            <b>Password</b>
            <input
              type="password"
              className="form-control col-md-6 pass"
              value={pass}
              placeholder="Password"
              onChange={(evt) => setPassword(evt.target.value)}
              maxLength={40}
            />
          </div>
          <div className="col-md-12">
            <b>Street </b>
            <input
              type="text"
              className="form-control col-md-6 street"
              value={street}
              placeholder="Street Name"
              onChange={(evt) => setStreet(evt.target.value)}
            />
          </div>

          <div className="col-md-12">
            <b>Mobile </b>
            <input
              type="number"
              className="form-control col-md-6 mobile"
              value={mobile}
              placeholder="Mobile"
              maxLength={11}
              onChange={(evt) => setPhone(evt.target.value)}
            />
          </div>
          <input
            type="button"
            className={'btn btn-primary col-md-2 saveUser'}
            value={'SignIn-Up'}
            onClick={loginUser}
          />
        </div>
      </section>
    </>
  );
};

export default UserHook;