import "../styles/AdminManageUsers.css";
import React, { useState } from "react";
import UserService from "../services/UserService";
import { toast } from "react-toastify";

function AdminManageUsers() {
  const [userId, setUserId] = useState("");

  const handleBanUser = (event) => {
    event.preventDefault();

    UserService.banUser(userId);

    toast.success("User banned!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

    setTimeout(() => {}, 1000);
  };

  return (
    <>
      <div className="background-color-adminManageUsers">
        <div className="content">
          <div className="adminManageUsers-heading">
            <h1 className="remove-margin-manager-properties">BAN USER</h1>
          </div>

          <div className="warning-text">
            <h1>
              WARNING! BEFORE BANNING A USER, MAKE SURE TO HAVE A SOLID REASON
              WHY YOU ARE DOING SO!
            </h1>
          </div>

          <form onSubmit={handleBanUser}>
            <div className="banUser-grid">
              <div className="grid-item">
                <div className="banUser-validation-text">
                  <h1 className="remove-margin-manager-properties">
                    USER ID:{" "}
                  </h1>
                </div>
                <div className="banUser-container">
                  <input
                    type="text"
                    name="userId"
                    className="banUser-input"
                    placeholder=""
                    required
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <input type="submit" className="button-banUser" value="BAN USER" />
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminManageUsers;
