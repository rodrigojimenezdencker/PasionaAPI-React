import React from 'react';
import Input from './Input';
import PeopleList from './PeopleList';
import FormAddWorkers from './FormAddWorkers'
import { Container, Form } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Container className="App-header">
          <Input />
          <PeopleList />
        </Container>
      </Route>
      <Route path="/add">
        <FormAddWorkers />
      </Route>
    </Switch>
  </Router>
);
export default App;