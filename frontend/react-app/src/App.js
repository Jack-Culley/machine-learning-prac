import React from 'react';

import Urls from './Urls';
import Layout from './components/Layout';
import {connect} from 'react-redux';
import * as actions from './store/authActions';

function App(props) {

    // Similar to componentDidMount and componentDidUpdate:
    React.useEffect(() => {
      props.setAuthenticatedIfRequired();
    }, [props]);

  return (
    <div className="App">
      <Layout {...props}>
        <Urls {...props}/>
      </Layout>
    </div>
  );
}

//This means that one or more of the redux states in the store are available as props
const mapStateToProps = (state) => {
  console.log(typeof state.auth.token);
  console.log(state.auth.token);
  return {
    isAuthenticated: state.auth.token !== null && typeof state.auth.token !== 'undefined',
    token: state.auth.token
  }
}

//This means that one or more of the redux actions in the form of dispatch(action) combinations are available as props
const mapDispatchToProps = (dispatch) => {
  return {
    setAuthenticatedIfRequired: () => dispatch(actions.authCheckState()),
    logout: () => dispatch(actions.authLogout()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
