import React from "react";
import "./UserCard.css";

const UserCard = ({ item }) => {
  return (
    <div className="container2">
      <h2> {item.name}</h2>
      <p>{item.email}</p>
      <p>{item.phone}</p>
    </div>
  );
};

export default UserCard;
