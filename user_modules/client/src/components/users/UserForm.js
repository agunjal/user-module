import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function UserForm( props ) {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(inputs);
  }

  return (
    
    <Container>
    <Form onSubmit={handleSubmit} style={{ width: '300px',  }}>
      <Form.Group className="mb-3">
        <Form.Label>First Name:</Form.Label>
        <Form.Control 
          type="text"
          name="firstname"
          value={inputs.firstname || props.initialValues.firstname || ""} 
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last Name:</Form.Label>
        <Form.Control 
          type="text" 
          name="lastname"
          value={inputs.lastname || props.initialValues.lastname || ""} 
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email:</Form.Label>
        <Form.Control 
          type="email" 
          name="email"
          value={inputs.email || props.initialValues.email || ""} 
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone number:</Form.Label>
        <Form.Control 
          type="text"
          name="phonenumber"
          value={inputs.phonenumber || props.initialValues.phonenumber || ""} 
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type='submit'>Save</Button>
    </Form>
    </Container>
  )
}

export default UserForm;