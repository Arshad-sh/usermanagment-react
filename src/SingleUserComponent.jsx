function SingleUserComponent({ user, onDelete }) {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.address}</td>
      <td>
        <button className="delete-btn" onClick={() => onDelete(user.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default SingleUserComponent;