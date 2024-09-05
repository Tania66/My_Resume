import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deletedTodo, editTodo, toggleTodo } from '../../features/todos/todosSlice';
import { IoMdCloudDone } from 'react-icons/io';
import { FaRegEdit } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { Box} from '@mui/material';

const TodosList = () => {
    const tasks = useSelector(state => state.todos.tasks);
    const dispatch = useDispatch();
    const [edit, setEdit] = useState("");
    const [editId, setEditId] = useState(null);
  
    const handleEditTodo = (id) => {
      if (edit.trim() === "") {
        return alert("Can not be empty")
      }
      dispatch(editTodo({ id, newText: edit }));
      setEditId(null);
      setEdit("");
    };
  return (
    <Box sx={{width:"100%"}}>
    {tasks.length > 0 ? (
      tasks.map((todo) => (
        <Box key={todo.id} sx={{  display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            py: "25px",
            position: "relative",
            zIndex: "11",
          }}>
          <input
            className="checkbox"
            checked={todo.completed}
            type="checkbox"
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          {editId === todo.id ? (
            <Box sx={{  display: "flex",
                justifyContent:" space-between",
                alignItems: "center",
                gap: "12px",
              width: "54%",
                position: "relative",
                zIndex: "11"
              }}>
              <input
                className="input_edit"
                placeholder="Edit your todo"
                type="text"
                value={edit}
                onChange={(e) => setEdit(e.target.value)}
              />
              <button
                onClick={() => handleEditTodo(todo.id)}
              >
                <IoMdCloudDone size={24} />
              </button>
            </Box>
          ) : (
            <p className="text">{todo.text}</p>
          )}
          {editId !== todo.id && (
            <button onClick={() => setEditId(todo.id)}>
              <FaRegEdit size={22} />
            </button>
          )}
          <button
            className="btn_delete"
            type="button"
            onClick={() => dispatch(deletedTodo(todo.id))}
          >
            <MdClose size={24} />
          </button>
        </Box>
      ))
    ) : (
      <div className="todos_inner_empty">
        <p className="todos_inner_empty_text">
          You have not added any{" "}
          <span className="todos_inner_empty_span">task</span> yet...
        </p>
      </div>
    )}
  </Box>
  )
}

export default TodosList
