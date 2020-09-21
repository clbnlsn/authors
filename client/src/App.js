import React from 'react';
import {Router,Link} from '@reach/router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import New from './views/New';
import Main from './views/Main';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <h1>Favorte Authors</h1>
      <Link to='/new' className="btn btn-lg btn-success btn-outline-info text-dark m-10 p-10">Add Author</Link>
      <Router>
        <Main path='/'/>
        <New path='/new'/>
        <Edit path='/edit/:id'/>
      </Router>
    </div>
  );
}

export default App;
