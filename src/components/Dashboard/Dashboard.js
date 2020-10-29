import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import Spinner from "../Layout/Spinner";
import { Link } from "react-router-dom";
import DashboardActions from "./DashboardActions";

const Dashboard = ({
  auth: { user },
  profile: { loading, profile },
  getCurrentProfile,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return loading && profile ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">Welcome {user && user.name}</p>
      {profile !== null ? (
        <DashboardActions />
      ) : (
        <Fragment>
          <p>You have not set up a profile, use the button below to do that!</p>
          <Link to="/create-profile" className="btn btn-primary m-1">
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
