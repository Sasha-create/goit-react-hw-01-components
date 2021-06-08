import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import s from "./FriendList.module.css";

function FriendList({ friends }) {
  if (friends.length === 0) return null;
  return <ul className={s.friend}>{friends.map(FriendListItem)}</ul>;
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FriendList;
