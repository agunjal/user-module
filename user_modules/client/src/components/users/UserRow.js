import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const UserRow = ( props ) => {

  const { _id, firstname, lastname, email, phonenumber, profile } = props.obj;

  const deleteUser = async (id) => {

    const res = await axios.delete("http://localhost:4000/users/delete-user/" + id);
    
    if(!res) {
      throw new Error();
    }
    
    window.location.reload();
  };

  return (
    <tr>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{email}</td>
      <td>{phonenumber}</td>
      <td>
        <Link style={{paddingRight: "5px"}} className="view-link " to={"/users/view/" + _id}>View</Link>
        <Link style={{paddingRight: "5px"}} className="edit-link " to={"/users/update/" + _id}>Edit</Link>
        <Button onClick={() => deleteUser(_id)} size="sm" variant="danger">Delete</Button>
      </td>
    </tr>
  );
};

export default UserRow;
