import React, { useState, useEffect } from "react";
import axios from "axios";

const Account = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios
      .get("/api/profile/:id")
      .then(res => setProfile(res.data))
      .catch(err => console.log(err));
  }, []);

  console.log(profile);

  return (
    <div>
      <button>Insert debt Here</button>
      <button>Logout</button>
      <div></div>
    </div>
  );
};

export default Account;
