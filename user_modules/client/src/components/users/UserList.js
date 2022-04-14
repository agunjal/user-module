import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import UserRow from "./UserRow";

const UserList = () => {

const [users, setusers] = useState([]);

useEffect(() => {
	axios
    .get("http://localhost:4000/users/list-user")
    .then(({ data }) => {
      setusers(data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

const DataTable = () => {
	return users.map((res, i) => {
	  return <UserRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
    <Table striped bordered hover>
      <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Action</th>
      </tr>
      </thead>
      
      <tbody>
        {DataTable()}
      </tbody>
    </Table>
	</div>
);
};

export default UserList;
