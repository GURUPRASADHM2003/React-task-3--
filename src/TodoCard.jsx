import React, { useState } from 'react';
import { Card, Button, Dropdown } from 'react-bootstrap';

function TodoCard({ todo, onDelete, onEdit, onStatusChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(todo.name);
  const [newDescription, setNewDescription] = useState(todo.description);

  const handleSaveEdit = () => {
    onEdit(todo.id, newName, newDescription);
    setIsEditing(false);
  };

  return (
    <Card>
      <Card.Body>
        {isEditing ? (
          <>
            <Card.Title>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </Card.Title>
            <Card.Text>
              <textarea
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </Card.Text>
            <Button variant="success" onClick={handleSaveEdit}>Save</Button>
            <Button variant="secondary" onClick={() => setIsEditing(false)}>Cancel</Button>
          </>
        ) : (
          <>
            <Card.Title>{todo.name}</Card.Title>
            <Card.Text>{todo.description}</Card.Text>
            <Dropdown>
              <Dropdown.Toggle variant="info" id="dropdown-basic">
                {todo.status}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => onStatusChange(todo.id, 'completed')}>Completed</Dropdown.Item>
                <Dropdown.Item onClick={() => onStatusChange(todo.id, 'not completed')}>Not Completed</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="warning" onClick={() => setIsEditing(true)}>Edit</Button>
            <Button variant="danger" onClick={() => onDelete(todo.id)}>Delete</Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default TodoCard;