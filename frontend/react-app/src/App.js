import React from 'react';
import { useDispatch } from 'react-redux';
import Urls from './Urls';
import Layout from './components/Layout';
import { connect } from 'react-redux';
import * as actions from './store/authActions';

function App({store}) {

    const dispatch = useDispatch();

    // Similar to componentDidMount and componentDidUpdate:
    React.useEffect(() => {
      dispatch(actions.authCheckState())
    }, [store]);

  return (
    <div className="App">
      <Layout >
        <Urls />
      </Layout>
    </div>
  );
}

//This means that one or more of the redux states in the store are available as props
// const mapStateToProps = (state) => {
//   console.log(typeof state.auth.token);
//   console.log(state.auth.token);
//   return {
//     isAuthenticated: state.auth.token !== null && typeof state.auth.token !== 'undefined',
//     token: state.auth.token
//   }
// }

//This means that one or more of the redux actions in the form of dispatch(action) combinations are available as props
// const mapDispatchToProps = (dispatch) => {
//   return {
//     // setAuthenticatedIfRequired: () => dispatch(actions.authCheckState()),
//     // logout: () => dispatch(actions.authLogout()) 
//   }
// }

export default connect(null, null)(App);
