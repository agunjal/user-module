import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Form } from 'react-bootstrap';

const UserView = ( props ) => {

  const { id } = useParams();

  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
  });

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
      
    <Container>
    <h2>User Profile</h2>
    <Form style={{ width: '300px',  }}>
      <Form.Group className="mb-3">
        <Form.Label>First Name:</Form.Label>
        <Form.Label>{formValues.firstname}</Form.Label>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last Name:</Form.Label>
        <Form.Label>{formValues.lastname}</Form.Label>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email:</Form.Label>
        <Form.Label>{formValues.email}</Form.Label>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone number:</Form.Label>
        <Form.Label>{formValues.phonenumber}</Form.Label>
      </Form.Group>
    </Form>
    </Container>

  </>;

};

export default UserView;