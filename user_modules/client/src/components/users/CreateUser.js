import { useState } from 'react';
import UserForm from './UserForm';
import axios from 'axios';

const CreateUser = ( props ) => {

  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
  });

  const onSubmit = async ( userObject ) => {
    
    try {
      const res = await axios.post("http://localhost:4000/users/create-user", userObject);

      if (res.data.status === 201) {
        alert("User successfully created");
      }
    } catch( e ) {
      console.error(e);
    }
  }

  return <>
    <h2>Create User</h2>
    <UserForm
      initialValues={formValues}
      onSubmit={onSubmit}
    />
  </>;
};

export default CreateUser;