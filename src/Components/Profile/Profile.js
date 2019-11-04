import React from "react";

function Profile(props) {
  let { name, lastName } = props.user.user_id;
  return (
    <div>
      <h3>
        `Hello {name} {lastName}`
      </h3>
    </div>
  );
}

export default Profile;
