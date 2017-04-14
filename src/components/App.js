import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import PurpleAppBar from './PurpleAppBar.js'; 

const App = () => (
  <div>
    <PurpleAppBar />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
