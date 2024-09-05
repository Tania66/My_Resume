import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPostById } from "../../features/swapi/PostOperation";
import { Box } from "@mui/material";

const SwapiForm = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchPostById(query));
    setQuery("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{  display: "flex",
        justifyContent: "center",    gap:"10px"}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
      
        }}
      >
          <label className='form_label'>https://jsonplaceholder.typicode.com/posts/ </label>
          <input
            className="form_input"
            onChange={handleInputChange}
            placeholder="Enter id post"
            value={query}
            type="number"
            name="query"
            required
          />
        </Box>  
          <button  className="form__btn" type="submit">Get Info</button>
     
      
    </Box>
  );
};

export default SwapiForm;
