import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";

const EditProfile = ({
  profile: { loading, profile },
  history,
  getCurrentProfile,
  createProfile,
}) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    location: "",
    bio: "",
  });
  const { firstname, lastname, location, bio } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };
  useEffect(() => {
    getCurrentProfile();
    setFormData({
      location: loading || !profile.location ? "" : profile.location,
      firstname: loading || !profile.firstname ? "" : profile.firstname,
      lastname: loading || !profile.lastname ? "" : profile.lastname,
      bio: loading || !profile.bio ? "" : profile.bio,
    });
  }, [loading, getCurrentProfile]);
  return (
    <Fragment>
      <h1 className="large text-primary">Create Your Profile</h1>
      <p className="lead">
        Let's get some information to make your profile stand out
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            value={firstname}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">First Name</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            value={lastname}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">Last Name</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            value={location}
            name="location"
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            City & state suggested (eg. Ikeja, Lagos)
          </small>
        </div>
        <div className="form-group">
          <textarea
            placeholder="A short bio of yourself"
            name="bio"
            onChange={(e) => onChange(e)}
          ></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
