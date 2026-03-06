import React, { useState } from "react";
import { users as userData } from "./users.js";
import SingleUserComponent from "./SingleUserComponent";
import "./UserManagment.css";

function AllUsersComponent() {
  const [userList, setUserList] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

  // Add All Users
  const handleAddAll = () => {
    setUserList(userData);
    setShowUsers(true);
  };

  // Delete All Users
  const handleDeleteAll = () => {
    setUserList([]);
    setShowUsers(false);
  };

  // Delete Single User
  const handleDeleteUser = (id) => {
    const updatedUsers = userList.filter(user => user.id !== id);
    setUserList(updatedUsers);

    if (updatedUsers.length === 0) {
      setShowUsers(false);
    }
  };

  return (
    <div className="container">
      <h2>User Management</h2>

      {/* Toggle Button */}
      {!showUsers ? (
        <button className="main-btn" onClick={handleAddAll}>
          Add All Users
        </button>
      ) : (
        <button className="main-btn delete-all" onClick={handleDeleteAll}>
          Delete All Users
        </button>
      )}

      {/* Conditional Table Rendering */}
      {showUsers && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userList.map(user => (
              <SingleUserComponent
                key={user.id}
                user={user}
                onDelete={handleDeleteUser}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AllUsersComponent;