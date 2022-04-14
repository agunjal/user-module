import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/users/Layout";
import CreateUser from "./components/users/CreateUser";
import UserUpdate from "./components/users/UserUpdate";
import UserList from "./components/users/UserList";
import NoPage from "./components/users/NoPage";
import UserView from "./components/users/UserView";

const App = () => {
  return (
    <Container>
    <h1>User Module</h1>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="users/create" element={<CreateUser />} />
            <Route path="users/update/:id" element={<UserUpdate />} />
            <Route path="users/view/:id" element={<UserView />} />
            <Route path="users" element={<UserList />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </Container>
  );
};

export default App;
