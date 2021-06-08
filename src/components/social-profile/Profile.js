import React from "react";
import PropTypes from "prop-types";
import Stats from "./Stats";
import s from "./Profile.module.css";

function Profile({ avatar, name, tag, location, stats }) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} width="120" alt={name} className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <Stats {...stats} />
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;
