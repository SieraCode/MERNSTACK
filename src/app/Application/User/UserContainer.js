import { connect } from 'react-redux';
import { AddUserToStore, SaveUserToDB } from '../../../state/User/useraction';
import UserComponent from './UserComponent.jsx';

let mapStateToProps = (store) => {
  console.log(store);
  
  return {
    user: store.userReducer.user,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => {
      dispatch(AddUserToStore(user));
    },
    loginUser: (user) => {
      dispatch(SaveUserToDB(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);