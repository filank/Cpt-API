import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import "./UserList.css";

const UserList = () => {
  const [listOfUSer, setListOfUser] = useState([{}]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setListOfUser(result.data);
      console.log(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      {listOfUSer.map((item) => (
        <UserCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default UserList;
