import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoCard from './TodoCard';
import { Container, Button, Form, Dropdown, Card, Row, Col } from 'react-bootstrap';
<<<<<<< HEAD

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  
  const handleAddTodo = () => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        name: taskName,
        description: taskDescription,
        status: 'not completed'
      }
    ]);
    setTaskName('');
    setTaskDescription('');
  };
=======
import Card from './assets/card';
>>>>>>> 9335497a8840646652c5c8d7c8c658ef8ecfa1f2

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

<<<<<<< HEAD
  const handleEdit = (id, newName, newDescription) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, name: newName, description: newDescription }
          : todo
      )
    );
  };

  const handleStatusChange = (id, newStatus) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, status: newStatus } : todo
      )
    );
  };

  const filteredTodos = todos.filter(todo => 
    filter === 'all' || filter === todo.status
  );

  return (
    <Container>
      <h1 className="my-4">Todo App</h1>
      <Form className="mb-4">
        <Form.Group controlId="taskName">
          <Form.Label>Task Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter task name" 
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="taskDescription">
          <Form.Label>Task Description</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter task description" 
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleAddTodo}>Add Todo</Button>
      </Form>
      <Dropdown className="mb-4">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Filter: {filter === 'all' ? 'All' : filter}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setFilter('all')}>All</Dropdown.Item>
          <Dropdown.Item onClick={() => setFilter('completed')}>Completed</Dropdown.Item>
          <Dropdown.Item onClick={() => setFilter('not completed')}>Not Completed</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Row>
        {filteredTodos.map(todo => (
          <Col key={todo.id} sm={12} md={6} lg={4} className="mb-3">
            <TodoCard
              todo={todo}
              onDelete={handleDelete}
              onEdit={handleEdit}
              onStatusChange={handleStatusChange}
            />
          </Col>
        ))}
      </Row>
=======
function App() {
  
  return (
    <Container>
     <Card></Card>
>>>>>>> 9335497a8840646652c5c8d7c8c658ef8ecfa1f2
    </Container>
  );
}

export default App;