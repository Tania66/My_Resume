import { Box, Skeleton} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const SwapiList = () => {
  const post = useSelector((state) => state.swapi.item);
  const loading = useSelector(state => state.swapi.loading);
  const postJson = JSON.stringify(post, null, 120);
  return (
    <>
      <Box
        sx={{
          py: "25px",
          height: 200,
          width:320,
          display: "flex",
          justifyContent: "center",
          flexDirection:"column",
          alignItems: "flex-start",
        }}
      >
               {loading ? (<Skeleton animation="wave" height={200} width={320}/>) :(post.length !== 0 && <p>{postJson}</p> )  }
      </Box>
    </>
  );
};

export default SwapiList;

