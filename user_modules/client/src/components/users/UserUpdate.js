import { useState, useEffect } from 'react';
import UserForm from './UserForm';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserUpdate = ( props ) => {

  const { id } = useParams();  

  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
  });
  
  const onSubmit = async ( userObject ) => {
    const res = await axios.put("http://localhost:4000/users/update-user/" + id, userObject);

    if (res.data.status === 200) {
      alert("User successfully updated");
      props.history.push("/users");
    }
  }

  useEffect( () => {

    async function fetchData() {
      try{
      const res = await axios.get("http://localhost:4000/users/update-user/" + id);

      const { firstname, lastname, email, phonenumber } = res.data;
      setFormValues({ firstname, lastname, email, phonenumber });

      } catch( err ) {
        console.error(err);
      }
    }

    fetchData();
  }, [id]);

  return <>
    <h2>Edit User</h2>
    <UserForm 
      initialValues={formValues}
      onSubmit={onSubmit}
    />
  </>;

};

export default UserUpdate;