import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodos } from '../../features/todos/todosSlice';
import { Box } from '@mui/material';

const TodosForm = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
  
    const handleInputChange = (event) => {
      setText(event.target.value);
    };
  
    const handleAddTodo = (text) => {
      const todo = {
        text: text,
        id: Math.random() * 100,
        completed: false,
      };
      dispatch(addTodos(todo));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      handleAddTodo(text);
      setText("");
    };
  return (
    <>
    <Box component="form" onSubmit={handleSubmit} sx={{  display: "flex",
        justifyContent: "center",    gap:"10px", width:"100%"}}>
      <input
        className="form_input_todos"
        type="text"
        name="text"
        value={text}
        onChange={handleInputChange}
        required
        placeholder="Enter task text..."
      />
      <button className="form__btn" type="submit">
        Add task
      </button>
    </Box>
  </>
  )
}

export default TodosForm
