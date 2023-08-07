import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from './todoSlice';
import './styles.css'; 

const TodoList = () => {
  const todos = useSelector(state => state.todo);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedTodoText, setEditedTodoText] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo({
        id: Date.now(),
        text: newTodo,
      }));
      setNewTodo('');
    }
  };

  const handleDeleteTodo = id => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = (id, text) => {
    setEditingTodoId(id);
    setEditedTodoText(text);
  };

  const handleUpdateTodo = () => {
    if (editedTodoText.trim() !== '') {
      dispatch(updateTodo({
        id: editingTodoId,
        text: editedTodoText,
      }));
      setEditingTodoId(null);
      setEditedTodoText('');
    }
  };

  return (
    <div>
  <h3 className="todo-list">Todo List</h3>
  <div className="input-section">
    <input
      type="text"
      value={newTodo}
      onChange={e => setNewTodo(e.target.value)}
      placeholder="Add a new todo"
    />
    <button onClick={handleAddTodo}>Add</button>
  </div>
  <ul>
    {todos.map(todo => (
      <li key={todo.id} className="todo-box">
        {editingTodoId === todo.id ? (
          <div className="edit-section">
            <input
              type="text"
              value={editedTodoText}
              onChange={e => setEditedTodoText(e.target.value)}
            />
            <div className="button-section">
              <button onClick={handleUpdateTodo}>Update</button>
            </div>
          </div>
        ) : (
          <div>
            <div className="todo-text">{todo.text}</div>
          </div>
        )}
        <div className="button">
          {editingTodoId !== todo.id && (
            <button onClick={() => handleEditTodo(todo.id, todo.text)}>Edit</button>
          )}
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        </div>
      </li>
    ))}
  </ul>
</div>

  );
};

export default TodoList;
