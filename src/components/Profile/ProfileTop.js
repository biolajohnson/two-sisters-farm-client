import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileTop = ({
  profile: {
    lastname,
    firstname,
    location,
    user: { avatar },
  },
}) => {
  return (
    <Fragment>
      <div className="profile-top bg-primary p-2">
        <img className="round-img my-1" src={avatar} alt="" />
        <h1 className="large">{`${lastname}, ${firstname}`}</h1>
        <p>{location}</p>
        <div className="icons my-1">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe fa-2x"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube fa-2x"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
