import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
// import { setCurrentUser } from "./actions/authActions";
// import { logoutUser } from "./actions/authActions";

import jwt_decode from "jwt-decode";
// import setAuthToken from "./utils/setAuthToken";

// import PrivateRoute from "./components/common/PrivateRouter";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";

// import Login from "./components/auth/login";
// import Register from "./components/auth/register";
// import Dashboard from "./components/dashboard/dashboard";
// import CreateProfile from "./components/CreateProfile/CreateProfile";
// import EditProfile from "./components/EditProfile/EditProfile";
// import AddExperience from "./components/add-credentials/AddExperience";
// import AddEducation from "./components/add-credentials/AddEducation";
// import Profiles from "./components/profiles/Profiles";
// import Profile from "./components/profile/Profile";
// import NotFound from "./components/not-found/NotFound";
// import Posts from "./components/posts/Posts";
// import Post from "./components/Post/Post";
// import Doubts from "./components/Doubts/Doubts";
// import Notices from "./components/notices/Notices";
// import AddAvatar from "./components/dashboard/AddProfilePicture";
// import Doubt from "./components/Doubt/Doubt";
// import Password from "./components/Password/passwordNew";
// import ForgotPassword from "./components/Password/Password";

import HospitalLogin from "./components/Login/HospitalLogin";
import SuperLogin from "./components/Login/SuperLogin";
import AdminLogin from "./components/Login/AdminLogin";
import DoctorHome from "./components/Doctor/Dashboard";
import AssitantHome from "./components/Assitant/Main";
import MedicineStore from "./components/medicineStore/Home";

import PatientProfile from "./components/Doctor/PatientOne";

import store from "./store";
// import { clearCurrentProfile } from "./actions/profileActions";

// if (localStorage.jwtToken) {
//   //Set auth token header auth

//   setAuthToken(localStorage.jwtToken);
//   //Decide token and get user info and exp
//   const decorded = jwt_decode(localStorage.jwtToken);

//   store.dispatch(setCurrentUser(decorded));

//   //Check for expired tok
//   const currentTime = Date.now() / 1000;
//   if (decorded.exp < currentTime) {
//     store.dispatch(logoutUser());
//     // Clear current Profile
//     store.dispatch(clearCurrentProfile());
//     // Redirect to login
//     window.location.href = "/login";
//   }
// }

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="root">
            <Navbar />

            <Route exact path="/" component={Landing} />
            <Route exact path="/hospital" component={HospitalLogin} />
            <Route exact path="/super" component={SuperLogin} />
            <Route exact path="/admin" component={AdminLogin} />

            <Route path="/doctor" component={DoctorHome} />
            <Route path="/assistant" component={AssitantHome} />
            <Route path="/medicineStore" component={MedicineStore} />
            <Route path="/patient/:id" component={PatientProfile} />
            {/* <Route
              exact
              path="/forgot/:email/:hash/:time"
              component={Password}
            />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/not-found" component={NotFound} />
            <Route exact path="/forgot" component={ForgotPassword} />

            <Switch>
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/add-experience"
                component={AddExperience}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/add-education"
                component={AddEducation}
              />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/feed" component={Posts} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/doubts" component={Doubts} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/notices" component={Notices} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/query" component={Posts} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/post/:id" component={Post} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/doubt/:id" component={Doubt} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/profiles" component={Profiles} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/profile/:handle" component={Profile} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/profile/id/:id" component={Profile} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>

            <Switch>
              <PrivateRoute
                exact
                path="/add-profile-picture"
                component={AddAvatar}
              />
            </Switch>
            */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
